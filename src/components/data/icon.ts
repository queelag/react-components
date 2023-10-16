import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaIconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconElement } from '@aracna/web-components/elements/data/icon-element'

export const AracnaIcon: ElementComponent<IconElement, AracnaIconProps> = createBaseElementComponent<IconElement, IconElementAttributes, IconElementEventMap>(
  'aracna-icon',
  IconElement
)
