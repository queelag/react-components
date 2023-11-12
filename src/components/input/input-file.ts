import { createBaseElementComponent, createFormControlElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaInputFileProps } from '@aracna/react'
import type { InputFileElementAttributes, InputFileElementEventMap } from '@aracna/web'
import { InputFileElement } from '@aracna/web-components/elements/input/input-file-element'

export const AracnaInputFile: ElementComponent<InputFileElement, AracnaInputFileProps> = createFormControlElementComponent<
  InputFileElement,
  InputFileElementAttributes,
  InputFileElementEventMap
>('aracna-input-file', InputFileElement)
