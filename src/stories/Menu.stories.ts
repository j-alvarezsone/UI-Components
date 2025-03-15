import type { Meta, StoryObj } from "@storybook/vue3"
import { ref, useTemplateRef } from "vue"
import BaseButton from "../components/base/BaseButton.vue"
import Menu from "../components/Menu.vue"

const meta = {
  title: "Components/Menu",
  component: Menu,
  tags: ["autodocs"],
  argTypes: {
    position: { control: "select", options: ["left", "right", "center"] },
  },
  args: {
    items: [
      { label: "Documents", items: [{ icon: "Check", label: "Test 1" }] },
      { label: "Documents", items: [{ icon: "Check", label: "Test 2" }] },
      { items: [{ icon: "Check", label: "Test 3" }] },
      { items: [{ icon: "Check", label: "Test 4" }] },
      { items: [{ icon: "Check", label: "Test 5" }] },
      { items: [{ icon: "Check", label: "Test 6" }] },
      { items: [{ icon: "Check", label: "Test 7" }] },
      { items: [{ icon: "Check", label: "Test 8" }] },
      { items: [{ icon: "Check", label: "Test 9" }] },
      { items: [{ icon: "Check", label: "Test 10" }] },
    ],
    position: "left",
    popup: false,
    target: null,
  },
  decorators: [() => ({ template: "<div class=\"flex justify-center gap-6\"><story/></div>" })],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Menu>

export default meta
type Story = StoryObj<typeof meta>

export const LeftPosition: Story = {
  name: "Left Position",
  render: (args) => ({
    setup() {
      const targetRef = useTemplateRef("targetRef")
      const isVisible = ref<boolean>(false)
      return {
        args,
        targetRef,
        isVisible,
      }
    },
    components: { Menu, BaseButton },
    template: `
      <div class="flex items-center justify-center flex-col gap-10">
        <p ref="targetRef" class="text-blue-500 text-2xl">
          Target element
        </p>
        <Menu
          v-bind="args"
          v-model:is-visible="isVisible"
          class="w-60"
          :target="targetRef">
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
    `,
  }),
}

export const RightPosition: Story = {
  name: "Right Position",
  args: {
    position: "right",
  },
  render: (args) => ({
    setup() {
      const targetRef = useTemplateRef("targetRef")
      const isVisible = ref<boolean>(false)
      return {
        args,
        targetRef,
        isVisible,
      }
    },
    components: { Menu, BaseButton },
    template: `
      <div class="flex items-center justify-center flex-col gap-10">
        <p ref="targetRef" class="text-blue-500 text-2xl">
          Target element
        </p>
        <Menu
          v-bind="args"
          v-model:is-visible="isVisible"
          class="w-60"
          :target="targetRef">
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
    `,
  }),
}

export const CenterPosition: Story = {
  name: "Center Position",
  args: {
    position: "center",
  },
  render: (args) => ({
    setup() {
      const targetRef = useTemplateRef("targetRef")
      const isVisible = ref<boolean>(false)
      return {
        args,
        targetRef,
        isVisible,
      }
    },
    components: { Menu, BaseButton },
    template: `
      <div class="flex items-center justify-center flex-col gap-10">
        <p ref="targetRef" class="text-blue-500 text-2xl">
          Target element
        </p>
        <Menu
          v-bind="args"
          v-model:is-visible="isVisible"
          class="w-60"
          :target="targetRef">
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
    `,
  }),
}

export const Popup: Story = {
  name: "Popup",
  args: {
    popup: true,
  },
  render: (args) => ({
    setup() {
      const targetRef = useTemplateRef("targetRef")
      const isVisible = ref<boolean>(false)
      return {
        args,
        targetRef,
        isVisible,
      }
    },
    components: { Menu, BaseButton },
    template: `
      <div class="flex items-center justify-center flex-col gap-10">
        <p ref="targetRef" class="text-blue-500 text-2xl">
          Target element
        </p>
        <Menu
          v-bind="args"
          v-model:is-visible="isVisible"
          class="w-60"
          :target="targetRef">
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
    `,
  }),
}
