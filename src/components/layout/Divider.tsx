import { createElementComponent, DividerProps, ElementComponent } from '@queelag/react'
import { DividerElement } from '@queelag/web-components/elements/layout/divider.element.js'

export const QDivider: ElementComponent<DividerElement, DividerProps> = createElementComponent('q-divider', DividerElement)
