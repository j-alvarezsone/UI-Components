<script setup lang="ts">
import { useField } from "vee-validate"
import { computed, useSlots } from "vue"

interface Props {
  size?: "md" | "lg"
  name: string
  label?: string
  secondaryLabel?: string
  description?: string
  position?: "left" | "right"
  spaceBetween?: boolean
  disabled?: boolean
  checkedValue: boolean | string | number
  uncheckedValue: boolean | string | number
}

const props = withDefaults(defineProps<Props>(), {
  size: "lg",
  label: undefined,
  secondaryLabel: undefined,
  description: undefined,
  position: "right",
  spaceBetween: false,
  disabled: false,
})

const slots = useSlots()

const { value, handleChange, checked } = useField<boolean | string | number>(() => props.name, undefined, {
  type: "checkbox",
  uncheckedValue: props.uncheckedValue,
  checkedValue: props.checkedValue,
  syncVModel: true,
})

const labelStyle = computed(() => {
  return [
    { "items-center": !slots.description && !props.description },
    { "items-start": slots.description || props.description },
    { "gap-2": props.size === "md" },
    { "text-base gap-3": props.size === "lg" },
    { "cursor-pointer": !props.disabled },
    { "cursor-not-allowed": props.disabled },
    { "flex-row-reverse": props.position === "left" },
    { "justify-between w-full": props.spaceBetween },
  ]
})

const style = computed(() => {
  return [
    { "w-9 h-5 after:h-4 after:w-4": props.size === "md" },
    { "w-11 h-6 after:h-5 after:w-5": props.size === "lg" },
    { "after:bg-white peer-checked:bg-blue-500 ": !props.disabled },
    { "after:bg-gray-50 peer-checked:bg-gray-200": props.disabled },
  ]
})
</script>

<template>
  <label class="inline-flex" :class="labelStyle">
    <span v-if="secondaryLabel" class="text-gray-700 font-roboto-medium">{{ secondaryLabel }}</span>
    <input type="checkbox" class="sr-only peer hidden" :disabled="disabled" :name="name" :value="value" :checked="checked" @change="handleChange(!value)">
    <div
      class="relative bg-gray-200 hover:bg-gray-300 peer-focus:outline-hidden peer-focus:ring-3 peer-focus:ring-blue-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:rtl:after:-translate-x-full after:content-[''] after:absolute after:top-0.5 after:start-0.5 after:rounded-full after:transition-all after:ease-linear shrink-0"
      :class="style"
    />
    <div class="flex flex-col">
      <span class="text-gray-700 font-roboto-medium">
        <slot name="label">{{ label }}</slot>
      </span>
      <span v-if="slots.description || description" class="text-gray-600">
        <slot name="description">{{ description }}</slot>
      </span>
    </div>
  </label>
</template>
