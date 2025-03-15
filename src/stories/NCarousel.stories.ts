import type { Meta, StoryObj } from "@storybook/vue3"
import NCarousel from "../components/NCarousel.vue"
import { TAGS } from "../constants/tags"
import ServiceGallery from "../components/ServiceGallery.vue"


interface CarouselItem {
  id: number;
  name: string;
  tag: string;
}


const items:CarouselItem[] = [
  { id: 1, name: "item 1", tag: TAGS.BETA },
  { id: 2, name: "item 2", tag: TAGS.LATEST },
  { id: 3, name: "item 3", tag: TAGS.RECOMMEND },
  { id: 4, name: "item 4", tag: TAGS.REQUESTED },
  { id: 5, name: "item 5", tag: TAGS.UPGRADE },
  { id: 6, name: "item 6", tag: TAGS.UPGRADE },
  { id: 7, name: "item 7", tag: TAGS.REQUESTED },
  { id: 8, name: "item 8", tag: TAGS.RECOMMEND },
  { id: 9, name: "item 9", tag: TAGS.LATEST },
  { id: 10, name: "item 10", tag: TAGS.BETA },
]

const meta = {
  title: "Components/NCarousel",
  // @ts-ignore
  component: NCarousel,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    items,
    // @ts-ignore
    itemKey: (item: CarouselItem) => item.id,
  },
  decorators: [() => ({ template: "<div class=\"flex justify-center w-full mt-40\"><story/></div>" })],
  parameters: {
    layout: "",
  },
} satisfies Meta<typeof NCarousel>;


export default meta
type Story = StoryObj<typeof meta>

export const Caorusel: Story = {
  name: "Netflix Carousel",
  render: (args) => ({
    setup() {
      return { args }
    },
    components: { NCarousel, ServiceGallery },
    template: `
      <NCarousel v-bind="args">
      <template #default="{ item }">
        <ServiceGallery :key="item?.id" :label="item?.name" :tag="item?.tag" />
      </template>
    </NCarousel>
    `,
  }),
}
