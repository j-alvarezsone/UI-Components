import type { Preview } from "@storybook/vue3"
import { setup } from "@storybook/vue3"
import { clickOutside } from "../src/directives/click-outside"
import { focus } from "../src/directives/focus"
import { ripple } from "../src/directives/ripple"
import { tooltip } from "../src/directives/tooltip"
import "../src/assets/css/main.css"
import "../src/assets/css/tooltip.css"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      source: {
        type: "code",
      },
    },
    storySource: {
      loaderOptions: {
        injectStoryParameters: true,
      },
    },
  },
}

setup((app) => {
  app.directive("ripple", ripple)
  app.directive("tooltip", tooltip)
  app.directive("click-outside", clickOutside)
  app.directive("focus", focus)
})

export default preview
