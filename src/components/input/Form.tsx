import { createBaseElementComponent, ElementComponent, FormProps } from '@queelag/react'
import { FormElement } from '@queelag/web-components/elements/input/form.element.js'

export const QForm: ElementComponent<FormElement, FormProps> = createBaseElementComponent('q-form', FormElement, ['form-submit'])
