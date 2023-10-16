import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaChipProps } from '@aracna/react'
import type { ChipElementAttributes, ChipElementEventMap } from '@aracna/web'
import { ChipElement } from '@aracna/web-components/elements/data/chip-element'

export const AracnaChip: ElementComponent<ChipElement, AracnaChipProps> = createBaseElementComponent<ChipElement, ChipElementAttributes, ChipElementEventMap>(
  'aracna-chip',
  ChipElement
)
