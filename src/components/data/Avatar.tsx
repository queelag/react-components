import { AvatarProps, createElementComponent, ElementComponent } from '@queelag/react'
import { AvatarElement } from '@queelag/web-components/elements/data/avatar.element'

export const QAvatar: ElementComponent<AvatarElement, AvatarProps> = createElementComponent('q-avatar', AvatarElement)
