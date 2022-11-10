import { AriaListBoxOptionProps, AriaListBoxProps, createBaseElementComponent, ElementComponent } from '@queelag/react'
import { AriaListBoxElement, AriaListBoxOptionElement } from '@queelag/web-components/elements/aria/aria.list.box.element.js'

export const QAriaListBox: ElementComponent<AriaListBoxElement, AriaListBoxProps> = createBaseElementComponent('q-aria-listbox', AriaListBoxElement)

export const QAriaListBoxOption: ElementComponent<AriaListBoxOptionElement, AriaListBoxOptionProps> = createBaseElementComponent(
  'q-aria-listbox-option',
  AriaListBoxOptionElement
)
