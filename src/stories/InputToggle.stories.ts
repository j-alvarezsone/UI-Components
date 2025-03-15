import type { Meta, StoryObj } from "@storybook/vue3"
import { ref } from "vue"
import InputToggle from "../components/form/InputToggle.vue"

const meta = {
  title: "Form/InputToggle",
  component: InputToggle,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["md", "lg",] },
    position: { control: "select", options: ["left", "right",] },
  },
  args: {
    size: "lg",
    name: "toggle",
    label: undefined,
    secondaryLabel: undefined,
    description: undefined,
    position: "right",
    disabled: false,
    spaceBetween: false,
  },
  decorators: [() => ({ template: "<div class=\"flex justify-center gap-6\"><story/></div>" })],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof InputToggle>

export default meta
type Story = StoryObj<typeof meta>

export const Sizes: Story = {
  name: "Sizes",
  args: {
    label: "Large",
    checkedValue: true,
    uncheckedValue: false,
  },
  render: (args) => ({
    setup() {
      const toggle = ref<boolean>(false)
      return {
        toggle,
        args
      }
    },
    components: { InputToggle },
    template: `
      <InputToggle
        v-bind="args"
        v-model="toggle"
        size="md"
        label="Medium"
      />
      <InputToggle
        v-bind="args"
        v-model="toggle"
      />
    `,
  }),
}

export const Description: Story = {
  name: "Description",
  args: {
    label: "Toggle",
    checkedValue: true,
    uncheckedValue: false,
    description: "This is a description",
  },
  render: (args) => ({
    setup() {
      const toggle = ref<boolean>(false)
      return {
        toggle,
        args
      }
    },
    components: { InputToggle },
    template: `
      <InputToggle
        v-bind="args"
        v-model="toggle"
      />
    `,
  }),
}

export const Position: Story = {
  name: "Label Position",
  args: {
    label: "Toggle",
    checkedValue: true,
    uncheckedValue: false,
  },
  render: (args) => ({
    setup() {
      const toggle = ref<boolean>(false)
      return {
        toggle,
        args
      }
    },
    components: { InputToggle },
    template: `
      <InputToggle
        v-bind="args"
        v-model="toggle"
      />
      <InputToggle
        v-bind="args"
        v-model="toggle"
        position="left"
      />
    `,
  }),
}
