import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaFormProps } from '../../definitions/props.js'
import type { AracnaFormElementAttributes, AracnaFormElementEventMap } from '@aracna/web-components'
import { AracnaFormElement } from '@aracna/web-components/elements/input/form-element'

export const AracnaForm: ElementComponent<AracnaFormElement, AracnaFormProps> = createBaseElementComponent<
  AracnaFormElement,
  AracnaFormElementAttributes,
  AracnaFormElementEventMap
>('aracna-form', AracnaFormElement, ['form-submit'])
