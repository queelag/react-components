import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAracnaAvatarProps } from '../../definitions/props.js'
import type { AracnaAvatarElementAttributes, AracnaAvatarElementEventMap } from '@aracna/web-components'
import { AracnaAvatarElement } from '@aracna/web-components/elements/data/avatar-element'

export const AracnaAracnaAvatar: ElementComponent<AracnaAvatarElement, AracnaAracnaAvatarProps> = createBaseElementComponent<
  AracnaAvatarElement,
  AracnaAvatarElementAttributes,
  AracnaAvatarElementEventMap
>('aracna-avatar', AracnaAvatarElement)
