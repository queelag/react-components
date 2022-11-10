import {
  CarouselNextSlideControlProps,
  CarouselPreviousSlideControlProps,
  CarouselProps,
  CarouselRotationControlProps,
  CarouselSlideProps,
  CarouselSlidesProps,
  CarouselTabProps,
  CarouselTabsProps,
  createBaseElementComponent,
  ElementComponent
} from '@queelag/react'
import {
  CarouselElement,
  CarouselNextSlideControlElement,
  CarouselPreviousSlideControlElement,
  CarouselRotationControlElement,
  CarouselSlideElement,
  CarouselSlidesElement,
  CarouselTabElement,
  CarouselTabsElement
} from '@queelag/web-components/elements/data/carousel.element.js'

export const QCarousel: ElementComponent<CarouselElement, CarouselProps> = createBaseElementComponent('q-carousel', CarouselElement)

export const QCarouselNextSlideControl: ElementComponent<CarouselNextSlideControlElement, CarouselNextSlideControlProps> = createBaseElementComponent(
  'q-carousel-next-slide-control',
  CarouselNextSlideControlElement
)

export const QCarouselPreviousSlideControl: ElementComponent<CarouselPreviousSlideControlElement, CarouselPreviousSlideControlProps> =
  createBaseElementComponent('q-carousel-previous-slide-control', CarouselPreviousSlideControlElement)

export const QCarouselRotationControl: ElementComponent<CarouselRotationControlElement, CarouselRotationControlProps> = createBaseElementComponent(
  'q-carousel-rotation-control',
  CarouselRotationControlElement
)

export const QCarouselSlide: ElementComponent<CarouselSlideElement, CarouselSlideProps> = createBaseElementComponent('q-carousel-slide', CarouselSlideElement)
export const QCarouselSlides: ElementComponent<CarouselSlidesElement, CarouselSlidesProps> = createBaseElementComponent(
  'q-carousel-slides',
  CarouselSlidesElement
)
export const QCarouselTab: ElementComponent<CarouselTabElement, CarouselTabProps> = createBaseElementComponent('q-carousel-tab', CarouselTabElement)
export const QCarouselTabs: ElementComponent<CarouselTabsElement, CarouselTabsProps> = createBaseElementComponent('q-carousel-tabs', CarouselTabsElement)
