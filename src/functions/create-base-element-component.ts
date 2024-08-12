import type { KeyOf } from '@aracna/core'
import { createElementComponent, type ElementComponent, type ElementComponentProps } from '@aracna/react'
import type { AracnaBaseElementAttributes, AracnaBaseElementEventMap } from '@aracna/web-components'

/**
 * Creates a new React component that renders a custom element which extends `BaseElement`.
 * Optionally the events can be defined as well.
 *
 * [Aracna Reference](https://aracna.dariosechi.it/react/functions/create-base-element-component)
 */
export function createBaseElementComponent<
  Element extends HTMLElementTagNameMap[Key],
  Attributes extends AracnaBaseElementAttributes = AracnaBaseElementAttributes,
  Events extends AracnaBaseElementEventMap = AracnaBaseElementEventMap,
  Props extends ElementComponentProps<Element, Attributes, Events> = ElementComponentProps<Element, Attributes, Events>,
  Key extends keyof HTMLElementTagNameMap = keyof HTMLElementTagNameMap
>(tag: Key, element: new () => Element, events: KeyOf.Shallow<Events>[] = []): ElementComponent<Element, Props> {
  return createElementComponent<Element, Attributes, Events, Props, Key>(tag, element, ['attribute-change', 'state-change', ...events])
}
