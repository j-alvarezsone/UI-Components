<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})
</script>

<template>
  <Transition name="slideDownFade" v-bind="$attrs">
    <slot />
  </Transition>
</template>

<style scoped>
.slideDownFade-leave-active {
  transition: all 0.35s ease-out;
}

.slideDownFade-enter-from,
.slideDownFade-leave-to {
  transform: translateY(-30px);
  opacity: 0;
}
</style>
