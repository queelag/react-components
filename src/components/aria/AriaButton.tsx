import { AriaButtonProps, createElementComponent, ElementComponent } from '@queelag/react'
import { AriaButtonElement } from '@queelag/web-components/elements/aria/aria.button.element'

export const QAriaButton: ElementComponent<AriaButtonElement, AriaButtonProps> = createElementComponent('q-aria-button', AriaButtonElement)
