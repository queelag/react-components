import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type {
  AracnaAracnaAriaCarouselProps,
  AracnaAracnaAriaCarouselNextSlideControlProps,
  AracnaAracnaAriaCarouselPreviousSlideControlProps,
  AracnaAracnaAriaCarouselRotationControlProps,
  AracnaAracnaAriaCarouselSlideProps,
  AracnaAracnaAriaCarouselSlidesProps,
  AracnaAracnaAriaCarouselTabProps,
  AracnaAracnaAriaCarouselTabsProps
} from '../../definitions/props.js'
import type {
  AracnaAriaCarouselElementAttributes,
  AracnaAriaCarouselElementEventMap,
  AracnaAriaCarouselNextSlideControlElementAttributes,
  AracnaAriaCarouselNextSlideControlElementEventMap,
  AracnaAriaCarouselPreviousSlideControlElementAttributes,
  AracnaAriaCarouselPreviousSlideControlElementEventMap,
  AracnaAriaCarouselRotationControlElementAttributes,
  AracnaAriaCarouselRotationControlElementEventMap,
  AracnaAriaCarouselSlideElementAttributes,
  AracnaAriaCarouselSlideElementEventMap,
  AracnaAriaCarouselSlidesElementAttributes,
  AracnaAriaCarouselSlidesElementEventMap,
  AracnaAriaCarouselTabElementAttributes,
  AracnaAriaCarouselTabElementEventMap,
  AracnaAriaCarouselTabsElementAttributes,
  AracnaAriaCarouselTabsElementEventMap
} from '@aracna/web-components'
import {
  AracnaAriaCarouselElement,
  AracnaAriaCarouselNextSlideControlElement,
  AracnaAriaCarouselPreviousSlideControlElement,
  AracnaAriaCarouselRotationControlElement,
  AracnaAriaCarouselSlideElement,
  AracnaAriaCarouselSlidesElement,
  AracnaAriaCarouselTabElement,
  AracnaAriaCarouselTabsElement
} from '@aracna/web-components/elements/aria/aria-carousel-element'

export const AracnaAracnaAriaCarousel: ElementComponent<AracnaAriaCarouselElement, AracnaAracnaAriaCarouselProps> = createBaseElementComponent<
  AracnaAriaCarouselElement,
  AracnaAriaCarouselElementAttributes,
  AracnaAriaCarouselElementEventMap
>('aracna-aria-carousel', AracnaAriaCarouselElement)

export const AracnaAracnaAriaCarouselNextSlideControl: ElementComponent<
  AracnaAriaCarouselNextSlideControlElement,
  AracnaAracnaAriaCarouselNextSlideControlProps
> = createBaseElementComponent<
  AracnaAriaCarouselNextSlideControlElement,
  AracnaAriaCarouselNextSlideControlElementAttributes,
  AracnaAriaCarouselNextSlideControlElementEventMap
>('aracna-aria-carousel-next-slide-control', AracnaAriaCarouselNextSlideControlElement)

export const AracnaAracnaAriaCarouselPreviousSlideControl: ElementComponent<
  AracnaAriaCarouselPreviousSlideControlElement,
  AracnaAracnaAriaCarouselPreviousSlideControlProps
> = createBaseElementComponent<
  AracnaAriaCarouselPreviousSlideControlElement,
  AracnaAriaCarouselPreviousSlideControlElementAttributes,
  AracnaAriaCarouselPreviousSlideControlElementEventMap
>('aracna-aria-carousel-previous-slide-control', AracnaAriaCarouselPreviousSlideControlElement)

export const AracnaAracnaAriaCarouselRotationControl: ElementComponent<AracnaAriaCarouselRotationControlElement, AracnaAracnaAriaCarouselRotationControlProps> =
  createBaseElementComponent<
    AracnaAriaCarouselRotationControlElement,
    AracnaAriaCarouselRotationControlElementAttributes,
    AracnaAriaCarouselRotationControlElementEventMap
  >('aracna-aria-carousel-rotation-control', AracnaAriaCarouselRotationControlElement)

export const AracnaAracnaAriaCarouselSlide: ElementComponent<AracnaAriaCarouselSlideElement, AracnaAracnaAriaCarouselSlideProps> = createBaseElementComponent<
  AracnaAriaCarouselSlideElement,
  AracnaAriaCarouselSlideElementAttributes,
  AracnaAriaCarouselSlideElementEventMap
>('aracna-aria-carousel-slide', AracnaAriaCarouselSlideElement, ['carousel-slide-activate', 'carousel-slide-deactive'])

export const AracnaAracnaAriaCarouselSlides: ElementComponent<AracnaAriaCarouselSlidesElement, AracnaAracnaAriaCarouselSlidesProps> =
  createBaseElementComponent<AracnaAriaCarouselSlidesElement, AracnaAriaCarouselSlidesElementAttributes, AracnaAriaCarouselSlidesElementEventMap>(
    'aracna-aria-carousel-slides',
    AracnaAriaCarouselSlidesElement
  )

export const AracnaAracnaAriaCarouselTab: ElementComponent<AracnaAriaCarouselTabElement, AracnaAracnaAriaCarouselTabProps> = createBaseElementComponent<
  AracnaAriaCarouselTabElement,
  AracnaAriaCarouselTabElementAttributes,
  AracnaAriaCarouselTabElementEventMap
>('aracna-aria-carousel-tab', AracnaAriaCarouselTabElement)

export const AracnaAracnaAriaCarouselTabs: ElementComponent<AracnaAriaCarouselTabsElement, AracnaAracnaAriaCarouselTabsProps> = createBaseElementComponent<
  AracnaAriaCarouselTabsElement,
  AracnaAriaCarouselTabsElementAttributes,
  AracnaAriaCarouselTabsElementEventMap
>('aracna-aria-carousel-tabs', AracnaAriaCarouselTabsElement)
