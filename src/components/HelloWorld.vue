<script setup lang="ts">
import BaseButton from './base/BaseButton.vue'

defineProps<{ msg: string }>()
</script>

<template>
  <p class="text-blue-500 font-roboto-medium text-2xl">
    {{ msg }}
  </p>
  <BaseButton loading size="lg">
    Click
  </BaseButton>
</template>
