import type { TAGS } from "../constants/tags"
import type { TOOLTIP_PLACEMENTS } from "../constants/tooltip"

export type ObjectValues<T> = T[keyof T]
export type ObjectKeys<T> = keyof T

export type TooltipPlacement = ObjectValues<typeof TOOLTIP_PLACEMENTS>

export interface GenericOption {
  label: string
  value: string
}

export type Tag = ObjectValues<typeof TAGS>
