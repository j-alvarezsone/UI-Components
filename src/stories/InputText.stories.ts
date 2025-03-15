import type { Meta, StoryObj } from "@storybook/vue3"
import InputText from "../components/form/InputText.vue"
import { TOOLTIP_PLACEMENTS } from "../constants/tooltip"
import { ref } from "vue"

const meta = {
  title: "Form/InputText",
  component: InputText,
  tags: ["autodocs"],
  argTypes: {
    type: { control: "radio", options: ["text", "number"] },
    tooltipPlacement: { control: "select", options: ["top", "topStart", "topEnd", "bottom", "bottomStart", "bottomEnd", "left", "leftStart", "leftEnd", "right", "rightStart", "rightEnd"] },
    icon: { control: "select", options: ["ErrorOutline", "Copy", "QuestionCircle", "Close", "Search", "ChevronDown", "Check", "Email", "Locked", "Eye", "EyeClosed", "ChevronLeft", "ChevronRight"] },
    iconPos: { control: "radio", options: ["left", "right"] },
    size: { control: "select", options: ["sm", "md", "lg", "xl"] },
  },
  args: {
    name: "text",
    label: "Label",
    placeholder: "Type something",
    required: true,
    focus: false,
    type: "text",
    tooltip: undefined,
    tooltipPlacement: TOOLTIP_PLACEMENTS.TOP,
    icon: undefined,
    iconPos: "left",
    size: "md",
    iconSize: "size-4",
    standalone: false,
    helpText: undefined,
    disabled: false,
    readonly: false,
    copy: false,
    noBorder: false,
    loading: false,
    clearable: false,
    onePassword: false,
    min: undefined,
    max: undefined,
    bgColor: undefined,
    modelValue: undefined,
    errorMessage: undefined,
    edit: false,
  },
  decorators: [() => ({ template: "<div class=\"flex justify-center gap-6\"><story/></div>" })],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof InputText>

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
    components: { InputText },
    template: `
      <InputText v-bind="args" v-model="value" class="w-80" />
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
    components: { InputText },
    template: `
      <InputText v-bind="args" v-model="value" class="w-80" />
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
    components: { InputText },
    template: `
      <InputText v-bind="args" v-model="value" class="w-80" />
    `,
  }),
}

export const Icon: Story = {
  name: "Icon",
  args: {
    icon: "Search",
  },
  render: (args) => ({
    setup() {
      const value = ref<string>("")
      return {
        args,
        value
      }
    },
    components: { InputText },
    template: `
      <InputText v-bind="args" v-model="value" class="w-80" />
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
    components: { InputText },
    template: `
      <InputText v-bind="args" v-model="value" class="w-80" />
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
    components: { InputText },
    template: `
      <InputText v-bind="args" v-model="value" class="w-80" />
    `,
  }),
}

export const Edit: Story = {
  name: "Edit",
  args: {
    icon: "Search",
    iconPos: "right",
    edit: true,
    placeholder: "Click the icon",
  },
  render: (args) => ({
    setup() {
      const value = ref<string>("")
      return {
        args,
        value
      }
    },
    components: { InputText },
    template: `
      <InputText v-bind="args" v-model="value" class="w-80" />
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
    components: { InputText },
    template: `
      <InputText v-bind="args" v-model="value" class="w-80" />
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
    components: { InputText },
    template: `
      <InputText v-bind="args" v-model="value" class="w-80" />
    `,
  }),
}

export const Error: Story = {
  name: "Error",
  args: {
    errorMessage: "Error",
  },
  render: (args) => ({
    setup() {
      const value = ref<string>("")
      return {
        args,
        value
      }
    },
    components: { InputText },
    template: `
      <InputText v-bind="args" v-model="value" class="w-80" />
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
    components: { InputText },
    template: `
      <InputText v-bind="args" v-model="value" class="w-80" />
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
    components: { InputText },
    template: `
      <InputText v-bind="args" v-model="value" class="w-80" />
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
    components: { InputText },
    template: `
      <InputText v-bind="args" v-model="value" class="w-80" size="sm" />
      <InputText v-bind="args" v-model="value" class="w-80" />
      <InputText v-bind="args" v-model="value" class="w-80" size="lg" />
      <InputText v-bind="args" v-model="value" class="w-80" size="xl" />
    `,
  }),
}
