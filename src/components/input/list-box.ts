import type { ElementComponent } from '@aracna/react'
import { createBaseElementComponent } from '../../functions/create-base-element-component.js'
import { createFormControlElementComponent } from '../../functions/create-form-control-element-component.js'
import type { AracnaListBoxProps, AracnaListBoxOptionProps } from '../../definitions/props.js'
import type {
  AracnaListBoxElementAttributes,
  AracnaListBoxElementEventMap,
  AracnaListBoxOptionElementAttributes,
  AracnaListBoxOptionElementEventMap
} from '@aracna/web-components'
import { AracnaListBoxElement, AracnaListBoxOptionElement } from '@aracna/web-components/elements/input/list-box-element'

export const AracnaListBox: ElementComponent<AracnaListBoxElement, AracnaListBoxProps> = createFormControlElementComponent<
  AracnaListBoxElement,
  AracnaListBoxElementAttributes<AracnaListBoxOptionElement>,
  AracnaListBoxElementEventMap
>('aracna-listbox', AracnaListBoxElement)

export const AracnaListBoxOption: ElementComponent<AracnaListBoxOptionElement, AracnaListBoxOptionProps> = createBaseElementComponent<
  AracnaListBoxOptionElement,
  AracnaListBoxOptionElementAttributes,
  AracnaListBoxOptionElementEventMap
>('aracna-listbox-option', AracnaListBoxOptionElement, ['select', 'unselect'])
