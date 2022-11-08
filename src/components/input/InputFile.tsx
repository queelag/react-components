import { createElementComponent, ElementComponent, InputFileProps } from '@queelag/react'
import { InputFileElement } from '@queelag/web-components'

export const QInputFile: ElementComponent<InputFileElement, InputFileProps> = createElementComponent('q-input-file', InputFileElement)
