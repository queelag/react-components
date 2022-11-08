import { AriaListBoxOptionProps, AriaListBoxProps, createElementComponent, ElementComponent } from '@queelag/react'
import { AriaListBoxElement, AriaListBoxOptionElement } from '@queelag/web-components'

export const QAriaListBox: ElementComponent<AriaListBoxElement, AriaListBoxProps> = createElementComponent('q-aria-listbox', AriaListBoxElement)

export const QAriaListBoxOption: ElementComponent<AriaListBoxOptionElement, AriaListBoxOptionProps> = createElementComponent(
  'q-aria-listbox-option',
  AriaListBoxOptionElement
)
