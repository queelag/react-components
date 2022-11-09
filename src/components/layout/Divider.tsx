import { createElementComponent, DividerProps, ElementComponent } from '@queelag/react'
import { DividerElement } from '@queelag/web-components/elements/layout/divider.element'

export const QDivider: ElementComponent<DividerElement, DividerProps> = createElementComponent('q-divider', DividerElement)
