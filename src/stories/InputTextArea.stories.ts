import type { Meta, StoryObj } from "@storybook/vue3"
import { ref } from "vue"
import InputTextArea from "../components/form/InputTextArea.vue"

const meta = {
  title: "Form/InputTextArea",
  component: InputTextArea,
  tags: ["autodocs"],
  args: {
    name: "text-area",
    label: "Label",
    placeholder: "Type something",
    required: true,
    focus: false,
    standalone: false,
    helpText: undefined,
    rows: "5",
    disabled: false,
    modelValue: undefined,
  },
  decorators: [() => ({ template: "<div class=\"flex justify-center gap-6\"><story/></div>" })],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof InputTextArea>

export default meta
type Story = StoryObj<typeof meta>

export const Required: Story = {
  name: "Required",
  render: (args) => ({
    setup() {
      const value = ref<string>("")
      return {
        args,
        value
      }
    },
    components: { InputTextArea },
    template: `
      <InputTextArea v-bind="args" v-model="value" class="w-80" />
    `,
  }),
}

export const Optional: Story = {
  name: "Optional",
  args: {
    required: false,
  },
  render: (args) => ({
    setup() {
      const value = ref<string>("")
      return {
        args,
        value
      }
    },
    components: { InputTextArea },
    template: `
      <InputTextArea v-bind="args" v-model="value" class="w-80" />
    `,
  }),
}


export const Focus: Story = {
  name: "Focus",
  args: {
    focus: true,
  },
  render: (args) => ({
    setup() {
      const value = ref<string>("")
      return {
        args,
        value
      }
    },
    components: { InputTextArea },
    template: `
      <InputTextArea v-bind="args" v-model="value" class="w-80" />
    `,
  }),
}


export const HelpText: Story = {
  name: "HelpText",
  args: {
    helpText: "This is a help text",
  },
  render: (args) => ({
    setup() {
      const value = ref<string>("")
      return {
        args,
        value
      }
    },
    components: { InputTextArea },
    template: `
      <InputTextArea v-bind="args" v-model="value" class="w-80" />
    `,
  }),
}

export const Disabled: Story = {
  name: "Disabled",
  args: {
    disabled: true,
  },
  render: (args) => ({
    setup() {
      const value = ref<string>("")
      return {
        args,
        value
      }
    },
    components: { InputTextArea },
    template: `
      <InputTextArea v-bind="args" v-model="value" class="w-80" />
    `,
  }),
}
