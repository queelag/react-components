import { createBaseElementComponent, ElementComponent, ImageProps } from '@queelag/react'
import { ImageElement } from '@queelag/web-components/elements/data/image.element.js'

export const QImage: ElementComponent<ImageElement, ImageProps> = createBaseElementComponent('q-image', ImageElement)
