import { AriaSliderProps, AriaSliderThumbProps, createBaseElementComponent, createFormFieldElementComponent, ElementComponent } from '@aracna/react'
import { AriaSliderElementAttributes, AriaSliderElementEventMap, AriaSliderThumbElementAttributes, AriaSliderThumbElementEventMap } from '@aracna/web'
import { AriaSliderElement, AriaSliderThumbElement } from '@aracna/web-components/elements/aria/aria.slider.element.js'

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
