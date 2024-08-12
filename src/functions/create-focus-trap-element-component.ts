import type { KeyOf } from '@aracna/core'
import type { ElementComponent, ElementComponentProps } from '@aracna/react'
import type { AracnaFocusTrapElementAttributes, AracnaFocusTrapElementEventMap } from '@aracna/web-components'
import { createBaseElementComponent } from './create-base-element-component.js'

/**
 * Creates a new React component that renders a custom element which extends `FocusTrapElement`.
 * Optionally the events can be defined as well.
 *
 * [Aracna Reference](https://aracna.dariosechi.it/react/functions/create-focus-trap-element-component)
 */
export function createFocusTrapElementComponent<
  Element extends HTMLElementTagNameMap[Key],
  Attributes extends AracnaFocusTrapElementAttributes = AracnaFocusTrapElementAttributes,
  Events extends AracnaFocusTrapElementEventMap = AracnaFocusTrapElementEventMap,
  Props extends ElementComponentProps<Element, Attributes, Events> = ElementComponentProps<Element, Attributes, Events>,
  Key extends keyof HTMLElementTagNameMap = keyof HTMLElementTagNameMap
>(tag: Key, element: new () => Element, events: KeyOf.Shallow<Events>[] = []): ElementComponent<Element, Props> {
  return createBaseElementComponent<Element, Attributes, Events, Props, Key>(tag, element, [
    'focus-trap-activate',
    'focus-trap-deactivate',
    'focus-trap-post-activate',
    'focus-trap-post-deactivate',
    ...events
  ])
}
