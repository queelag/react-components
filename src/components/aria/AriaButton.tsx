import { AriaButtonProps, createBaseElementComponent, ElementComponent } from '@queelag/react'
import { AriaButtonElement } from '@queelag/web-components/elements/aria/aria.button.element.js'

export const QAriaButton: ElementComponent<AriaButtonElement, AriaButtonProps> = createBaseElementComponent('q-aria-button', AriaButtonElement)
