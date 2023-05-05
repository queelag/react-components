import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type {
  AriaCarouselProps,
  AriaCarouselNextSlideControlProps,
  AriaCarouselPreviousSlideControlProps,
  AriaCarouselRotationControlProps,
  AriaCarouselSlideProps,
  AriaCarouselSlidesProps,
  AriaCarouselTabProps,
  AriaCarouselTabsProps
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
} from '@aracna/web-components/aria/aria-carousel'

export const AracnaAriaCarousel: ElementComponent<AriaCarouselElement, AriaCarouselProps> = createBaseElementComponent<
  AriaCarouselElement,
  AriaCarouselElementAttributes,
  AriaCarouselElementEventMap
>('aracna-aria-carousel', AriaCarouselElement)

export const AracnaAriaCarouselNextSlideControl: ElementComponent<AriaCarouselNextSlideControlElement, AriaCarouselNextSlideControlProps> =
  createBaseElementComponent<AriaCarouselNextSlideControlElement, AriaCarouselNextSlideControlElementAttributes, AriaCarouselNextSlideControlElementEventMap>(
    'aracna-aria-carousel-next-slide-control',
    AriaCarouselNextSlideControlElement
  )

export const AracnaAriaCarouselPreviousSlideControl: ElementComponent<AriaCarouselPreviousSlideControlElement, AriaCarouselPreviousSlideControlProps> =
  createBaseElementComponent<
    AriaCarouselPreviousSlideControlElement,
    AriaCarouselPreviousSlideControlElementAttributes,
    AriaCarouselPreviousSlideControlElementEventMap
  >('aracna-aria-carousel-previous-slide-control', AriaCarouselPreviousSlideControlElement)

export const AracnaAriaCarouselRotationControl: ElementComponent<AriaCarouselRotationControlElement, AriaCarouselRotationControlProps> =
  createBaseElementComponent<AriaCarouselRotationControlElement, AriaCarouselRotationControlElementAttributes, AriaCarouselRotationControlElementEventMap>(
    'aracna-aria-carousel-rotation-control',
    AriaCarouselRotationControlElement
  )

export const AracnaAriaCarouselSlide: ElementComponent<AriaCarouselSlideElement, AriaCarouselSlideProps> = createBaseElementComponent<
  AriaCarouselSlideElement,
  AriaCarouselSlideElementAttributes,
  AriaCarouselSlideElementEventMap
>('aracna-aria-carousel-slide', AriaCarouselSlideElement)

export const AracnaAriaCarouselSlides: ElementComponent<AriaCarouselSlidesElement, AriaCarouselSlidesProps> = createBaseElementComponent<
  AriaCarouselSlidesElement,
  AriaCarouselSlidesElementAttributes,
  AriaCarouselSlidesElementEventMap
>('aracna-aria-carousel-slides', AriaCarouselSlidesElement)

export const AracnaAriaCarouselTab: ElementComponent<AriaCarouselTabElement, AriaCarouselTabProps> = createBaseElementComponent<
  AriaCarouselTabElement,
  AriaCarouselTabElementAttributes,
  AriaCarouselTabElementEventMap
>('aracna-aria-carousel-tab', AriaCarouselTabElement)

export const AracnaAriaCarouselTabs: ElementComponent<AriaCarouselTabsElement, AriaCarouselTabsProps> = createBaseElementComponent<
  AriaCarouselTabsElement,
  AriaCarouselTabsElementAttributes,
  AriaCarouselTabsElementEventMap
>('aracna-aria-carousel-tabs', AriaCarouselTabsElement)
