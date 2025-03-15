import type { Meta, StoryObj } from "@storybook/vue3"
import { TOOLTIP_PLACEMENTS } from "../constants/tooltip"
import { ref } from "vue"
import InputPassword from "../components/form/InputPassword.vue"

const meta = {
  title: "Form/InputPassword",
  component: InputPassword,
  tags: ["autodocs"],
  argTypes: {
    tooltipPlacement: { control: "select", options: ["top", "topStart", "topEnd", "bottom", "bottomStart", "bottomEnd", "left", "leftStart", "leftEnd", "right", "rightStart", "rightEnd"] },
    size: { control: "select", options: ["sm", "md", "lg",] },
  },
  args: {
    name: "password",
    label: "Label",
    placeholder: "Type secret password",
    required: true,
    focus: false,
    tooltip: undefined,
    tooltipPlacement: TOOLTIP_PLACEMENTS.TOP,
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
} satisfies Meta<typeof InputPassword>

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
    components: { InputPassword },
    template: `
      <InputPassword v-bind="args" v-model="value" class="w-80" />
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
    components: { InputPassword },
    template: `
      <InputPassword v-bind="args" v-model="value" class="w-80" />
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
    components: { InputPassword },
    template: `
      <InputPassword v-bind="args" v-model="value" class="w-80" />
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
    components: { InputPassword },
    template: `
      <InputPassword v-bind="args" v-model="value" class="w-80" />
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
    components: { InputPassword },
    template: `
      <InputPassword v-bind="args" v-model="value" class="w-80" />
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
    components: { InputPassword },
    template: `
      <InputPassword v-bind="args" v-model="value" class="w-80" />
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
    components: { InputPassword },
    template: `
      <InputPassword v-bind="args" v-model="value" class="w-80" />
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
    components: { InputPassword },
    template: `
      <InputPassword v-bind="args" v-model="value" class="w-80" />
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
    components: { InputPassword },
    template: `
      <InputPassword v-bind="args" v-model="value" class="w-80" />
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
    components: { InputPassword },
    template: `
      <InputPassword v-bind="args" v-model="value" class="w-80" size="sm" />
      <InputPassword v-bind="args" v-model="value" class="w-80" />
      <InputPassword v-bind="args" v-model="value" class="w-80" size="lg" />
    `,
  }),
}
