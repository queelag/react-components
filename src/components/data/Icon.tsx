import { createBaseElementComponent, ElementComponent, IconProps } from '@aracna/react'
import { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconElement } from '@aracna/web-components/elements/data/icon.element.js'

export const AracnaIcon: ElementComponent<IconElement, IconProps> = createBaseElementComponent<IconElement, IconElementAttributes, IconElementEventMap>(
  'aracna-icon',
  IconElement
)
