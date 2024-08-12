import type { ElementComponent } from '@aracna/react'
import { createBaseElementComponent } from '../../functions/create-base-element-component.js'
import type { AracnaChipProps } from '../../definitions/props.js'
import type { AracnaChipElementAttributes, AracnaChipElementEventMap } from '@aracna/web-components'
import { AracnaChipElement } from '@aracna/web-components/elements/data/chip-element'

export const AracnaChip: ElementComponent<AracnaChipElement, AracnaChipProps> = createBaseElementComponent<
  AracnaChipElement,
  AracnaChipElementAttributes,
  AracnaChipElementEventMap
>('aracna-chip', AracnaChipElement)
