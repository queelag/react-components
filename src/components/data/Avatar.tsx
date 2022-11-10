import { AvatarProps, createBaseElementComponent, ElementComponent } from '@queelag/react'
import { AvatarElement } from '@queelag/web-components/elements/data/avatar.element.js'

export const QAvatar: ElementComponent<AvatarElement, AvatarProps> = createBaseElementComponent('q-avatar', AvatarElement)
