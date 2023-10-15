import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { ImageProps } from '@aracna/react'
import type { ImageElementAttributes, ImageElementEventMap } from '@aracna/web'
import { ImageElement } from '@aracna/web-components/elements/data/image-element'

export const AracnaImage: ElementComponent<ImageElement, ImageProps> = createBaseElementComponent<ImageElement, ImageElementAttributes, ImageElementEventMap>(
  'aracna-image',
  ImageElement
)
