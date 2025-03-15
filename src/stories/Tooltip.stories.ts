import type { Meta, StoryObj } from "@storybook/vue3"
import Tooltip from "../components/Tooltip.vue"
import BaseButton from "../components/base/BaseButton.vue"

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    placement: { control: "select", options: ["top", "topStart", "topEnd", "bottom", "bottomStart", "bottomEnd", "left", "leftStart", "leftEnd", "right", "rightStart", "rightEnd"] },
  },
  args: {
    content: undefined,
    delay: 50,
    placement: "top",
    noArrow: false,
    bgLight: false,
    maxHeight: "800px",
    maxWidth: "800px",
    fontSize: "1rem",
    padding: "0.5rem 0.75rem",
    zIndex: 9999,
    html: false,
    autoHide: false,
    disabled: false,
    eventOnClick: false,
  },
  decorators: [() => ({ template: "<div class=\"flex justify-center gap-6\"><story/></div>" })],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Top: Story = {
  name: "Top",
  render: (args) => ({
    setup() {
      return { args }
    },
    components: { Tooltip },
    template: `
      <Tooltip v-bind="args">
        <template #default="{ event }">
        <h2 v-on="event.on">
          Hover me
        </h2>
        </template>
        <template #content>
          <p>This is the tooltip content</p>
        </template>
      </Tooltip>
    `,
  }),
}

export const TopStart: Story = {
  name: "Top Start",
  args: {
    placement: "topStart",
  },
  render: (args) => ({
    setup() {
      return { args }
    },
    components: { Tooltip },
    template: `
      <Tooltip v-bind="args">
        <template #default="{ event }">
        <h2 v-on="event.on">
          Hover me
        </h2>
        </template>
        <template #content>
          <p>This is the tooltip content</p>
        </template>
      </Tooltip>
    `,
  }),
}

export const TopEnd: Story = {
  name: "Top End",
  args: {
    placement: "topEnd",
  },
  render: (args) => ({
    setup() {
      return { args }
    },
    components: { Tooltip },
    template: `
      <Tooltip v-bind="args">
        <template #default="{ event }">
        <h2 v-on="event.on">
          Hover me
        </h2>
        </template>
        <template #content>
          <p>This is the tooltip content</p>
        </template>
      </Tooltip>
    `,
  }),
}

export const Bottom: Story = {
  name: "Bottom",
  args: {
    placement: "bottom",
  },
  render: (args) => ({
    setup() {
      return { args }
    },
    components: { Tooltip },
    template: `
      <Tooltip v-bind="args">
        <template #default="{ event }">
        <h2 v-on="event.on">
          Hover me
        </h2>
        </template>
        <template #content>
          <p>This is the tooltip content</p>
        </template>
      </Tooltip>
    `,
  }),
}

export const BottomStart: Story = {
  name: "Bottom Start",
  args: {
    placement: "bottomStart",
  },
  render: (args) => ({
    setup() {
      return { args }
    },
    components: { Tooltip },
    template: `
      <Tooltip v-bind="args">
        <template #default="{ event }">
        <h2 v-on="event.on">
          Hover me
        </h2>
        </template>
        <template #content>
          <p>This is the tooltip content</p>
        </template>
      </Tooltip>
    `,
  }),
}

export const BottomEnd: Story = {
  name: "Bottom End",
  args: {
    placement: "bottomEnd",
  },
  render: (args) => ({
    setup() {
      return { args }
    },
    components: { Tooltip },
    template: `
      <Tooltip v-bind="args">
        <template #default="{ event }">
        <h2 v-on="event.on">
          Hover me
        </h2>
        </template>
        <template #content>
          <p>This is the tooltip content</p>
        </template>
      </Tooltip>
    `,
  }),
}

export const Left: Story = {
  name: "Left",
  args: {
    placement: "left",
  },
  render: (args) => ({
    setup() {
      return { args }
    },
    components: { Tooltip },
    template: `
      <Tooltip v-bind="args">
        <template #default="{ event }">
        <h2 v-on="event.on">
          Hover me
        </h2>
        </template>
        <template #content>
          <p>This is the tooltip content</p>
        </template>
      </Tooltip>
    `,
  }),
}

export const LeftStart: Story = {
  name: "Left Start",
  args: {
    placement: "leftStart",
  },
  render: (args) => ({
    setup() {
      return { args }
    },
    components: { Tooltip },
    template: `
      <Tooltip v-bind="args">
        <template #default="{ event }">
        <h2 v-on="event.on">
          Hover me
        </h2>
        </template>
        <template #content>
          <p>This is the tooltip content</p>
        </template>
      </Tooltip>
    `,
  }),
}

