import { Disabled } from './BaseButton.stories';
import type { Meta, StoryObj } from "@storybook/vue3"
import TabManager from "../components/tabs/TabManager.vue"
import TabView from "../components/tabs/TabView.vue"


const meta = {
  title: "Components/TabManager",
  component: TabManager,
  subcomponents: { TabView },
  tags: ["autodocs"],
  argTypes: {

  },
  args: {
    center: true,
  },
  decorators: [() => ({ template: "<div class=\"flex flex-col justify-center gap-10\"><story/></div>" })],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TabManager>

export default meta
type Story = StoryObj<typeof meta>

export const Tab: Story = {
  name: "Tab",
  render: (args) => ({
    setup() {
      return { args }
    },
    components: { TabManager, TabView },
    template: `
      <TabManager v-bind="args">
        <TabView title="tab1">
          Tab 1 content
        </TabView>
        <TabView title="tab2">
          Tab 2 content
        </TabView>
        <TabView title="tab3">
          Tab 3 content
        </TabView>
        <TabView title="tab4">
          Tab 4 content
        </TabView>
        <TabView title="tab5">
          Tab 5 content
        </TabView>
      </TabManager>
    `,
  }),
}

export const TabDisabled: Story = {
  name: "Tab Disabled",
  render: (args) => ({
    setup() {
      return { args }
    },
    components: { TabManager, TabView },
    template: `
      <TabManager v-bind="args">
        <TabView title="tab1">
          Tab 1 content
        </TabView>
        <TabView title="tab2" :disabled="true">
          Tab 2 content
        </TabView>
        <TabView title="tab3" :disabled="true">
          Tab 3 content
        </TabView>
        <TabView title="tab4" :disabled="true">
          Tab 4 content
        </TabView>
        <TabView title="tab5">
          Tab 5 content
        </TabView>
      </TabManager>
    `,
  }),
}

export const TabHidden: Story = {
  name: "Tab Hidden",
  render: (args) => ({
    setup() {
      return { args }
    },
    components: { TabManager, TabView },
    template: `
      <TabManager v-bind="args">
        <TabView title="tab1">
          Tab 1 content
        </TabView>
        <TabView title="tab2" :hidden="true">
          Tab 2 content
        </TabView>
        <TabView title="tab3" :hidden="true">
          Tab 3 content
        </TabView>
        <TabView title="tab4" :hidden="true">
          Tab 4 content
        </TabView>
        <TabView title="tab5">
          Tab 5 content
        </TabView>
      </TabManager>
    `,
  }),
}
