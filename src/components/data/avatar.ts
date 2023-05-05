import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AvatarProps } from '@aracna/react'
import type { AvatarElementAttributes, AvatarElementEventMap } from '@aracna/web'
import { AvatarElement } from '@aracna/web-components/data/avatar'

export const AracnaAvatar: ElementComponent<AvatarElement, AvatarProps> = createBaseElementComponent<
  AvatarElement,
  AvatarElementAttributes,
  AvatarElementEventMap
>('aracna-avatar', AvatarElement)
