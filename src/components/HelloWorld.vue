<script setup lang="ts">
import BaseButton from "./base/BaseButton.vue"
import Tooltip from "./Tooltip.vue"

defineProps<{ msg: string }>()
</script>

<template>
  <p v-tooltip="'test'" class="text-blue-500 font-roboto-medium text-2xl">
    {{ msg }}
  </p>
  <BaseButton size="lg" icon="QuestionCircle">
    Click!!
  </BaseButton>
  <Tooltip>
    <template #default="{ event }">
      <h2 v-on="event.on">
        Tooltip
      </h2>
    </template>
    <template #content>
      <p>This is the tooltip content</p>
    </template>
  </Tooltip>
</template>
