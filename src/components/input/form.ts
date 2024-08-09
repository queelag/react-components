import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAracnaFormProps } from '../../definitions/props.js'
import type { AracnaFormElementAttributes, AracnaFormElementEventMap } from '@aracna/web-components'
import { AracnaFormElement } from '@aracna/web-components/elements/input/form-element'

export const AracnaAracnaForm: ElementComponent<AracnaFormElement, AracnaAracnaFormProps> = createBaseElementComponent<
  AracnaFormElement,
  AracnaFormElementAttributes,
  AracnaFormElementEventMap
>('aracna-form', AracnaFormElement, ['form-submit'])
