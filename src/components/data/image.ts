import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAracnaImageProps } from '../../definitions/props.js'
import type { AracnaImageElementAttributes, AracnaImageElementEventMap } from '@aracna/web-components'
import { AracnaImageElement } from '@aracna/web-components/elements/data/image-element'

export const AracnaAracnaImage: ElementComponent<AracnaImageElement, AracnaAracnaImageProps> = createBaseElementComponent<
  AracnaImageElement,
  AracnaImageElementAttributes,
  AracnaImageElementEventMap
>('aracna-image', AracnaImageElement)
