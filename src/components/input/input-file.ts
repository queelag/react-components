import { createBaseElementComponent, createFormControlElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAracnaInputFileProps } from '../../definitions/props.js'
import type { AracnaInputFileElementAttributes, AracnaInputFileElementEventMap } from '@aracna/web-components'
import { AracnaInputFileElement } from '@aracna/web-components/elements/input/input-file-element'

export const AracnaInputFile: ElementComponent<AracnaInputFileElement, AracnaAracnaInputFileProps> = createFormControlElementComponent<
  AracnaInputFileElement,
  AracnaInputFileElementAttributes,
  AracnaInputFileElementEventMap
>('aracna-input-file', AracnaInputFileElement)
