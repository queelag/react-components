import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconElement } from '@aracna/web-components/elements/data/icon-element'

export const AracnaIcon: ElementComponent<IconElement, IconProps> = createBaseElementComponent<IconElement, IconElementAttributes, IconElementEventMap>(
  'aracna-icon',
  IconElement
)
