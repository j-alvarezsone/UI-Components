<script setup lang="ts">
import { useField } from "vee-validate"
import { computed } from "vue"

interface Props {
  label?: string
  labelPosition?: "left" | "right"
  name: string
  checkedValue?: boolean
  size?: "sm" | "md" | "lg"
  modelValue?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  label: "",
  labelPosition: "right",
  checkedValue: true,
  size: "md",
  modelValue: undefined,
})

defineEmits<{
  "update:modelValue": [value: boolean]
}>()

const {
  value: inputValue,
  handleChange,
  checked,
} = useField(() => props.name, undefined, {
  type: "checkbox",
  uncheckedValue: false,
  checkedValue: props.checkedValue,
  syncVModel: true,
})

const style = computed(() => {
  return {
    "w-8": props.size === "sm",
    "w-10": props.size === "md",
    "w-14": props.size === "lg",
    "bg-blue-500": inputValue.value,
    "bg-gray-200": !inputValue.value,
  }
})

const subStyle = computed(() => {
  return {
    "size-4": props.size === "sm",
    "size-5": props.size === "md",
    "size-7": props.size === "lg",
    "toggle justify-self-end": inputValue.value,
    "toggle-reverse justify-self-start": !inputValue.value,
  }
})
</script>

<template>
  <div class="flex items-center gap-3 justify-between" :class="labelPosition === 'left' ? 'flex-row' : 'flex-row-reverse'">
    <input class="hidden" type="checkbox" :name="name" :value="inputValue" :checked="checked" @change="handleChange(!inputValue)">
    <slot>
      <p v-if="label" class="text-sm first-letter:uppercase">
        {{ label }}
      </p>
    </slot>
    <div
      class="shrink-0 rounded-full cursor-pointer transition-all duration-300 ease-linear p-px grid"
      :class="style"
      @click="handleChange(!inputValue)"
    >
      <div class="rounded-full bg-white shadow-sm" :class="subStyle" />
    </div>
  </div>
</template>

<style scoped>
@keyframes toggle {
  0% {
    justify-self: flex-start;
  }

  50% {
    width: 100%;
  }

  100% {
    justify-self: flex-end;
  }
}

@keyframes toggle-reverse {
  0% {
    justify-self: flex-end;
  }

  50% {
    width: 100%;
  }

  100% {
    justify-self: flex-start;
  }
}
</style>
