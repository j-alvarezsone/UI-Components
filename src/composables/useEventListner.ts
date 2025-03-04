import type { Ref } from "vue"
import { isRef, onBeforeUnmount, unref, watch } from "vue"

/**
 * Window Event based useEventListener interface
 *
 * @param target
 * @param event
 * @param listener
 * @param options
 */
export function useEventListener<E extends keyof WindowEventMap>(
  target: Window,
  event: E,
  listener: (this: Window, ev: WindowEventMap[E]) => any,
  options?: boolean | AddEventListenerOptions,
): void

/**
 * Document Event based useEventListener interface
 *
 * @param target
 * @param event
 * @param listener
 * @param options
 */
export function useEventListener<E extends keyof DocumentEventMap>(
  target: Document,
  event: E,
  listener: (this: Document, ev: DocumentEventMap[E]) => any,
  options?: boolean | AddEventListenerOptions,
): void

/**
 * Element Event based useEventListener interface
 *
 * @param target
 * @param event
 * @param listener
 * @param options
 */
export function useEventListener<E extends keyof HTMLElementEventMap>(
  target: Ref<EventTarget | null> | EventTarget,
  event: E,
  listener: (ev: HTMLElementEventMap[E]) => any,
  options?: boolean | AddEventListenerOptions,
): void

export function useEventListener(
  // the target could be reactive ref which adds flexibility
  target: Ref<EventTarget | null> | EventTarget,
  event: string,
  listener: (ev: Event) => any,
  options?: boolean | AddEventListenerOptions,
) {
  function register(el: EventTarget | null) {
    if (el instanceof EventTarget) {
      el.addEventListener(event, listener, options)
    }
  }

  function unregister(el: EventTarget | null) {
    if (el instanceof EventTarget) {
      el.removeEventListener(event, listener, options)
    }
  }

  if (isRef(target)) {
    watch(
      target,
      (newValue, oldValue, onCleanup) => {
        if (oldValue) {
          unregister(oldValue)
        }

        register(newValue)

        onCleanup(() => {
          unregister(newValue)
        })
      },
      { immediate: true, flush: "post" },
    )
  } else {
    register(unref(target))
  }

  onBeforeUnmount(() => {
    unregister(unref(target))
  })
}
