import { AvatarProps, createElementComponent, ElementComponent } from '@queelag/preact'
import { AvatarElement } from '@queelag/web-components'

export const Avatar: ElementComponent<AvatarElement, AvatarProps> = createElementComponent('q-avatar', AvatarElement)
