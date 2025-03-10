<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})
</script>

<template>
  <Transition name="fade" v-bind="$attrs">
    <slot />
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
