<script lang="ts" setup>
import type { Icons } from "../../type/icon"
import { computed, defineAsyncComponent } from "vue"

const props = defineProps<{
  name: Icons
}>()

const iconComponent = computed(() => {
  if (props.name) {
    return defineAsyncComponent(() => import(`../icons/${props.name}.vue`))
  }

  return ""
})
</script>

<template>
  <component :is="iconComponent" v-if="iconComponent" />
</template>
