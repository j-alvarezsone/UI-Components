<script setup lang="ts">
import type { TabView } from "../../type/tabs"
import { inject } from "vue"
import { TAB_KEY } from "../../type/tabs"

withDefaults(defineProps<TabView>(), {
  disabled: false,
  hidden: false,
})

const tab = inject<string>(TAB_KEY)
</script>

<template>
  <slot v-if="tab === title" />
</template>
