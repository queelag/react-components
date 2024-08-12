import type { ElementComponent } from '@aracna/react'
import { createBaseElementComponent } from '../../functions/create-base-element-component.js'
import { createFormControlElementComponent } from '../../functions/create-form-control-element-component.js'
import type { AracnaSliderProps, AracnaSliderThumbProps } from '../../definitions/props.js'
import type {
  AracnaSliderElementAttributes,
  AracnaSliderElementEventMap,
  AracnaSliderThumbElementAttributes,
  AracnaSliderThumbElementEventMap
} from '@aracna/web-components'
import { AracnaSliderElement, AracnaSliderThumbElement } from '@aracna/web-components/elements/input/slider-element'

export const AracnaSlider: ElementComponent<AracnaSliderElement, AracnaSliderProps> = createFormControlElementComponent<
  AracnaSliderElement,
  AracnaSliderElementAttributes,
  AracnaSliderElementEventMap
>('aracna-slider', AracnaSliderElement, ['slider-change'])

export const AracnaSliderThumb: ElementComponent<AracnaSliderThumbElement, AracnaSliderThumbProps> = createBaseElementComponent<
  AracnaSliderThumbElement,
  AracnaSliderThumbElementAttributes,
  AracnaSliderThumbElementEventMap
>('aracna-slider-thumb', AracnaSliderThumbElement, ['move'])
