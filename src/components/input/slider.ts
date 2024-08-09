import { createBaseElementComponent, createFormControlElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAracnaSliderProps, AracnaAracnaSliderThumbProps } from '../../definitions/props.js'
import type {
  AracnaSliderElementAttributes,
  AracnaSliderElementEventMap,
  AracnaSliderThumbElementAttributes,
  AracnaSliderThumbElementEventMap
} from '@aracna/web-components'
import { AracnaSliderElement, AracnaSliderThumbElement } from '@aracna/web-components/elements/input/slider-element'

export const AracnaSlider: ElementComponent<AracnaSliderElement, AracnaAracnaSliderProps> = createFormControlElementComponent<
  AracnaSliderElement,
  AracnaSliderElementAttributes,
  AracnaSliderElementEventMap
>('aracna-slider', AracnaSliderElement, ['slider-change'])

export const AracnaSliderThumb: ElementComponent<AracnaSliderThumbElement, AracnaAracnaSliderThumbProps> = createBaseElementComponent<
  AracnaSliderThumbElement,
  AracnaSliderThumbElementAttributes,
  AracnaSliderThumbElementEventMap
>('aracna-slider-thumb', AracnaSliderThumbElement, ['slider-thumb-move'])
