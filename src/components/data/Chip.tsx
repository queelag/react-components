import { ChipProps, createBaseElementComponent, ElementComponent } from '@aracna/react'
import { ChipElementAttributes, ChipElementEventMap } from '@aracna/web'
import { ChipElement } from '@aracna/web-components/elements/data/chip.element.js'

export const AracnaChip: ElementComponent<ChipElement, ChipProps> = createBaseElementComponent<ChipElement, ChipElementAttributes, ChipElementEventMap>(
  'aracna-chip',
  ChipElement
)
