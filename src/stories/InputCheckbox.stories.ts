import type { Meta, StoryObj } from "@storybook/vue3"
import { ref } from "vue"
import InputCheckbox from "../components/form/InputCheckbox.vue"

const meta = {
  title: "Form/InputCheckbox",
  component: InputCheckbox,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md",] },
  },
  args: {
    name: "checkbox",
    label: undefined,
    uncheckedValue: false,
    description: undefined,
    disabled: false,
    size: "md",
    modelValue: undefined
  },
  decorators: [() => ({ template: "<div class=\"flex justify-center gap-6\"><story/></div>" })],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof InputCheckbox>

export default meta
type Story = StoryObj<typeof meta>

export const Sizes: Story = {
  name: "Sizes",
  args: {
    checkedValue: true,
  },
  render: (args) => ({
    setup() {
      const isChecked = ref<boolean>(false)
      return {
        isChecked,
        args
      }
    },
    components: { InputCheckbox },
    template: `
      <InputCheckbox v-bind="args" v-model="isChecked" size="sm">
        <template #label>
          This is checkbox
        </template>
      </InputCheckbox>
      <InputCheckbox v-bind="args" v-model="isChecked">
        <template #label>
          This is checkbox
        </template>
      </InputCheckbox>
    `,
  }),
}

export const Label: Story = {
  name: "Label",
  args: {
    checkedValue: true,
    label: "Label from props"
  },
  render: (args) => ({
    setup() {
      const isChecked = ref<boolean>(false)
      return {
        isChecked,
        args
      }
    },
    components: { InputCheckbox },
    template: `
      <InputCheckbox v-bind="args" v-model="isChecked"/>
    `,
  }),
}

export const Description: Story = {
  name: "Description",
  args: {
    checkedValue: true,
    label: "Label from props",
    description: "This is a description"
  },
  render: (args) => ({
    setup() {
      const isChecked = ref<boolean>(false)
      return {
        isChecked,
        args
      }
    },
    components: { InputCheckbox },
    template: `
      <InputCheckbox v-bind="args" v-model="isChecked"/>
    `,
  }),
}

export const Disabled: Story = {
  name: "Disabled",
  args: {
    checkedValue: true,
    label: "Label from props",
    disabled: true,
  },
  render: (args) => ({
    setup() {
      const isChecked = ref<boolean>(false)
      return {
        isChecked,
        args
      }
    },
    components: { InputCheckbox },
    template: `
      <InputCheckbox v-bind="args" v-model="isChecked"/>
    `,
  }),
}
