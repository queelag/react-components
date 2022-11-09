import { AriaSliderProps, AriaSliderThumbProps, createElementComponent, ElementComponent } from '@queelag/react'
import { AriaSliderElement, AriaSliderThumbElement } from '@queelag/web-components/elements/aria/aria.slider.element'

export const QAriaSlider: ElementComponent<AriaSliderElement, AriaSliderProps> = createElementComponent('q-aria-slider', AriaSliderElement)

export const QAriaSliderThumb: ElementComponent<AriaSliderThumbElement, AriaSliderThumbProps> = createElementComponent(
  'q-aria-slider-thumb',
  AriaSliderThumbElement
)
