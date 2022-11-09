import { AriaCheckBoxProps, createElementComponent, ElementComponent } from '@queelag/react'
import { AriaCheckBoxElement } from '@queelag/web-components/elements/aria/aria.check.box.element'

export const QAriaCheckBox: ElementComponent<AriaCheckBoxElement, AriaCheckBoxProps> = createElementComponent('q-aria-checkbox', AriaCheckBoxElement)
