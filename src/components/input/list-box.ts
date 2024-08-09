import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAracnaListBoxProps, AracnaAracnaListBoxOptionProps } from '../../definitions/props.js'
import type {
  AracnaListBoxElementAttributes,
  AracnaListBoxElementEventMap,
  AracnaListBoxOptionElementAttributes,
  AracnaListBoxOptionElementEventMap
} from '@aracna/web-components'
import { AracnaListBoxElement, AracnaListBoxOptionElement } from '@aracna/web-components/elements/input/list-box-element'

export const AracnaAracnaListBox: ElementComponent<AracnaListBoxElement, AracnaAracnaListBoxProps> = createBaseElementComponent<
  AracnaListBoxElement,
  AracnaListBoxElementAttributes,
  AracnaListBoxElementEventMap
>('aracna-listbox', AracnaListBoxElement)

export const AracnaAracnaListBoxOption: ElementComponent<AracnaListBoxOptionElement, AracnaAracnaListBoxOptionProps> = createBaseElementComponent<
  AracnaListBoxOptionElement,
  AracnaListBoxOptionElementAttributes,
  AracnaListBoxOptionElementEventMap
>('aracna-listbox-option', AracnaListBoxOptionElement)
