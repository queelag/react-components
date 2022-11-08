import { createElementComponent, ElementComponent, SliderProps, SliderThumbProps } from '@queelag/react'
import { SliderElement, SliderThumbElement } from '@queelag/web-components'

export const QSlider: ElementComponent<SliderElement, SliderProps> = createElementComponent('q-slider', SliderElement)
export const QSliderThumb: ElementComponent<SliderThumbElement, SliderThumbProps> = createElementComponent('q-slider-thumb', SliderThumbElement)
