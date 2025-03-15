import type { Meta, StoryObj } from "@storybook/vue3"
import { ref } from "vue"
import InputRadio from "../components/form/InputRadio.vue"

const meta = {
  title: "Form/InputRadio",
  component: InputRadio,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md",] },
  },
  args: {
    label: "",
    name: "radio",
    description: undefined,
    disabled: false,
    size: "md",
    modelValue: undefined,
    width: "w-max",
  },
  decorators: [() => ({ template: "<div class=\"flex justify-center gap-6\"><story/></div>" })],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof InputRadio>

export default meta
type Story = StoryObj<typeof meta>

export const Sizes: Story = {
  name: "Sizes",
  args: {
    checkedValue: "medium",
    label: "medium",
  },
  render: (args) => ({
    setup() {
      const currency = ref<string>("")
      return {
        currency,
        args
      }
    },
    components: { InputRadio },
    template: `
      <InputRadio v-bind="args" v-model="currency"/>
      <InputRadio  v-model="currency" name="eur" checked-value="small" label="small" size="sm" />
    `,
  }),
}

export const Description: Story = {
  name: "Description",
  args: {
    checkedValue: "USD",
    label: "US dollar",
    description: "This is a description",
  },
  render: (args) => ({
    setup() {
      const currency = ref<string>("")
      return {
        currency,
        args
      }
    },
    components: { InputRadio },
    template: `
      <InputRadio v-bind="args" v-model="currency"/>
    `,
  }),
}

export const Disabled: Story = {
  name: "Disabled",
  args: {
    checkedValue: "USD",
    label: "US dollar",
    disabled: true
  },
  render: (args) => ({
    setup() {
      const currency = ref<string>("")
      return {
        currency,
        args
      }
    },
    components: { InputRadio },
    template: `
      <InputRadio v-bind="args" v-model="currency"/>
    `,
  }),
}
