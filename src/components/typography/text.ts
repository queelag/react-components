import type { ElementComponent } from '@aracna/react'
import { createBaseElementComponent } from '../../functions/create-base-element-component.js'
import type { AracnaTextProps } from '../../definitions/props.js'
import type { AracnaTextElementAttributes, AracnaTextElementEventMap } from '@aracna/web-components'
import { AracnaTextElement } from '@aracna/web-components/elements/typography/text-element'

export const AracnaText: ElementComponent<AracnaTextElement, AracnaTextProps> = createBaseElementComponent<
  AracnaTextElement,
  AracnaTextElementAttributes,
  AracnaTextElementEventMap
>('aracna-text', AracnaTextElement)
