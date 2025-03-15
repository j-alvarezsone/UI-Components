import type { Meta, StoryObj } from "@storybook/vue3"
import BaseIcon from "../components/base/BaseIcon.vue"

const meta = {
  title: "Components/BaseIcon",
  component: BaseIcon,
  tags: ["autodocs"],
  argTypes: {
    name: { control: "select", options: ["ErrorOutline", "Copy", "QuestionCircle", "Close", "Search", "ChevronDown", "Check", "Email", "Locked", "Eye", "EyeClosed", "ChevronLeft", "ChevronRight"] },
  },
  decorators: [() => ({ template: "<div class=\"flex justify-center gap-6\"><story/></div>" })],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof BaseIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Icons: Story = {
  name: "Icons",
  args: {
    name: "Search",
  },
  render: (args) => ({
    components: { BaseIcon },
    setup() {
      return { args }
    },
    template: `
      <BaseIcon v-bind="args" />
    `,
  }),
}
