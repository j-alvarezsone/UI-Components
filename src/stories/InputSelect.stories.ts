import type { Meta, StoryObj } from "@storybook/vue3"
import { TOOLTIP_PLACEMENTS } from "../constants/tooltip"
import { ref } from "vue"
import InputSelect from "../components/form/InputSelect.vue"

const options = [
  { value: "vue", label: "Vue", id: "1" },
  { value: "react", label: "React", id: "2" },
  { value: "angular", label: "Angular", id: "3" },
  { value: "svelte", label: "Svelte", id: "4" },
  { value: "nuxt", label: "Nuxt", id: "5" },
  { value: "next", label: "Next", id: "6" },
]

const meta = {
  title: "Form/InputSelect",
  // @ts-ignore
  component: InputSelect,
  tags: ["autodocs"],
  argTypes: {
    tooltipPlacement: { control: "select", options: ["top", "topStart", "topEnd", "bottom", "bottomStart", "bottomEnd", "left", "leftStart", "leftEnd", "right", "rightStart", "rightEnd"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
  args: {
    name: "select",
    label: "Label",
    placeholder: "Pick your favorite",
    disabled: false,
    searchable: true,
    options,
    size: "md",
    clearable: false,
    searchClearable: true,
    standalone: false,
    required: true,
    loading: false,
    itemHeight: 44,
    tooltip: undefined,
    tooltipPlacement: TOOLTIP_PLACEMENTS.TOP,
    copy: false,
    errorMessage: undefined,
    disableFilter: false,
    selectFirst: false,
    modelValue: undefined,
    filterBy: undefined
  },
  decorators: [() => ({ template: "<div class=\"flex justify-center gap-6\"><story/></div>" })],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof InputSelect>

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
    components: { InputSelect },
    template: `
      <InputSelect v-bind="args" v-model="value" class="w-80" />
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
    components: { InputSelect },
    template: `
      <InputSelect v-bind="args" v-model="value" class="w-80" />
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
    components: { InputSelect },
    template: `
      <InputSelect v-bind="args" v-model="value" class="w-80" />
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
    components: { InputSelect },
    template: `
      <InputSelect v-bind="args" v-model="value" class="w-80" />
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
    components: { InputSelect },
    template: `
      <InputSelect v-bind="args" v-model="value" class="w-80" />
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
    components: { InputSelect },
    template: `
      <InputSelect v-bind="args" v-model="value" class="w-80" />
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
    components: { InputSelect },
    template: `
      <InputSelect v-bind="args" v-model="value" class="w-80" />
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
    components: { InputSelect },
    template: `
      <InputSelect v-bind="args" v-model="value" class="w-80" />
    `,
  }),
}

export const SelectFirst: Story = {
  name: "Select First",
  args: {
    selectFirst: true,
  },
  render: (args) => ({
    setup() {
      const value = ref<string>("")
      return {
        args,
        value
      }
    },
    components: { InputSelect },
    template: `
      <InputSelect v-bind="args" v-model="value" class="w-80" />
    `,
  }),
}

export const FilterBy: Story = {
  name: "Filter By",
  args: {
    filterBy: ['id'],
  },
  render: (args) => ({
    setup() {
      const value = ref<string>("")
      return {
        args,
        value
      }
    },
    components: { InputSelect },
    template: `
      <InputSelect v-bind="args" v-model="value" class="w-80" />
    `,
  }),
}

export const DisableFilter: Story = {
  name: "Disable Filter",
  args: {
    disableFilter: true,
  },
  render: (args) => ({
    setup() {
      const value = ref<string>("")
      return {
        args,
        value
      }
    },
    components: { InputSelect },
    template: `
      <InputSelect v-bind="args" v-model="value" class="w-80" />
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
    components: { InputSelect },
    template: `
      <InputSelect v-bind="args" v-model="value" class="w-80" size="sm" />
      <InputSelect v-bind="args" v-model="value" class="w-80" />
      <InputSelect v-bind="args" v-model="value" class="w-80" size="lg" />
    `,
  }),
}
