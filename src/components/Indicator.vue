<script setup lang="ts" generic="T">
interface Props {
  items: T[]
  currentIndex: number
}

defineProps<Props>()
</script>

<template>
  <ul class="absolute -top-4 right-12 flex flex-wrap gap-1 px-12 md:px-0">
    <template v-for="(_group, index) in items" :key="`indicator-${index}`">
      <li
        class="w-3 h-1 rounded-full transition-colors duration-500"
        :class="{
          'bg-blue-600': currentIndex === index,
          'bg-gray-300': currentIndex !== index,
        }"
      />
    </template>
  </ul>
</template>
