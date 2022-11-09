import { createElementComponent, ElementComponent, ImageProps } from '@queelag/react'
import { ImageElement } from '@queelag/web-components/elements/data/image.element'

export const QImage: ElementComponent<ImageElement, ImageProps> = createElementComponent('q-image', ImageElement)
