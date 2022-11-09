import { ChipProps, createElementComponent, ElementComponent } from '@queelag/react'
import { ChipElement } from '@queelag/web-components/elements/data/chip.element'

export const QChip: ElementComponent<ChipElement, ChipProps> = createElementComponent('q-chip', ChipElement)
