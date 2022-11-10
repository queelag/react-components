import { createBaseElementComponent, DividerProps, ElementComponent } from '@queelag/react'
import { DividerElement } from '@queelag/web-components/elements/layout/divider.element.js'

export const QDivider: ElementComponent<DividerElement, DividerProps> = createBaseElementComponent('q-divider', DividerElement)
