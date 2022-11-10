import { ButtonGroupProps, createBaseElementComponent, ElementComponent } from '@queelag/react'
import { ButtonGroupElement } from '@queelag/web-components/elements/input/button.group.element.js'

export const QButtonGroup: ElementComponent<ButtonGroupElement, ButtonGroupProps> = createBaseElementComponent('q-button-group', ButtonGroupElement)
