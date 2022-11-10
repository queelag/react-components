import { AriaCheckBoxProps, createFormFieldElementComponent, ElementComponent } from '@queelag/react'
import { AriaCheckBoxElement } from '@queelag/web-components/elements/aria/aria.check.box.element.js'

export const QAriaCheckBox: ElementComponent<AriaCheckBoxElement, AriaCheckBoxProps> = createFormFieldElementComponent('q-aria-checkbox', AriaCheckBoxElement)
