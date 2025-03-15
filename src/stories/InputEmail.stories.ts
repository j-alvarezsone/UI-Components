import type { Meta, StoryObj } from "@storybook/vue3"
import { ref } from "vue"
import InputEmail from "../components/form/InputEmail.vue"

const meta = {
  title: "Form/InputEmail",
  component: InputEmail,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
  args: {
    name: "email",
    placeholder: "Type your email",
    label: "Label",
    required: true,
    focus: false,
    tooltip: undefined,
    size: "md",
    iconSize: "size-4",
    standalone: false,
    helpText: undefined,
    disabled: false,
    readonly: false,
    copy: false,
    loading: false,
    clearable: false,
    onePassword: false,
    bgColor: undefined,
    modelValue: undefined,
  },
  decorators: [() => ({ template: "<div class=\"flex justify-center gap-6\"><story/></div>" })],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof InputEmail>

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
    components: { InputEmail },
    template: `
      <InputEmail v-bind="args" v-model="value" class="w-80" />
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
    components: { InputEmail },
    template: `
      <InputEmail v-bind="args" v-model="value" class="w-80" />
    `,
  }),
}

export const Tooltip: Story = {
  name: "Tooltip",
  args: {
    tooltip: "This is a tooltip",
  },
  render: (args) => ({
    setup() {
      const value = ref<string>("")
      return {
        args,
        value
      }
    },
    components: { InputEmail },
    template: `
      <InputEmail v-bind="args" v-model="value" class="w-80" />
    `,
  }),
}

export const Copy: Story = {
  name: "Copy",
  args: {
    copy: true,
  },
  render: (args) => ({
    setup() {
      const value = ref<string>("")
      return {
        args,
        value
      }
    },
    components: { InputEmail },
    template: `
      <InputEmail v-bind="args" v-model="value" class="w-80" />
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
    components: { InputEmail },
    template: `
      <InputEmail v-bind="args" v-model="value" class="w-80" />
    `,
  }),
}

export const Clearable: Story = {
  name: "Clearable",
  args: {
    clearable: true,
  },
  render: (args) => ({
    setup() {
      const value = ref<string>("")
      return {
        args,
        value
      }
    },
    components: { InputEmail },
    template: `
      <InputEmail v-bind="args" v-model="value" class="w-80" />
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
    components: { InputEmail },
    template: `
      <InputEmail v-bind="args" v-model="value" class="w-80" />
    `,
  }),
}

export const Loading: Story = {
  name: "Loading",
  args: {
    loading: true,
  },
  render: (args) => ({
    setup() {
      const value = ref<string>("")
      return {
        args,
        value
      }
    },
    components: { InputEmail },
    template: `
      <InputEmail v-bind="args" v-model="value" class="w-80" />
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
    components: { InputEmail },
    template: `
      <InputEmail v-bind="args" v-model="value" class="w-80" />
    `,
  }),
}

export const Sizes: Story = {
  name: "Sizes",
  render: (args) => ({
    setup() {
      const value = ref<string>("")
      return {
        args,
        value
      }
    },
    components: { InputEmail },
    template: `
      <InputEmail v-bind="args" v-model="value" class="w-80" size="sm" />
      <InputEmail v-bind="args" v-model="value" class="w-80" />
      <InputEmail v-bind="args" v-model="value" class="w-80" size="lg" />
    `,
  }),
}