export const LeftEnd: Story = {
  name: "Left End",
  args: {
    placement: "leftEnd",
  },
  render: (args) => ({
    setup() {
      return { args }
    },
    components: { Tooltip },
    template: `
      <Tooltip v-bind="args">
        <template #default="{ event }">
        <h2 v-on="event.on">
          Hover me
        </h2>
        </template>
        <template #content>
          <p>This is the tooltip content</p>
        </template>
      </Tooltip>
    `,
  }),
}

export const Right: Story = {
  name: "Right",
  args: {
    placement: "right",
  },
  render: (args) => ({
    setup() {
      return { args }
    },
    components: { Tooltip },
    template: `
      <Tooltip v-bind="args">
        <template #default="{ event }">
        <h2 v-on="event.on">
          Hover me
        </h2>
        </template>
        <template #content>
          <p>This is the tooltip content</p>
        </template>
      </Tooltip>
    `,
  }),
}

export const RightStart: Story = {
  name: "Right Start",
  args: {
    placement: "rightStart",
  },
  render: (args) => ({
    setup() {
      return { args }
    },
    components: { Tooltip },
    template: `
      <Tooltip v-bind="args">
        <template #default="{ event }">
        <h2 v-on="event.on">
          Hover me
        </h2>
        </template>
        <template #content>
          <p>This is the tooltip content</p>
        </template>
      </Tooltip>
    `,
  }),
}

export const RightEnd: Story = {
  name: "Right End",
  args: {
    placement: "rightEnd",
  },
  render: (args) => ({
    setup() {
      return { args }
    },
    components: { Tooltip },
    template: `
      <Tooltip v-bind="args">
        <template #default="{ event }">
        <h2 v-on="event.on">
          Hover me
        </h2>
        </template>
        <template #content>
          <p>This is the tooltip content</p>
        </template>
      </Tooltip>
    `,
  }),
}

export const BgLight: Story = {
  name: "Background Light",
  args: {
    bgLight: true,
  },
  render: (args) => ({
    setup() {
      return { args }
    },
    components: { Tooltip },
    template: `
      <Tooltip v-bind="args">
        <template #default="{ event }">
        <h2 v-on="event.on">
          Hover me
        </h2>
        </template>
        <template #content>
          <p>This is the tooltip content</p>
        </template>
      </Tooltip>
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
    components: { Tooltip },
    template: `
      <Tooltip v-bind="args">
        <template #default="{ event }">
        <h2 v-on="event.on">
          Hover me
        </h2>
        </template>
        <template #content>
          <p>This is the tooltip content</p>
        </template>
      </Tooltip>
    `,
  }),
}

export const Html: Story = {
  name: "Html",
  args: {
    html: true,
    content: `<p class="text-blue-500">This is the tooltip content</p>`,
  },
  render: (args) => ({
    setup() {
      return { args }
    },
    components: { Tooltip },
    template: `
      <Tooltip v-bind="args">
        <template #default="{ event }">
        <h2 v-on="event.on">
          Hover me
        </h2>
        </template>
      </Tooltip>
    `,
  }),
}


export const AutoHide: Story = {
  name: "Auto Hide",
  args: {
    autoHide: true,
  },
  render: (args) => ({
    setup() {
      return { args }
    },
    components: { Tooltip },
    template: `
      <Tooltip v-bind="args">
        <template #default="{ event }">
        <h2 v-on="event.on">
          Hover me
        </h2>
        </template>
        <template #content>
          <p>This is the tooltip content</p>
        </template>
      </Tooltip>
    `,
  }),
}

export const NoArrow: Story = {
  name: "No Arrow",
  args: {
    noArrow: true,
  },
  render: (args) => ({
    setup() {
      return { args }
    },
    components: { Tooltip },
    template: `
      <Tooltip v-bind="args">
        <template #default="{ event }">
        <h2 v-on="event.on">
          Hover me
        </h2>
        </template>
        <template #content>
          <p>This is the tooltip content</p>
        </template>
      </Tooltip>
    `,
  }),
}

export const EventOnClick: Story = {
  name: "Event On Click",
  args: {
    eventOnClick: true,
  },
  render: (args) => ({
    setup() {
      return { args }
    },
    components: { Tooltip, BaseButton },
    template: `
      <Tooltip v-bind="args">
        <template #default="{ event, keepTooltipVisible }">
        <BaseButton v-on="event.on" @mouseenter="keepTooltipVisible" >
          Click me
        </BaseButton>
        </template>
        <template #content>
          <p>This is the tooltip content</p>
        </template>
      </Tooltip>
    `,
  }),
}
