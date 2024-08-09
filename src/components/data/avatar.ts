import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAvatarProps } from '../../definitions/props.js'
import type { AracnaAvatarElementAttributes, AracnaAvatarElementEventMap } from '@aracna/web-components'
import { AracnaAvatarElement } from '@aracna/web-components/elements/data/avatar-element'

export const AracnaAvatar: ElementComponent<AracnaAvatarElement, AracnaAvatarProps> = createBaseElementComponent<
  AracnaAvatarElement,
  AracnaAvatarElementAttributes,
  AracnaAvatarElementEventMap
>('aracna-avatar', AracnaAvatarElement)
