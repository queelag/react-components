import type { AttributeChangeEvent, StateChangeEvent } from '@aracna/web-components'
import type { MutableRefObject } from 'react'

export interface UseObservableElementComponentOptions {
  blacklist?: string[]
  whitelist?: string[]
}

export interface UseObservableElementComponentReturn<K extends keyof HTMLElementTagNameMap, P extends Record<string, string> = Record<string, string>> {
  element: HTMLElementTagNameMap[K] | null
  onAttributeChange: (event: AttributeChangeEvent) => void
  onStateChange: (event: StateChangeEvent<any>) => void
  properties: P
  ref: MutableRefObject<HTMLElementTagNameMap[K] | null>
}
