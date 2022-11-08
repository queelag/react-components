import {
  AriaCarouselNextSlideControlProps,
  AriaCarouselPreviousSlideControlProps,
  AriaCarouselProps,
  AriaCarouselRotationControlProps,
  AriaCarouselSlideProps,
  AriaCarouselSlidesProps,
  AriaCarouselTabProps,
  AriaCarouselTabsProps,
  createElementComponent,
  ElementComponent
} from '@queelag/react'
import {
  AriaCarouselElement,
  AriaCarouselNextSlideControlElement,
  AriaCarouselPreviousSlideControlElement,
  AriaCarouselRotationControlElement,
  AriaCarouselSlideElement,
  AriaCarouselSlidesElement,
  AriaCarouselTabElement,
  AriaCarouselTabsElement
} from '@queelag/web-components'

export const QAriaCarousel: ElementComponent<AriaCarouselElement, AriaCarouselProps> = createElementComponent('q-aria-carousel', AriaCarouselElement)

export const QAriaCarouselNextSlideControl: ElementComponent<AriaCarouselNextSlideControlElement, AriaCarouselNextSlideControlProps> = createElementComponent(
  'q-aria-carousel-next-slide-control',
  AriaCarouselNextSlideControlElement
)

export const QAriaCarouselPreviousSlideControl: ElementComponent<AriaCarouselPreviousSlideControlElement, AriaCarouselPreviousSlideControlProps> =
  createElementComponent('q-aria-carousel-previous-slide-control', AriaCarouselPreviousSlideControlElement)

export const QAriaCarouselRotationControl: ElementComponent<AriaCarouselRotationControlElement, AriaCarouselRotationControlProps> = createElementComponent(
  'q-aria-carousel-rotation-control',
  AriaCarouselRotationControlElement
)

export const QAriaCarouselSlide: ElementComponent<AriaCarouselSlideElement, AriaCarouselSlideProps> = createElementComponent(
  'q-aria-carousel-slide',
  AriaCarouselSlideElement
)

export const QAriaCarouselSlides: ElementComponent<AriaCarouselSlidesElement, AriaCarouselSlidesProps> = createElementComponent(
  'q-aria-carousel-slides',
  AriaCarouselSlidesElement
)

export const QAriaCarouselTab: ElementComponent<AriaCarouselTabElement, AriaCarouselTabProps> = createElementComponent(
  'q-aria-carousel-tab',
  AriaCarouselTabElement
)

export const QAriaCarouselTabs: ElementComponent<AriaCarouselTabsElement, AriaCarouselTabsProps> = createElementComponent(
  'q-aria-carousel-tabs',
  AriaCarouselTabsElement
)
