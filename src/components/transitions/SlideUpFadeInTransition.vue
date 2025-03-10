<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})
</script>

<template>
  <Transition name="slideUpFadeIn" v-bind="$attrs">
    <slot />
  </Transition>
</template>

<style scoped>
.slideUpFadeIn-enter-active, .slideUpFadeIn-leave-active {
  transition: all 1s ease-out;
}

.slideUpFadeIn-enter-from, .slideUpFadeIn-leave-to {
  transform: translateY(50%);
  opacity: 0;
}

.slideUpFadeIn-enter-to, .slideUpFadeIn-leave-from {
  transform: translateY(0%);
  opacity: 1;
}
</style>
