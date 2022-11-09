import { createElementComponent, ElementComponent, FormProps } from '@queelag/react'
import { FormElement } from '@queelag/web-components/elements/input/form.element'

export const QForm: ElementComponent<FormElement, FormProps> = createElementComponent('q-form', FormElement)
