import type { Meta, StoryObj } from "@storybook/vue3"
import Ribbon from "../components/Ribbon.vue"

const meta = {
  title: "Components/Ribbon",
  component: Ribbon,
  tags: ["autodocs"],
  argTypes: {
    tag: { control: "select", options: ["requested", "beta", "upgrade", "latest", "recommend"] },
  },
  args: {
    tag: "requested",
  },
  decorators: [() => ({ template: "<div class=\"flex justify-center gap-6\"><story/></div>" })],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Ribbon>

export default meta
type Story = StoryObj<typeof meta>

export const Requested: Story = {
  name: "Requested",
  render: (args) => ({
    setup() {
      return { args }
    },
    components: { Ribbon },
    template: `
      <Ribbon v-bind="args" />
    `,
  }),
}

export const Beta: Story = {
  name: "Beta",
  args: {
    tag: "beta",
  },
  render: (args) => ({
    setup() {
      return { args }
    },
    components: { Ribbon },
    template: `
      <Ribbon v-bind="args" />
    `,
  }),
}

export const Upgrade: Story = {
  name: "Upgrade",
  args: {
    tag: "upgrade",
  },
  render: (args) => ({
    setup() {
      return { args }
    },
    components: { Ribbon },
    template: `
      <Ribbon v-bind="args" />
    `,
  }),
}
