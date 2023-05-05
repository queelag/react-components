import { createBaseElementComponent, createFormFieldElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AriaSliderProps, AriaSliderThumbProps } from '@aracna/react'
import type { AriaSliderElementAttributes, AriaSliderElementEventMap, AriaSliderThumbElementAttributes, AriaSliderThumbElementEventMap } from '@aracna/web'
import { AriaSliderElement, AriaSliderThumbElement } from '@aracna/web-components/aria/aria-slider'

export const AracnaAriaSlider: ElementComponent<AriaSliderElement, AriaSliderProps> = createFormFieldElementComponent<
  AriaSliderElement,
  AriaSliderElementAttributes,
  AriaSliderElementEventMap
>('aracna-aria-slider', AriaSliderElement)

export const AracnaAriaSliderThumb: ElementComponent<AriaSliderThumbElement, AriaSliderThumbProps> = createBaseElementComponent<
  AriaSliderThumbElement,
  AriaSliderThumbElementAttributes,
  AriaSliderThumbElementEventMap
>('aracna-aria-slider-thumb', AriaSliderThumbElement)
