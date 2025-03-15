import type { Meta, StoryObj } from "@storybook/vue3"
import BaseButton from "../components/base/BaseButton.vue"

const meta = {
  title: "Components/BaseButton",
  component: BaseButton,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["primary", "secondary", "tertiary", "danger", "transparent"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
    icon: { control: "select", options: [undefined, "ErrorOutline", "Copy", "QuestionCircle", "Close", "Search", "ChevronDown", "Check", "Email", "Locked", "Eye", "EyeClosed", "ChevronLeft", "ChevronRight"] },
    iconPos: { control: "inline-radio", options: ["left", "right"] },
  },
  args: {
    type: "button",
    disabled: false,
    size: "md",
    variant: "primary",
    icon: undefined,
    iconPos: "left",
    iconSize: undefined,
    loading: false,
    outlined: false,
    text: false,
    link: false,
    ripple: true,
    rippleBgColor: undefined,
    rounded: false,
  },
  decorators: [() => ({ template: "<div class=\"flex justify-center gap-6\"><story/></div>" })],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof BaseButton>

export default meta
type Story = StoryObj<typeof meta>

export const Variants: Story = {
  name: "Variants",
  render: () => ({
    components: { BaseButton },
    template: `
      <BaseButton>
        Primary
      </BaseButton>
      <BaseButton  variant="secondary">
        Secondary
      </BaseButton>
      <BaseButton  variant="tertiary">
        Tertiary
      </BaseButton>
      <BaseButton  variant="danger">
        Danger
      </BaseButton>
      <BaseButton  variant="transparent">
        Transparent
      </BaseButton>
    `,
  }),
}

export const Sizes: Story = {
  name: "Sizes",
  render: () => ({
    components: { BaseButton },
    template: `
      <BaseButton size="sm">
        Small
      </BaseButton>
      <BaseButton>
        Medium
      </BaseButton>
      <BaseButton  size="lg">
        Large
      </BaseButton>
    `,
  }),
}

export const Outlined: Story = {
  name: "Outlined",
  args: {
    outlined: true,
  },
  render: (args) => ({
    setup() {
      return { args }
    },
    components: { BaseButton },
    template: `
      <BaseButton v-bind="args">
        Outlined
      </BaseButton>
      <BaseButton v-bind="args" variant="secondary">
        Outlined
      </BaseButton>
      <BaseButton v-bind="args" variant="tertiary">
        Outlined
      </BaseButton>
      <BaseButton v-bind="args" variant="danger">
        Outlined
      </BaseButton>
      <BaseButton v-bind="args" variant="transparent">
        Outlined
      </BaseButton>
    `,
  }),
}

export const Text: Story = {
  name: "Text",
  args: {
    text: true,
  },
  render: (args) => ({
    setup() {
      return { args }
    },
    components: { BaseButton },
    template: `
      <BaseButton v-bind="args">
        Text
      </BaseButton>
      <BaseButton v-bind="args" variant="secondary">
        Text
      </BaseButton>
      <BaseButton v-bind="args" variant="tertiary">
        Text
      </BaseButton>
      <BaseButton v-bind="args" variant="danger">
        Text
      </BaseButton>
      <BaseButton v-bind="args" variant="transparent">
        Text
      </BaseButton>
    `,
  }),
}

export const Link: Story = {
  name: "Link",
  args: {
    link: true,
  },
  render: (args) => ({
    setup() {
      return { args }
    },
    components: { BaseButton },
    template: `
      <BaseButton v-bind="args">
        Link
      </BaseButton>
      <BaseButton v-bind="args" variant="secondary">
        Link
      </BaseButton>
      <BaseButton v-bind="args" variant="tertiary">
        Link
      </BaseButton>
      <BaseButton v-bind="args" variant="danger">
        Link
      </BaseButton>
      <BaseButton v-bind="args" variant="transparent">
        Link
      </BaseButton>
    `,
  }),
}

export const WithIcon: Story = {
  name: "With Icon",
  args: {
    icon: "Copy",
  },
  render: (args) => ({
    setup() {
      return { args }
    },
    components: { BaseButton },
    template: `
      <BaseButton v-bind="args">
        WithIcon
      </BaseButton>
      <BaseButton v-bind="args" variant="secondary">
        WithIcon
      </BaseButton>
      <BaseButton v-bind="args" variant="tertiary">
        WithIcon
      </BaseButton>
      <BaseButton v-bind="args" variant="danger">
        WithIcon
      </BaseButton>
      <BaseButton v-bind="args" variant="transparent">
        WithIcon
      </BaseButton>
    `,
  }),
}

export const IconOnly: Story = {
  name: "Icon Only",
  args: {
    icon: "Search",
  },
  render: (args) => ({
    setup() {
      return { args }
    },
    components: { BaseButton },
    template: `
      <BaseButton v-bind="args" />
      <BaseButton v-bind="args" variant="secondary" />
      <BaseButton v-bind="args" variant="tertiary" />
      <BaseButton v-bind="args" variant="danger"/>
      <BaseButton v-bind="args" variant="transparent" />
    `,
  }),
}

export const Rounded: Story = {
  name: "Rounded",
  args: {
    rounded: true,
  },
  render: (args) => ({
    setup() {
      return { args }
    },
    components: { BaseButton },
    template: `
      <BaseButton v-bind="args">
        WithIcon
      </BaseButton>
      <BaseButton v-bind="args" variant="secondary">
        WithIcon
      </BaseButton>
      <BaseButton v-bind="args" variant="tertiary">
        WithIcon
      </BaseButton>
      <BaseButton v-bind="args" variant="danger">
        WithIcon
      </BaseButton>
      <BaseButton v-bind="args" variant="transparent">
        WithIcon
      </BaseButton>
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
      return { args }
    },
    components: { BaseButton },
    template: `
      <BaseButton v-bind="args">
        Disabled
      </BaseButton>
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
      return { args }
    },
    components: { BaseButton },
    template: `
      <BaseButton v-bind="args">
        Loading
      </BaseButton>
    `,
  }),
}
