import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaListBoxProps, AracnaListBoxOptionProps } from '@aracna/react'
import type { ListBoxElementAttributes, ListBoxElementEventMap, ListBoxOptionElementAttributes, ListBoxOptionElementEventMap } from '@aracna/web'
import { ListBoxElement, ListBoxOptionElement } from '@aracna/web-components/elements/input/list-box-element'

export const AracnaListBox: ElementComponent<ListBoxElement, AracnaListBoxProps> = createBaseElementComponent<
  ListBoxElement,
  ListBoxElementAttributes,
  ListBoxElementEventMap
>('aracna-listbox', ListBoxElement)

export const AracnaListBoxOption: ElementComponent<ListBoxOptionElement, AracnaListBoxOptionProps> = createBaseElementComponent<
  ListBoxOptionElement,
  ListBoxOptionElementAttributes,
  ListBoxOptionElementEventMap
>('aracna-listbox-option', ListBoxOptionElement)
