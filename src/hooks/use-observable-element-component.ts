import { useDispatch } from '@aracna/react'
import type { AttributeChangeEvent, StateChangeEvent } from '@aracna/web-components'
import { useCallback, useEffect, useRef, useState } from 'react'
import type { UseObservableElementComponentOptions, UseObservableElementComponentReturn } from '../definitions/interfaces.js'

/**
 * Observes a custom element that extends `BaseElement` by listening to its attribute and state changes.
 *
 * - Optionally a blacklist of attributes and states can be passed to ignore them.
 * - Optionally a whitelist of attributes and states can be passed to only observe them.
 *
 * [Aracna Reference](https://aracna.dariosechi.it/react/hooks/use-observable-element-component)
 */
export function useObservableElementComponent<K extends keyof HTMLElementTagNameMap, P extends Record<string, string> = Record<string, string>>(
  options?: UseObservableElementComponentOptions
): UseObservableElementComponentReturn<K, P> {
  const ref = useRef<HTMLElementTagNameMap[K]>(null)
  const dispatch = useDispatch()
  const [properties, setProperties] = useState<P>({} as P)

  const onAttributeChange = useCallback(
    (event: AttributeChangeEvent) => {
      if (!event.detail) {
        return
      }

      if (options?.blacklist && options.blacklist.includes(event.detail.name)) {
        return
      }

      if (options?.whitelist && !options.whitelist.includes(event.detail.name)) {
        return
      }

      setProperties((properties: P) => (event.detail ? { ...properties, [event.detail.name]: event.detail.value } : properties))
    },
    [options?.blacklist, options?.whitelist]
  )

  const onStateChange = useCallback(
    (event: StateChangeEvent<any>) => {
      if (!event.detail) {
        return
      }

      if (options?.blacklist && options.blacklist.includes(event.detail.name)) {
        return
      }

      if (options?.whitelist && !options.whitelist.includes(event.detail.name)) {
        return
      }

      setProperties((properties: P) => (event.detail ? { ...properties, [event.detail.name]: event.detail.value } : properties))
    },
    [options?.blacklist, options?.whitelist]
  )

  useEffect(() => dispatch(), [ref.current])

  return { element: ref.current, onAttributeChange, onStateChange, properties, ref }
}
