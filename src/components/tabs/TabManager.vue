<script setup lang="ts">
import type { VNode } from "vue"
import type { TabView } from "../../type/tabs"
import { provide, ref, useSlots, watchEffect } from "vue"
import { TAB_KEY } from "../../type/tabs"

withDefaults(
  defineProps<{
    center?: boolean
  }>(),
  {
    center: false,
  },
)

const slots = useSlots()

const tab = defineModel<string>("tab", { default: "" })
const tabs = ref<TabView[]>([])

watchEffect(() => {
  const nodes = slots.default?.({}) || []

  tabs.value = nodes.reduce((acc: TabView[], node: VNode) => {
    const { title, disabled, hidden } = node.props as TabView

    if (title) {
      acc.push({ title, disabled: disabled ?? false, hidden: hidden ?? false })
    }
    return acc
  }, [])

  if (!tab.value && tabs.value.length) {
    tab.value = tabs.value[0].title
  }
})

function onSelectTabView({ title, disabled }: TabView) {
  if (!disabled) {
    tab.value = title
  }
}

function tabViewStyle(tabView: TabView) {
  return {
    "cursor-not-allowed": tabView.disabled,
    "cursor-pointer": !tabView.disabled,
    "border-blue-500 text-gray-900": tab.value === tabView.title,
    "border-transparent": tab.value !== tabView.title,
    "text-gray-400": tab.value !== tabView.title && tabView.disabled,
    "text-gray-600 hover:text-gray-900": tab.value !== tabView.title && !tabView.disabled,
  }
}

provide(TAB_KEY, tab)
</script>

<template>
  <div class="overflow-auto flex flex-col">
    <ul class="flex gap-12 border-b border-gray-200 border-opacity-10 mb-8 whitespace-nowrap" :class="{ 'justify-center': center }">
      <template v-for="tabView in tabs" :key="tabView.title">
        <li v-if="!tabView.hidden" class="border-b-2 pb-1 transition-colors text-base" :class="tabViewStyle(tabView)" @click="onSelectTabView(tabView)">
          <slot name="label" :title="tabView.title">
            {{ tabView.title }}
          </slot>
        </li>
      </template>
    </ul>
    <slot />
  </div>
</template>

<style scoped>
ul li {
  position: relative;
}

ul li::after {
  content: "";
  background-color: #1793ef;
  height: 2px;
  position: absolute;
  bottom: -2px;
  transition: 0.16s all 0.025s;
}

ul li::after {
  left: 100%;
  right: 0;
}

ul li:hover::after {
  left: 0;
  right: 0;
}
</style>
