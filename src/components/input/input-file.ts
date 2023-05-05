import { createBaseElementComponent, createFormFieldElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { InputFileProps } from '@aracna/react'
import type { InputFileElementAttributes, InputFileElementEventMap } from '@aracna/web'
import { InputFileElement } from '@aracna/web-components/elements/input/input-file-element.js'

export const AracnaInputFile: ElementComponent<InputFileElement, InputFileProps> = createFormFieldElementComponent<
  InputFileElement,
  InputFileElementAttributes,
  InputFileElementEventMap
>('aracna-input-file', InputFileElement)
