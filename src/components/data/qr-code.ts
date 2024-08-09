import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAracnaQrCodeProps } from '../../definitions/props.js'
import type { AracnaQrCodeElementAttributes, AracnaQrCodeElementEventMap } from '@aracna/web-components'
import { AracnaQrCodeElement } from '@aracna/web-components/elements/data/qr-code-element'

export const AracnaAracnaQrCode: ElementComponent<AracnaQrCodeElement, AracnaAracnaQrCodeProps> = createBaseElementComponent<
  AracnaQrCodeElement,
  AracnaQrCodeElementAttributes,
  AracnaQrCodeElementEventMap
>('aracna-qrcode', AracnaQrCodeElement)
