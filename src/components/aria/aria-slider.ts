import { createBaseElementComponent, createFormControlElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAriaSliderProps, AracnaAriaSliderThumbProps } from '@aracna/react'
import type { AriaSliderElementAttributes, AriaSliderElementEventMap, AriaSliderThumbElementAttributes, AriaSliderThumbElementEventMap } from '@aracna/web'
import { AriaSliderElement, AriaSliderThumbElement } from '@aracna/web-components/elements/aria/aria-slider-element'

export const AracnaAriaSlider: ElementComponent<AriaSliderElement, AracnaAriaSliderProps> = createFormControlElementComponent<
  AriaSliderElement,
  AriaSliderElementAttributes,
  AriaSliderElementEventMap
>('aracna-aria-slider', AriaSliderElement, ['slider-change'])

export const AracnaAriaSliderThumb: ElementComponent<AriaSliderThumbElement, AracnaAriaSliderThumbProps> = createBaseElementComponent<
  AriaSliderThumbElement,
  AriaSliderThumbElementAttributes,
  AriaSliderThumbElementEventMap
>('aracna-aria-slider-thumb', AriaSliderThumbElement, ['slider-thumb-move'])
