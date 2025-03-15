import type { Meta, StoryObj } from "@storybook/vue3"
import BaseButton from "../components/base/BaseButton.vue"
import ButtonGroup from "../components/ButtonGroup.vue"

const meta = {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  tags: ["autodocs"],
  argTypes: {

  },
  args: {
    border: false,
  },
  decorators: [() => ({ template: "<div class=\"flex justify-center gap-6\"><story/></div>" })],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Group: Story = {
  name: "Button Group",
  render: () => ({
    components: { ButtonGroup, BaseButton },
    template: `
    <ButtonGroup>
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
    </ButtonGroup>
    `,
  }),
}

export const GroupWithBorder: Story = {
  name: "Button Group With Border",
  args: {
    border: true,
  },
  render: (args) => ({
    setup() {
      return { args }
    },
    components: { ButtonGroup, BaseButton },
    template: `
    <ButtonGroup v-bind="args">
      <BaseButton variant="transparent">
        Primary
      </BaseButton>
      <BaseButton  variant="transparent">
        Secondary
      </BaseButton>
      <BaseButton  variant="transparent">
        Tertiary
      </BaseButton>
      <BaseButton  variant="transparent">
        Danger
      </BaseButton>
    </ButtonGroup>
    `,
  }),
}
