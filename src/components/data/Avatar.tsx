import { AvatarProps, createBaseElementComponent, ElementComponent } from '@aracna/react'
import { AvatarElementAttributes, AvatarElementEventMap } from '@aracna/web'
import { AvatarElement } from '@aracna/web-components/elements/data/avatar.element.js'

export const AracnaAvatar: ElementComponent<AvatarElement, AvatarProps> = createBaseElementComponent<
  AvatarElement,
  AvatarElementAttributes,
  AvatarElementEventMap
>('aracna-avatar', AvatarElement)
