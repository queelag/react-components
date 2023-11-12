import { createBaseElementComponent, createFormControlElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaSliderProps, AracnaSliderThumbProps } from '@aracna/react'
import type { SliderElementAttributes, SliderElementEventMap, SliderThumbElementAttributes, SliderThumbElementEventMap } from '@aracna/web'
import { SliderElement, SliderThumbElement } from '@aracna/web-components/elements/input/slider-element'

export const AracnaSlider: ElementComponent<SliderElement, AracnaSliderProps> = createFormControlElementComponent<
  SliderElement,
  SliderElementAttributes,
  SliderElementEventMap
>('aracna-slider', SliderElement, ['slider-change'])

export const AracnaSliderThumb: ElementComponent<SliderThumbElement, AracnaSliderThumbProps> = createBaseElementComponent<
  SliderThumbElement,
  SliderThumbElementAttributes,
  SliderThumbElementEventMap
>('aracna-slider-thumb', SliderThumbElement, ['slider-thumb-move'])
