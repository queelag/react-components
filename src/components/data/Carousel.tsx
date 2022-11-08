import {
  CarouselNextSlideControlProps,
  CarouselPreviousSlideControlProps,
  CarouselProps,
  CarouselRotationControlProps,
  CarouselSlideProps,
  CarouselSlidesProps,
  CarouselTabProps,
  CarouselTabsProps,
  createElementComponent,
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
} from '@queelag/web-components'

export const QCarousel: ElementComponent<CarouselElement, CarouselProps> = createElementComponent('q-carousel', CarouselElement)

export const QCarouselNextSlideControl: ElementComponent<CarouselNextSlideControlElement, CarouselNextSlideControlProps> = createElementComponent(
  'q-carousel-next-slide-control',
  CarouselNextSlideControlElement
)

export const QCarouselPreviousSlideControl: ElementComponent<CarouselPreviousSlideControlElement, CarouselPreviousSlideControlProps> = createElementComponent(
  'q-carousel-previous-slide-control',
  CarouselPreviousSlideControlElement
)

export const QCarouselRotationControl: ElementComponent<CarouselRotationControlElement, CarouselRotationControlProps> = createElementComponent(
  'q-carousel-rotation-control',
  CarouselRotationControlElement
)

export const QCarouselSlide: ElementComponent<CarouselSlideElement, CarouselSlideProps> = createElementComponent('q-carousel-slide', CarouselSlideElement)
export const QCarouselSlides: ElementComponent<CarouselSlidesElement, CarouselSlidesProps> = createElementComponent('q-carousel-slides', CarouselSlidesElement)
export const QCarouselTab: ElementComponent<CarouselTabElement, CarouselTabProps> = createElementComponent('q-carousel-tab', CarouselTabElement)
export const QCarouselTabs: ElementComponent<CarouselTabsElement, CarouselTabsProps> = createElementComponent('q-carousel-tabs', CarouselTabsElement)
