import type { ElementComponent } from '@aracna/react'
import { createBaseElementComponent } from '../../functions/create-base-element-component.js'
import { createFormControlElementComponent } from '../../functions/create-form-control-element-component.js'
import type { AracnaInputFileProps } from '../../definitions/props.js'
import type { AracnaInputFileElementAttributes, AracnaInputFileElementEventMap } from '@aracna/web-components'
import { AracnaInputFileElement } from '@aracna/web-components/elements/input/input-file-element'

export const AracnaInputFile: ElementComponent<AracnaInputFileElement, AracnaInputFileProps> = createFormControlElementComponent<
  AracnaInputFileElement,
  AracnaInputFileElementAttributes,
  AracnaInputFileElementEventMap
>('aracna-input-file', AracnaInputFileElement)
