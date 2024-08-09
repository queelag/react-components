import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaListBoxProps, AracnaListBoxOptionProps } from '../../definitions/props.js'
import type {
  AracnaListBoxElementAttributes,
  AracnaListBoxElementEventMap,
  AracnaListBoxOptionElementAttributes,
  AracnaListBoxOptionElementEventMap
} from '@aracna/web-components'
import { AracnaListBoxElement, AracnaListBoxOptionElement } from '@aracna/web-components/elements/input/list-box-element'

export const AracnaListBox: ElementComponent<AracnaListBoxElement, AracnaListBoxProps> = createBaseElementComponent<
  AracnaListBoxElement,
  AracnaListBoxElementAttributes,
  AracnaListBoxElementEventMap
>('aracna-listbox', AracnaListBoxElement)

export const AracnaListBoxOption: ElementComponent<AracnaListBoxOptionElement, AracnaListBoxOptionProps> = createBaseElementComponent<
  AracnaListBoxOptionElement,
  AracnaListBoxOptionElementAttributes,
  AracnaListBoxOptionElementEventMap
>('aracna-listbox-option', AracnaListBoxOptionElement)
