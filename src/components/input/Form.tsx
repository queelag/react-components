import { createElementComponent, ElementComponent, FormProps } from '@queelag/react'
import { FormElement } from '@queelag/web-components'

export const QForm: ElementComponent<FormElement, FormProps> = createElementComponent('q-form', FormElement)
