<script setup lang="ts">
import { useField } from "vee-validate"
import { computed } from "vue"

interface Props {
  name: string
  label: string
  checkedValue: string
  description?: string
  disabled?: boolean
  size?: "sm" | "md"
  modelValue?: string
  width?: string
}

const props = withDefaults(defineProps<Props>(), {
  description: "",
  disabled: false,
  size: "sm",
  modelValue: undefined,
  width: "w-max",
})

defineEmits<{
  "update:modelValue": [value: string]
}>()

const { checked, handleChange } = useField<string>(() => props.name, undefined, {
  type: "radio",
  checkedValue: props.checkedValue,
  syncVModel: true,
})

function onHandleChange() {
  if (!props.disabled) {
    handleChange(props.checkedValue)
  }
}

const style = computed(() => {
  return {
    "cursor-pointer": !props.disabled,
    "cursor-not-allowed": props.disabled,
  }
})

const buttonStyle = computed(() => {
  return {
    "group-hover:border-blue-500 group-hover:bg-blue-50 focus:border-blue-300 focus:ring-3 ring-blue-300/50": !props.disabled,
    "border-gray-200 bg-gray-50": props.disabled,
    "border-blue-500 bg-blue-50 focus:border-blue-500": checked?.value,
    "border-gray-300 ": !checked?.value && !props.disabled,
    "size-4": props.size === "sm",
    "size-5": props.size === "md",
  }
})
const buttonDotStyle = computed(() => {
  return {
    "size-[6px]": props.size === "sm",
    "size-2": props.size === "md",
    "bg-gray-400": props.disabled,
    "bg-blue-500": checked?.value,
  }
})

const labelStyle = computed(() => {
  return {
    "text-sm ml-2": props.size === "sm",
    "text-base ml-3": props.size === "md",
    "cursor-not-allowed text-gray-500": props.disabled,
    "cursor-pointer": !props.disabled,
  }
})

const descriptionStyle = computed(() => {
  return {
    "text-xs": props.size === "sm",
    "text-sm": props.size === "md",
    "ml-6": props.size === "sm",
    "ml-8": props.size === "md",
  }
})
</script>

<template>
  <div class="group" :class="[style, width]" @click="onHandleChange">
    <input :id="name" type="radio" :checked="checked" :disabled="disabled" class="hidden" @input="onHandleChange">
    <div class="flex items-center">
      <button type="button" class="border rounded-full grid place-content-center outline-hidden" :class="buttonStyle">
        <p v-if="checked" class="rounded-full" :class="buttonDotStyle" />
      </button>
      <label :for="name" class="font-roboto-medium.value" :class="labelStyle">
        <span class="first-letter:uppercase">{{ label }}</span>
      </label>
    </div>
    <p v-if="description" class="text-gray-500" :class="descriptionStyle">
      {{ description }}
    </p>
  </div>
</template>
