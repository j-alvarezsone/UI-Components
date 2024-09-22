<script setup lang="ts">
  defineProps<{ msg: string }>();
</script>

<template>
  <p class="text-blue-500 font-roboto-medium text-2xl">{{ msg }}</p>
</template>
