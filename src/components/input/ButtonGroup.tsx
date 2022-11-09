import { ButtonGroupProps, createElementComponent, ElementComponent } from '@queelag/react'
import { ButtonGroupElement } from '@queelag/web-components/elements/input/button.group.element'

export const QButtonGroup: ElementComponent<ButtonGroupElement, ButtonGroupProps> = createElementComponent('q-button-group', ButtonGroupElement)
