import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type {
  AracnaAriaCarouselProps,
  AracnaAriaCarouselNextSlideControlProps,
  AracnaAriaCarouselPreviousSlideControlProps,
  AracnaAriaCarouselRotationControlProps,
  AracnaAriaCarouselSlideProps,
  AracnaAriaCarouselSlidesProps,
  AracnaAriaCarouselTabProps,
  AracnaAriaCarouselTabsProps
} from '@aracna/react'
import type {
  AriaCarouselElementAttributes,
  AriaCarouselElementEventMap,
  AriaCarouselNextSlideControlElementAttributes,
  AriaCarouselNextSlideControlElementEventMap,
  AriaCarouselPreviousSlideControlElementAttributes,
  AriaCarouselPreviousSlideControlElementEventMap,
  AriaCarouselRotationControlElementAttributes,
  AriaCarouselRotationControlElementEventMap,
  AriaCarouselSlideElementAttributes,
  AriaCarouselSlideElementEventMap,
  AriaCarouselSlidesElementAttributes,
  AriaCarouselSlidesElementEventMap,
  AriaCarouselTabElementAttributes,
  AriaCarouselTabElementEventMap,
  AriaCarouselTabsElementAttributes,
  AriaCarouselTabsElementEventMap
} from '@aracna/web'
import {
  AriaCarouselElement,
  AriaCarouselNextSlideControlElement,
  AriaCarouselPreviousSlideControlElement,
  AriaCarouselRotationControlElement,
  AriaCarouselSlideElement,
  AriaCarouselSlidesElement,
  AriaCarouselTabElement,
  AriaCarouselTabsElement
} from '@aracna/web-components/elements/aria/aria-carousel-element'

export const AracnaAriaCarousel: ElementComponent<AriaCarouselElement, AracnaAriaCarouselProps> = createBaseElementComponent<
  AriaCarouselElement,
  AriaCarouselElementAttributes,
  AriaCarouselElementEventMap
>('aracna-aria-carousel', AriaCarouselElement)

export const AracnaAriaCarouselNextSlideControl: ElementComponent<AriaCarouselNextSlideControlElement, AracnaAriaCarouselNextSlideControlProps> =
  createBaseElementComponent<AriaCarouselNextSlideControlElement, AriaCarouselNextSlideControlElementAttributes, AriaCarouselNextSlideControlElementEventMap>(
    'aracna-aria-carousel-next-slide-control',
    AriaCarouselNextSlideControlElement
  )

export const AracnaAriaCarouselPreviousSlideControl: ElementComponent<AriaCarouselPreviousSlideControlElement, AracnaAriaCarouselPreviousSlideControlProps> =
  createBaseElementComponent<
    AriaCarouselPreviousSlideControlElement,
    AriaCarouselPreviousSlideControlElementAttributes,
    AriaCarouselPreviousSlideControlElementEventMap
  >('aracna-aria-carousel-previous-slide-control', AriaCarouselPreviousSlideControlElement)

export const AracnaAriaCarouselRotationControl: ElementComponent<AriaCarouselRotationControlElement, AracnaAriaCarouselRotationControlProps> =
  createBaseElementComponent<AriaCarouselRotationControlElement, AriaCarouselRotationControlElementAttributes, AriaCarouselRotationControlElementEventMap>(
    'aracna-aria-carousel-rotation-control',
    AriaCarouselRotationControlElement
  )

export const AracnaAriaCarouselSlide: ElementComponent<AriaCarouselSlideElement, AracnaAriaCarouselSlideProps> = createBaseElementComponent<
  AriaCarouselSlideElement,
  AriaCarouselSlideElementAttributes,
  AriaCarouselSlideElementEventMap
>('aracna-aria-carousel-slide', AriaCarouselSlideElement, ['carousel-slide-activate', 'carousel-slide-deactive'])

export const AracnaAriaCarouselSlides: ElementComponent<AriaCarouselSlidesElement, AracnaAriaCarouselSlidesProps> = createBaseElementComponent<
  AriaCarouselSlidesElement,
  AriaCarouselSlidesElementAttributes,
  AriaCarouselSlidesElementEventMap
>('aracna-aria-carousel-slides', AriaCarouselSlidesElement)

export const AracnaAriaCarouselTab: ElementComponent<AriaCarouselTabElement, AracnaAriaCarouselTabProps> = createBaseElementComponent<
  AriaCarouselTabElement,
  AriaCarouselTabElementAttributes,
  AriaCarouselTabElementEventMap
>('aracna-aria-carousel-tab', AriaCarouselTabElement)

export const AracnaAriaCarouselTabs: ElementComponent<AriaCarouselTabsElement, AracnaAriaCarouselTabsProps> = createBaseElementComponent<
  AriaCarouselTabsElement,
  AriaCarouselTabsElementAttributes,
  AriaCarouselTabsElementEventMap
>('aracna-aria-carousel-tabs', AriaCarouselTabsElement)
