<script setup lang="ts">
import { ref } from "vue"
import BaseButton from "./base/BaseButton.vue"
import InputSelect from "./form/InputSelect.vue"
import InputText from "./form/InputText.vue"
import Tooltip from "./Tooltip.vue"

defineProps<{ msg: string }>()
const testMsg = ref("Hello Vue 3 + Vite")
const options = [
  { value: "1", label: "One" },
  { value: "2", label: "Two" },
  { value: "3", label: "Three" },
]
const option = ref("1")
</script>

<template>
  <div class="flex items-center justify-center flex-col gap-10">
    <p v-tooltip="'test'" class="text-blue-500 font-roboto-medium text-2xl">
      {{ msg }}
    </p>
    <BaseButton size="lg" icon="Copy">
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
    <InputText v-model="testMsg" class="w-88" name="test" label="test" placeholder="Type something..." copy icon="QuestionCircle" />
    <InputSelect v-model="option" class="w-88" name="test" label="test" placeholder="Select option" :options="options" searchable tooltip="test" />
  </div>
</template>
