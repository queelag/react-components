import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAvatarProps } from '@aracna/react'
import type { AvatarElementAttributes, AvatarElementEventMap } from '@aracna/web'
import { AvatarElement } from '@aracna/web-components/elements/data/avatar-element'

export const AracnaAvatar: ElementComponent<AvatarElement, AracnaAvatarProps> = createBaseElementComponent<
  AvatarElement,
  AvatarElementAttributes,
  AvatarElementEventMap
>('aracna-avatar', AvatarElement)
