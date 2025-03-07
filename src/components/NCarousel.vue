<script setup lang="ts" generic="T">
import type { ComponentPublicInstance } from "vue"
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core"
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from "vue"
import { useEventListener } from "../composables/useEventListner"
import BaseIcon from "./base/BaseIcon.vue"
import Indicator from "./Indicator.vue"

interface Props {
  items: T[]
  itemKey: (item: T) => string | number
}

type GroupRef = HTMLElement | Element | ComponentPublicInstance | null

const props = defineProps<Props>()

const slider = ref<HTMLElement | null>(null)
// const isDown = ref<boolean>(false)
// const startX = ref<number>(0)
// const scrollLeftStart = ref<number>(0)
const isAtStart = ref<boolean>(true)
const isAtEnd = ref<boolean>(false)
const isScrollable = ref<boolean>(false)
const currentGroupIndex = ref<number>(0)
const groupRefs = ref<GroupRef[]>([])
const isSliderHovered = ref<boolean>(false)

const breakpoints = useBreakpoints(breakpointsTailwind)
const lgAndSmaller = breakpoints.smallerOrEqual("lg")
const activeBreakPoint = breakpoints.active()

const groupedItems = computed(() => {
  let displayItemsPerGroup: number
  if (activeBreakPoint.value === "lg") {
    displayItemsPerGroup = 5
  } else if (lgAndSmaller.value) {
    displayItemsPerGroup = 2
  } else {
    displayItemsPerGroup = 6
  }

  const groups: (T | undefined)[][] = []

  for (let i = 0; i < props.items.length; i += displayItemsPerGroup) {
    const group: (T | undefined)[] = props.items.slice(i, i + displayItemsPerGroup)

    while (group.length < displayItemsPerGroup) {
      group.push(undefined)
    }

    groups.push(group)
  }

  return groups
})

function toKey(item: T | undefined, index: number) {
  if (props.itemKey && item) {
    return `${props.itemKey(item)}-${index}`
  }

  return `undefined-${index}`
}

function scrollToLeft() {
  if (currentGroupIndex.value <= 0)
    return

  currentGroupIndex.value--
  const group = groupRefs.value[currentGroupIndex.value]
  if (group && group instanceof HTMLElement) {
    group.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" })
  }
}

function scrollToRight() {
  if (currentGroupIndex.value >= groupedItems.value.length - 1)
    return

  currentGroupIndex.value++
  const group = groupRefs.value[currentGroupIndex.value]
  if (group && group instanceof HTMLElement) {
    group.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" })
  }
}

// const mouseDown = (e: MouseEvent) => {
//   if (!slider.value) return

//   isDown.value = true
//   startX.value = e.pageX - slider.value.offsetLeft
//   scrollLeftStart.value = slider.value.scrollLeft
// }

// const mouseMove = (e: MouseEvent) => {
//   if (!slider.value || !isDown.value) return

//   const x = e.pageX - slider.value.offsetLeft
//   const walk = (x - startX.value) * 3 // scroll-fast
//   slider.value.scrollLeft = scrollLeftStart.value - walk
// }

// const mouseUp = () => {
//   isDown.value = false
// }

const onMouseOver = () => (isSliderHovered.value = true)
const onMouseOut = () => (isSliderHovered.value = false)

function checkScrollPosition() {
  if (!slider.value)
    return

  const { scrollLeft, scrollWidth, clientWidth } = slider.value
  const adjustedScrollWidth = scrollWidth - clientWidth

  isAtStart.value = scrollLeft === 0
  isAtEnd.value = scrollLeft >= adjustedScrollWidth

  let groupWidth: number | undefined

  if (groupRefs.value[0] instanceof HTMLElement) {
    groupWidth = groupRefs.value[0].offsetWidth
  }

  const groupCount = groupRefs.value?.length
  const calculatedIndex = groupWidth ? Math.floor(scrollLeft / groupWidth) : 0

  currentGroupIndex.value = calculatedIndex < groupCount ? calculatedIndex : groupCount - 1
}

let observer: MutationObserver | null = null

function calculateIsScrollable() {
  nextTick(() => {
    if (!slider.value)
      return

    const totalItemWidth = Array.from(slider.value.children).reduce((total, child) => {
      return total + child.clientWidth
    }, 0)

    isScrollable.value = totalItemWidth > slider.value.clientWidth
  })
}

function keyupHandler(e: KeyboardEvent) {
  if (isSliderHovered.value) {
    if (e.shiftKey && e.key === "ArrowLeft") {
      scrollToLeft()
    }
    if (e.shiftKey && e.key === "ArrowRight") {
      scrollToRight()
    }
  }
}

useEventListener(window, "keyup", keyupHandler)

onMounted(() => {
  if (!slider.value)
    return

  slider.value.addEventListener("scroll", checkScrollPosition)

  observer = new MutationObserver(calculateIsScrollable)

  observer.observe(slider.value, { childList: true, subtree: true, characterData: true })

  calculateIsScrollable()
})

onBeforeUnmount(() => {
  if (slider.value) {
    slider.value.removeEventListener("scroll", checkScrollPosition)

    if (observer) {
      observer.disconnect()
      observer = null
    }
  }
})
</script>

<template>
  <div class="relative w-full">
    <button
      v-if="!isAtStart && isScrollable"
      class="absolute top-1/2 -translate-y-1/2 h-full -left-1 z-20 hover:bg-black/40 transform duration-75 ease-out hover:text-white w-8 rounded-r-2xl flex justify-center items-center group/button focus:outline-hidden"
      @click.stop.prevent="scrollToLeft"
    >
      <BaseIcon name="ChevronLeft" class="size-7 transform duration-300 ease-in-out group-hover/button:scale-125" />
    </button>
    <div ref="slider" class="media-scroller" @mouseover="onMouseOver" @mouseout="onMouseOut">
      <div v-for="(group, index) in groupedItems" :key="`group-${index}`" ref="groupRefs" class="media-group h-40 my-1">
        <div v-for="(item, itemIndex) in group" :key="toKey(item, itemIndex)" class="rounded-2xl" :class="{ 'bg-white cursor-pointer hover:ring-3 hover:ring-blue-300/50': item }">
          <slot :item="item" />
        </div>
      </div>
    </div>
    <Indicator v-if="groupedItems.length > 1" :items="groupedItems" :current-index="currentGroupIndex" />
    <button
      v-if="!isAtEnd && isScrollable"
      class="absolute top-1/2 -translate-y-1/2 h-full -right-1 z-20 hover:bg-black/40 transform duration-75 ease-out hover:text-white w-8 rounded-l-2xl flex justify-center items-center group/button focus:outline-hidden"
      @click.stop.prevent="scrollToRight"
    >
      <BaseIcon name="ChevronRight" class="size-7 transform duration-300 ease-in-out group-hover/button:scale-125" />
    </button>
  </div>
</template>

<style scoped>
.media-scroller,
.media-group {
  display: grid;
  gap: 1.25rem;
  grid-auto-flow: column;
}

.media-scroller {
  overflow-x: auto;
  scroll-behavior: smooth;
  grid-auto-columns: 100%;
  padding: 0 3rem;
  scroll-padding-inline: 3rem;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.media-scroller::-webkit-scrollbar {
  display: none;
}

.media-group {
  grid-auto-columns: 1fr;
}
</style>
