<script setup lang="ts">
withDefaults(
  defineProps<{
    border?: boolean
  }>(),
  {
    border: false,
  },
)
</script>

<template>
  <span class="button-group" :class="{ 'border border-gray-300 rounded-lg': border }">
    <slot />
  </span>
</template>

<style scoped>
.button-group :deep(.grouped-button:first-child:not(:only-child)) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.button-group :deep(.grouped-button:last-child:not(:only-child)) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.button-group :deep(.grouped-button:not(:first-child):not(:last-child)) {
  border-radius: 0;
}

.button-group :deep(.grouped-button:not(:last-child)) {
  border-right: 1px solid #d0d5dd;
}

.button-group :deep(.grouped-button:focus) {
  position: relative;
  z-index: 1;
}
</style>
