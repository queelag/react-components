import { createBaseElementComponent, createFormFieldElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { SliderProps, SliderThumbProps } from '@aracna/react'
import type { SliderElementAttributes, SliderElementEventMap, SliderThumbElementAttributes, SliderThumbElementEventMap } from '@aracna/web'
import { SliderElement, SliderThumbElement } from '@aracna/web-components/input/slider'

export const AracnaSlider: ElementComponent<SliderElement, SliderProps> = createFormFieldElementComponent<
  SliderElement,
  SliderElementAttributes,
  SliderElementEventMap
>('aracna-slider', SliderElement)

export const AracnaSliderThumb: ElementComponent<SliderThumbElement, SliderThumbProps> = createBaseElementComponent<
  SliderThumbElement,
  SliderThumbElementAttributes,
  SliderThumbElementEventMap
>('aracna-slider-thumb', SliderThumbElement)
