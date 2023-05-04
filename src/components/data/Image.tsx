import { createBaseElementComponent, ElementComponent, ImageProps } from '@aracna/react'
import { ImageElementAttributes, ImageElementEventMap } from '@aracna/web'
import { ImageElement } from '@aracna/web-components/elements/data/image.element'

export const AracnaImage: ElementComponent<ImageElement, ImageProps> = createBaseElementComponent<ImageElement, ImageElementAttributes, ImageElementEventMap>(
  'aracna-image',
  ImageElement
)
