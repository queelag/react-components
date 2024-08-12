import type { ElementComponent } from '@aracna/react'
import { createBaseElementComponent } from '../../functions/create-base-element-component.js'
import type { AracnaQrCodeProps } from '../../definitions/props.js'
import type { AracnaQrCodeElementAttributes, AracnaQrCodeElementEventMap } from '@aracna/web-components'
import { AracnaQrCodeElement } from '@aracna/web-components/elements/data/qr-code-element'

export const AracnaQrCode: ElementComponent<AracnaQrCodeElement, AracnaQrCodeProps> = createBaseElementComponent<
  AracnaQrCodeElement,
  AracnaQrCodeElementAttributes,
  AracnaQrCodeElementEventMap
>('aracna-qrcode', AracnaQrCodeElement)
