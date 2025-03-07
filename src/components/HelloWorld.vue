<script setup lang="ts">
import { ref } from "vue"
import { TAGS } from "../constants/tags"
import BaseButton from "./base/BaseButton.vue"
import InputCheckbox from "./form/InputCheckbox.vue"
import InputEmail from "./form/InputEmail.vue"
import InputPassword from "./form/InputPassword.vue"
import InputRadio from "./form/InputRadio.vue"
import InputSelect from "./form/InputSelect.vue"
import InputText from "./form/InputText.vue"
import InputTextArea from "./form/InputTextArea.vue"
import InputToggle from "./form/InputToggle.vue"
import NCarousel from "./NCarousel.vue"
import ServiceGallery from "./ServiceGallery.vue"
import TabManager from "./tabs/TabManager.vue"
import TabView from "./tabs/TabView.vue"
import Tooltip from "./Tooltip.vue"

defineProps<{ msg: string }>()
const testMsg = ref("Hello Vue 3 + Vite")
const options = [
  { value: "1", label: "One" },
  { value: "2", label: "Two" },
  { value: "3", label: "Three" },
]
const option = ref("1")
const check = ref(false)
const radio = ref("")
const toggle = ref(false)

const items = [
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
</script>

<template>
  <div class="flex items-center justify-center flex-col gap-10">
    <p v-tooltip="'test'" class="text-blue-500 font-roboto-medium text-2xl">
      {{ msg }}
    </p>
    <BaseButton size="lg" icon="Copy">
      Click!!
    </BaseButton>
    <Tooltip>
      <template #default="{ event }">
        <h2 v-on="event.on">
          Tooltip
        </h2>
      </template>
      <template #content>
        <p>This is the tooltip content</p>
      </template>
    </Tooltip>
    <InputText v-model="testMsg" class="w-88" name="test" label="test" placeholder="Type something..." copy icon="QuestionCircle" />
    <InputSelect v-model="option" class="w-88" name="test" label="test" placeholder="Select option" :options="options" searchable tooltip="test" />
    <InputTextArea class="w-88" name="message" label="test" placeholder="SType something..." />
    <InputCheckbox v-model="check" name="check" :checked-value="true" label="$ USD" />
    <InputRadio v-model="radio" name="usd" checked-value="USD" label="$ USD" />
    <InputRadio v-model="radio" name="eur" checked-value="EUR" label="€ EUR" />
    <InputToggle v-model="toggle" name="toggle" label="Toggle" :checked-value="true" :unchecked-value="false" tooltip-text="test" hide-tooltip label-position="right" />
    <InputEmail class="w-88" name="email" label="Test" placeholder="Type your Email..." />
    <InputPassword class="w-88" name="password" label="Test" placeholder="Type your Password..." />
    <TabManager center>
      <TabView title="tab1">
        Tab 1 content
      </TabView>
      <TabView title="tab2" :disabled="true">
        Tab 2 content
      </TabView>
      <TabView title="tab3" :hidden="true">
        Tab 3 content
      </TabView>
      <TabView title="tab4">
        Tab 4 content
      </TabView>
      <TabView title="tab5">
        Tab 5 content
      </TabView>
    </TabManager>
  </div>
  <br>
  <div class="w-full">
    <NCarousel :items :item-key="(item) => item.id">
      <template #default="{ item }">
        <ServiceGallery :key="item?.id" :label="item?.name" :tag="item?.tag" />
      </template>
    </NCarousel>
  </div>
</template>
