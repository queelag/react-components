import { ChipProps, createBaseElementComponent, ElementComponent } from '@queelag/react'
import { ChipElement } from '@queelag/web-components/elements/data/chip.element.js'

export const QChip: ElementComponent<ChipElement, ChipProps> = createBaseElementComponent('q-chip', ChipElement)
