import { ButtonProps, createBaseElementComponent, ElementComponent } from '@queelag/react'
import { ButtonElement } from '@queelag/web-components/elements/input/button.element.js'

export const QButton: ElementComponent<ButtonElement, ButtonProps> = createBaseElementComponent('q-button', ButtonElement)
