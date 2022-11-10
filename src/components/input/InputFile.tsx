import { createFormFieldElementComponent, ElementComponent, InputFileProps } from '@queelag/react'
import { InputFileElement } from '@queelag/web-components/elements/input/input.file.element.js'

export const QInputFile: ElementComponent<InputFileElement, InputFileProps> = createFormFieldElementComponent('q-input-file', InputFileElement)
