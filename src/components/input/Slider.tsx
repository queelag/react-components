import { createBaseElementComponent, createFormFieldElementComponent, ElementComponent, SliderProps, SliderThumbProps } from '@queelag/react'
import { SliderElement, SliderThumbElement } from '@queelag/web-components/elements/input/slider.element.js'

export const QSlider: ElementComponent<SliderElement, SliderProps> = createFormFieldElementComponent('q-slider', SliderElement)
export const QSliderThumb: ElementComponent<SliderThumbElement, SliderThumbProps> = createBaseElementComponent('q-slider-thumb', SliderThumbElement)
