import type { Meta, StoryObj } from "@storybook/vue3"
import Loader from "../components/Loader.vue"

const meta = {
  title: "Components/Loader",
  component: Loader,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg", "xl"] },
    color: { control: "select", options: ["light", "dark", "neutral"] },
    isTextVisible: { control: "boolean" },
  },
  args: {
    size: "lg",
    color: "light",
    isTextVisible: true,
  },
  decorators: [() => ({ template: "<div class=\"flex justify-center gap-6\"><story/></div>" })],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: "Default",
  render: (args) => ({
    setup() {
      return { args }
    },
    components: { Loader },
    template: `
      <Loader v-bind="args" />
    `,
  }),
}

export const NoText: Story = {
  name: "No text",
  args: {
    isTextVisible: false,
  },
  render: (args) => ({
    setup() {
      return { args }
    },
    components: { Loader },
    template: `
      <Loader v-bind="args" />
    `,
  }),
}
