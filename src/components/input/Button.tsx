import { ButtonProps, createElementComponent, ElementComponent } from '@queelag/react'
import { ButtonElement } from '@queelag/web-components'

export const QButton: ElementComponent<ButtonElement, ButtonProps> = createElementComponent('q-button', ButtonElement)
