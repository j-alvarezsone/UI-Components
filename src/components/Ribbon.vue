<script setup lang="ts">
import type { Tag } from "../type"
import { computed } from "vue"
import { TAGS } from "../constants/tags"

interface Props {
  tag: Tag
}

const props = defineProps<Props>()

const bgColor = computed(() => {
  switch (true) {
    case props.tag === TAGS.REQUESTED:
      return "#4db3f7"
    case props.tag === TAGS.BETA:
      return "#eab308"
    case props.tag === TAGS.UPGRADE:
      return "#22c55e"
    default:
      return "transparent"
  }
})

const borderColor = computed(() => {
  switch (true) {
    case props.tag === TAGS.REQUESTED:
      return "#2563eb"
    case props.tag === TAGS.UPGRADE:
      return "#16a34a"
    case props.tag === TAGS.BETA:
      return "#d97706"
    default:
      return "transparent"
  }
})
</script>

<template>
  <div class="ribbon text-tiny md:text-base px-2 md:px-4 py-1">
    {{ tag }}
  </div>
</template>

<style scoped>
.ribbon {
  min-width: calc(30% + 16px);
  background-color: v-bind(bgColor);
  position: absolute;
  text-align: center;
  font-family: var(--font-geomanist-book);
  text-transform: uppercase;
  color: white;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 4px;
  top: 24px;
  right: -16px;
  z-index: 10;
}

.ribbon::after {
  content: "";
  border-top-color: v-bind(borderColor);
  border-left-color: v-bind(borderColor);
  border-right-color: transparent;
  border-bottom-color: transparent;
  width: 0;
  height: 0;
  position: absolute;
  border-style: solid;
  bottom: -16px;
  right: 0;
  border-width: 8px;
}
</style>
