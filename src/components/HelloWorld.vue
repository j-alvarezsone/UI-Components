<script setup lang="ts">
import type { MenuItem } from "./Menu.vue"
import { ref, useTemplateRef } from "vue"
import BaseButton from "./base/BaseButton.vue"
import Menu from "./Menu.vue"

defineProps<{ msg: string }>()

const message = useTemplateRef("msg")
const isVisible = ref<boolean>(false)

const items: MenuItem[] = [
  { label: "Documents", items: [{ icon: "Check", label: "Test 1 klhldhssd lhlsdh dlhlsdhsd lhldshsd hlsdhh lhlds lhdsl " }] },
  { label: "Documents", items: [{ icon: "Check", label: "Test 2" }] },
  { items: [{ icon: "Check", label: "Test 3" }] },
  { items: [{ icon: "Check", label: "Test 4" }] },
  { items: [{ icon: "Check", label: "Test 5" }] },
  { items: [{ icon: "Check", label: "Test 6" }] },
  { items: [{ icon: "Check", label: "Test 7" }] },
  { items: [{ icon: "Check", label: "Test 8" }] },
  { items: [{ icon: "Check", label: "Test 9" }] },
  { items: [{ icon: "Check", label: "Test 10" }] },
]
</script>

<template>
  <div class="flex items-center justify-center flex-col gap-10">
    <p ref="msg" class="text-blue-500 font-roboto-medium text-2xl">
      {{ msg }}
    </p>
    <Menu v-model:is-visible="isVisible" class="w-60" :target="message" :items>
      <template #header>
        <div class="flex items-center justify-center p-2">
          <h2>Header</h2>
        </div>
      </template>
      <template #footer>
        <div class="flex items-center justify-center p-2">
          <h2>Footer</h2>
        </div>
      </template>
    </Menu>
    <BaseButton @click="isVisible = !isVisible">
      Open
    </BaseButton>
  </div>
</template>
