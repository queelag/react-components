import { createFormFieldElementComponent, ElementComponent, InputFileProps } from '@aracna/react'
import { InputFileElementAttributes, InputFileElementEventMap } from '@aracna/web'
import { InputFileElement } from '@aracna/web-components/elements/input/input.file.element.js'

export const AracnaInputFile: ElementComponent<InputFileElement, InputFileProps> = createFormFieldElementComponent<
  InputFileElement,
  InputFileElementAttributes,
  InputFileElementEventMap
>('aracna-input-file', InputFileElement)
