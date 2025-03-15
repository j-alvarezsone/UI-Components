import type { Meta, StoryObj } from "@storybook/vue3"
import Badge from "../components/misc/Badge.vue"


const meta = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    icon: { control: "select", options: ["ErrorOutline", "Copy","QuestionCircle", "Close", "Search", "ChevronDown", "Check", "Email","Locked", "Eye", "EyeClosed", "ChevronLeft", "ChevronRight"] },
    iconPos: { control: "select", options: ["left", "right"] },
    size: { control: "select", options: ["sm" , "md", "lg"] },
    variant: { control: "select", options: ["primary" , "success", "warning", "danger", "neutral"] },
  },
  args: {
    icon: undefined,
    iconPos: "left",
    size: "md",
    variant: "primary",
    iconSize: "size-3",
    label: undefined
  },
  decorators: [() => ({ template: "<div class=\"flex flex-col gap-6\"><story/></div>" })],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Variants: Story = {
  name: "Variants",
  render: () => ({
    components: { Badge },
    template: `
      <Badge> Primary </Badge>
      <Badge variant="success"> Success </Badge>
      <Badge variant="warning"> Warning </Badge>
      <Badge variant="danger"> Danger </Badge>
      <Badge variant="neutral"> Neutral </Badge>
    `,
  }),
}

export const Sizes: Story = {
  name: "Sizes",
  render: () => ({
    components: { Badge },
    template: `
      <Badge size="sm"> Small </Badge>
      <Badge size="md"> Medium </Badge>
      <Badge size="lg"> Large </Badge>
    `,
  }),
}

export const Icon: Story = {
  name: "Icon",
  args: {
    icon: "Check",
  },
  render: (args) => ({
    setup() {
      return { args }
    },
    components: { Badge },
    template: `
      <Badge v-bind="args"> With Icon </Badge>
    `,
  }),
}

export const Label: Story = {
  name: "Label",
  args: {
    label: "label from props"
  },
  render: (args) => ({
    setup() {
      return { args }
    },
    components: { Badge },
    template: `
      <Badge v-bind="args" />
    `,
  }),
}
