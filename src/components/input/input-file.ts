import type { ElementComponent } from '@aracna/react'
import { createBaseElementComponent } from '../../functions/create-base-element-component.js'
import { createFormControlElementComponent } from '../../functions/create-form-control-element-component.js'
import type { AracnaInputFileProps, AracnaInputFileClearProps, AracnaInputFileRemoveProps } from '../../definitions/props.js'
import type {
  AracnaInputFileElementAttributes,
  AracnaInputFileElementEventMap,
  AracnaInputFileClearElementAttributes,
  AracnaInputFileClearElementEventMap,
  AracnaInputFileRemoveElementAttributes,
  AracnaInputFileRemoveElementEventMap
} from '@aracna/web-components'
import { AracnaInputFileElement, AracnaInputFileClearElement, AracnaInputFileRemoveElement } from '@aracna/web-components/elements/input/input-file-element'

export const AracnaInputFile: ElementComponent<AracnaInputFileElement, AracnaInputFileProps> = createFormControlElementComponent<
  AracnaInputFileElement,
  AracnaInputFileElementAttributes,
  AracnaInputFileElementEventMap
>('aracna-input-file', AracnaInputFileElement)

export const AracnaInputFileClear: ElementComponent<AracnaInputFileClearElement, AracnaInputFileClearProps> = createBaseElementComponent<
  AracnaInputFileClearElement,
  AracnaInputFileClearElementAttributes,
  AracnaInputFileClearElementEventMap
>('aracna-input-file-clear', AracnaInputFileClearElement)

export const AracnaInputFileRemove: ElementComponent<AracnaInputFileRemoveElement, AracnaInputFileRemoveProps> = createBaseElementComponent<
  AracnaInputFileRemoveElement,
  AracnaInputFileRemoveElementAttributes,
  AracnaInputFileRemoveElementEventMap
>('aracna-input-file-remove', AracnaInputFileRemoveElement)
