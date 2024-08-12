import type { ElementComponent } from '@aracna/react'
import { createBaseElementComponent } from '../../functions/create-base-element-component.js'
import type { AracnaImageProps } from '../../definitions/props.js'
import type { AracnaImageElementAttributes, AracnaImageElementEventMap } from '@aracna/web-components'
import { AracnaImageElement } from '@aracna/web-components/elements/data/image-element'

export const AracnaImage: ElementComponent<AracnaImageElement, AracnaImageProps> = createBaseElementComponent<
  AracnaImageElement,
  AracnaImageElementAttributes,
  AracnaImageElementEventMap
>('aracna-image', AracnaImageElement, ['image-load', 'image-load-error'])
