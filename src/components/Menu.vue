<script setup lang="ts">
import type { CSSProperties } from "vue"
import type { IconName } from "../type/icon"
import { onClickOutside } from "@vueuse/core"
import { nextTick, reactive, ref, watch } from "vue"
import { useEventListener } from "../composables/useEventListner"
import BaseIcon from "./base/BaseIcon.vue"
import FadeTransition from "./transitions/FadeTransition.vue"

interface SubItem {
  label: string
  icon?: IconName
}

export interface MenuItem {
  label?: string
  items: SubItem[]
}

interface Props {
  target: HTMLElement | null
  items: MenuItem[]
  position?: "left" | "right" | "center"
  popup?: boolean
}

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<Props>(), {
  position: "left",
  popup: false,
})

const slots = defineSlots<{
  menuLabel: () => any
  subMenuLabel: (props: { item: MenuItem }) => any
  header: () => any
  footer: () => any
}>()

const isVisible = defineModel<boolean>("isVisible", { default: false })

const root = ref<HTMLElement | null>(null)

const positionStyle = reactive<CSSProperties>({ top: "0px", left: "0px", position: "absolute", marginTop: "1rem", zIndex: "999" })

async function updateDropdownPosition() {
  await nextTick()

  if (!props.target || !root.value)
    return
  const rect = props.target.getBoundingClientRect()
  const scrollX = window.scrollX
  const scrollY = window.scrollY
  const rootWidth = root.value.offsetWidth
  const rootHeight = root.value.offsetHeight
  const viewportHeight = window.innerHeight
  const viewportWidth = window.innerWidth

  const exceedsViewportHeight = rect.bottom + rootHeight > viewportHeight
  const exceedsViewportWidth = rect.right + rootWidth > viewportWidth

  let leftPosition = `${rect.left}px`

  if (props.position === "right" && !exceedsViewportWidth) {
    leftPosition = `${rect.right - rootWidth}px`
  } else if (props.position === "center") {
    let finalLeft = rect.left + scrollX + (rect.width / 2)
    if (finalLeft + (rootWidth / 2) > viewportWidth) {
      finalLeft = viewportWidth - (rootWidth / 2)
    } else if (finalLeft - (rootWidth / 2) < 0) {
      finalLeft = rootWidth / 2
    }
    positionStyle.left = `${finalLeft}px`
    positionStyle.top = exceedsViewportHeight ? `${rect.top + scrollY - rootHeight}px` : `${rect.bottom + scrollY}px`
    positionStyle.marginTop = exceedsViewportHeight ? "-1rem" : "1rem"
    positionStyle.transform = "translateX(-50%)"
    return
  }

  positionStyle.left = leftPosition
  positionStyle.top = exceedsViewportHeight ? `${rect.top + scrollY - rootHeight}px` : `${rect.bottom + scrollY}px`
  positionStyle.marginTop = exceedsViewportHeight ? "-1rem" : "1rem"
}

useEventListener(window, "resize", updateDropdownPosition)
useEventListener(window, "scroll", updateDropdownPosition)

watch(isVisible, (newValue) => {
  if (newValue) {
    updateDropdownPosition()
  }
})

function toKey(item: MenuItem | SubItem, index: number) {
  return `${item.label}-${index}`
}

function handleClick() {
  if (!props.popup)
    return
  isVisible.value = false
}

onClickOutside(root, (event) => {
  if (props.target && props.target.contains(event.target as Node)) {
    return
  }
  isVisible.value = false
})
</script>

<template>
  <Teleport to="body">
    <FadeTransition name="fade">
      <div v-if="isVisible" ref="root" class="z-40 bg-white rounded-lg border border-gray-100 shadow-onWhite overflow-y-auto min-w-50 max-h-80 flex flex-col" :style="positionStyle" v-bind="$attrs" @click.stop>
        <slot name="header" />
        <ul :class="[{ 'border-t': slots.header }, { 'border-b': slots.footer }]">
          <template v-for="(item, _index) in items" :key="toKey(item, _index)">
            <template v-for="(subItem, _subIndex) in item.items" :key="toKey(subItem, _subIndex)">
              <li v-if="item.label" class="text-base text-start font-geomanist-book py-2.5 px-3.5">
                <slot name="menuLabel">
                  {{ item.label }}
                </slot>
              </li>
              <li
                class="cursor-pointer text-base flex flex-col py-2.5 px-3.5 hover:bg-slate-100 gap-4"
              >
                <span class="flex items-center gap-2" @click="handleClick">
                  <slot name="subMenuLabel" :item="item">
                    {{ subItem.label }}
                  </slot>
                  <BaseIcon v-if="subItem.icon" :name="subItem.icon" class="size-6 shrink-0 ml-auto" />
                </span>
              </li>
            </template>
          </template>
        </ul>
        <slot name="footer" />
      </div>
    </FadeTransition>
  </Teleport>
</template>
