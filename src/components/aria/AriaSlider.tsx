import { AriaSliderProps, AriaSliderThumbProps, createBaseElementComponent, createFormFieldElementComponent, ElementComponent } from '@queelag/react'
import { AriaSliderElement, AriaSliderThumbElement } from '@queelag/web-components/elements/aria/aria.slider.element.js'

export const QAriaSlider: ElementComponent<AriaSliderElement, AriaSliderProps> = createFormFieldElementComponent('q-aria-slider', AriaSliderElement)

export const QAriaSliderThumb: ElementComponent<AriaSliderThumbElement, AriaSliderThumbProps> = createBaseElementComponent(
  'q-aria-slider-thumb',
  AriaSliderThumbElement
)
