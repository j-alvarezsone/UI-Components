<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})
</script>

<template>
  <Transition name="slideLeft" v-bind="$attrs">
    <slot />
  </Transition>
</template>

<style scoped>
.slideLeft-enter-active, .slideLeft-leave-active {
  transition: all 1s ease-out;
}

.slideLeft-enter-from, .slideLeft-leave-to {
  transform: translateX(50%);
  opacity: 0;
}

.slideLeft-enter-to, .slideLeft-leave-from {
  transform: translateX(0%);
  opacity: 1;
}
</style>
