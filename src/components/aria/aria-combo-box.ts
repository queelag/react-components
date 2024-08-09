import { createBaseElementComponent, createFormControlElementComponent, createFloatingElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type {
  AracnaAracnaAriaComboBoxProps,
  AracnaAracnaAriaComboBoxButtonProps,
  AracnaAracnaAriaComboBoxGroupProps,
  AracnaAracnaAriaComboBoxInputProps,
  AracnaAracnaAriaComboBoxListProps,
  AracnaAracnaAriaComboBoxOptionProps
} from '../../definitions/props.js'
import type {
  AracnaAriaComboBoxElementAttributes,
  AracnaAriaComboBoxElementEventMap,
  AracnaAriaComboBoxButtonElementAttributes,
  AracnaAriaComboBoxButtonElementEventMap,
  AracnaAriaComboBoxGroupElementAttributes,
  AracnaAriaComboBoxGroupElementEventMap,
  AracnaAriaComboBoxInputElementAttributes,
  AracnaAriaComboBoxInputElementEventMap,
  AracnaAriaComboBoxListElementAttributes,
  AracnaAriaComboBoxListElementEventMap,
  AracnaAriaComboBoxOptionElementAttributes,
  AracnaAriaComboBoxOptionElementEventMap
} from '@aracna/web-components'
import {
  AracnaAriaComboBoxElement,
  AracnaAriaComboBoxButtonElement,
  AracnaAriaComboBoxGroupElement,
  AracnaAriaComboBoxInputElement,
  AracnaAriaComboBoxListElement,
  AracnaAriaComboBoxOptionElement
} from '@aracna/web-components/elements/aria/aria-combo-box-element'

export const AracnaAracnaAriaComboBox: ElementComponent<AracnaAriaComboBoxElement, AracnaAracnaAriaComboBoxProps> = createFormControlElementComponent<
  AracnaAriaComboBoxElement,
  AracnaAriaComboBoxElementAttributes<AracnaAriaComboBoxOptionElement>,
  AracnaAriaComboBoxElementEventMap
>('aracna-aria-combobox', AracnaAriaComboBoxElement, ['combo-box-collapse', 'combo-box-expand'])

export const AracnaAracnaAriaComboBoxButton: ElementComponent<AracnaAriaComboBoxButtonElement, AracnaAracnaAriaComboBoxButtonProps> =
  createBaseElementComponent<AracnaAriaComboBoxButtonElement, AracnaAriaComboBoxButtonElementAttributes, AracnaAriaComboBoxButtonElementEventMap>(
    'aracna-aria-combobox-button',
    AracnaAriaComboBoxButtonElement
  )

export const AracnaAracnaAriaComboBoxGroup: ElementComponent<AracnaAriaComboBoxGroupElement, AracnaAracnaAriaComboBoxGroupProps> = createBaseElementComponent<
  AracnaAriaComboBoxGroupElement,
  AracnaAriaComboBoxGroupElementAttributes,
  AracnaAriaComboBoxGroupElementEventMap
>('aracna-aria-combobox-group', AracnaAriaComboBoxGroupElement)

export const AracnaAracnaAriaComboBoxInput: ElementComponent<AracnaAriaComboBoxInputElement, AracnaAracnaAriaComboBoxInputProps> = createBaseElementComponent<
  AracnaAriaComboBoxInputElement,
  AracnaAriaComboBoxInputElementAttributes,
  AracnaAriaComboBoxInputElementEventMap
>('aracna-aria-combobox-input', AracnaAriaComboBoxInputElement)

export const AracnaAracnaAriaComboBoxList: ElementComponent<AracnaAriaComboBoxListElement, AracnaAracnaAriaComboBoxListProps> = createFloatingElementComponent<
  AracnaAriaComboBoxListElement,
  AracnaAriaComboBoxListElementAttributes,
  AracnaAriaComboBoxListElementEventMap
>('aracna-aria-combobox-list', AracnaAriaComboBoxListElement)

export const AracnaAracnaAriaComboBoxOption: ElementComponent<AracnaAriaComboBoxOptionElement, AracnaAracnaAriaComboBoxOptionProps> =
  createBaseElementComponent<AracnaAriaComboBoxOptionElement, AracnaAriaComboBoxOptionElementAttributes, AracnaAriaComboBoxOptionElementEventMap>(
    'aracna-aria-combobox-option',
    AracnaAriaComboBoxOptionElement,
    ['combo-box-option-select']
  )
