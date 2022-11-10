import {
  AriaCarouselNextSlideControlProps,
  AriaCarouselPreviousSlideControlProps,
  AriaCarouselProps,
  AriaCarouselRotationControlProps,
  AriaCarouselSlideProps,
  AriaCarouselSlidesProps,
  AriaCarouselTabProps,
  AriaCarouselTabsProps,
  createBaseElementComponent,
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
} from '@queelag/web-components/elements/aria/aria.carousel.element.js'

export const QAriaCarousel: ElementComponent<AriaCarouselElement, AriaCarouselProps> = createBaseElementComponent('q-aria-carousel', AriaCarouselElement)

export const QAriaCarouselNextSlideControl: ElementComponent<AriaCarouselNextSlideControlElement, AriaCarouselNextSlideControlProps> =
  createBaseElementComponent('q-aria-carousel-next-slide-control', AriaCarouselNextSlideControlElement)

export const QAriaCarouselPreviousSlideControl: ElementComponent<AriaCarouselPreviousSlideControlElement, AriaCarouselPreviousSlideControlProps> =
  createBaseElementComponent('q-aria-carousel-previous-slide-control', AriaCarouselPreviousSlideControlElement)

export const QAriaCarouselRotationControl: ElementComponent<AriaCarouselRotationControlElement, AriaCarouselRotationControlProps> = createBaseElementComponent(
  'q-aria-carousel-rotation-control',
  AriaCarouselRotationControlElement
)

export const QAriaCarouselSlide: ElementComponent<AriaCarouselSlideElement, AriaCarouselSlideProps> = createBaseElementComponent(
  'q-aria-carousel-slide',
  AriaCarouselSlideElement
)

export const QAriaCarouselSlides: ElementComponent<AriaCarouselSlidesElement, AriaCarouselSlidesProps> = createBaseElementComponent(
  'q-aria-carousel-slides',
  AriaCarouselSlidesElement
)

export const QAriaCarouselTab: ElementComponent<AriaCarouselTabElement, AriaCarouselTabProps> = createBaseElementComponent(
  'q-aria-carousel-tab',
  AriaCarouselTabElement
)

export const QAriaCarouselTabs: ElementComponent<AriaCarouselTabsElement, AriaCarouselTabsProps> = createBaseElementComponent(
  'q-aria-carousel-tabs',
  AriaCarouselTabsElement
)
