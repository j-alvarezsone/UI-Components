<script setup lang="ts">
import type { Tag } from "../type"
import Ribbon from "./Ribbon.vue"

interface Props {
  label?: string
  tag: Tag | undefined
}

withDefaults(defineProps<Props>(), {
  label: undefined,
})
</script>

<template>
  <figure class="group/figure flex flex-col justify-center items-center gap-4 h-full transform duration-300 ease-in-out p-2">
    <template v-if="tag">
      <Ribbon :tag="tag" />
      <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" :alt="label" :width="60" :height="60" class="transform duration-300 ease-in-out group-hover/figure:scale-125">
    </template>
    <figcaption class="text-center text-xs md:text-sm">
      {{ label }}
    </figcaption>
  </figure>
</template>
