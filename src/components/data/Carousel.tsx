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
} from '@aracna/react'
import {
  CarouselElementAttributes,
  CarouselElementEventMap,
  CarouselNextSlideControlElementAttributes,
  CarouselNextSlideControlElementEventMap,
  CarouselPreviousSlideControlElementAttributes,
  CarouselPreviousSlideControlElementEventMap,
  CarouselRotationControlElementAttributes,
  CarouselRotationControlElementEventMap,
  CarouselSlideElementAttributes,
  CarouselSlideElementEventMap,
  CarouselSlidesElementAttributes,
  CarouselSlidesElementEventMap,
  CarouselTabElementAttributes,
  CarouselTabElementEventMap,
  CarouselTabsElementAttributes,
  CarouselTabsElementEventMap
} from '@aracna/web'
import {
  CarouselElement,
  CarouselNextSlideControlElement,
  CarouselPreviousSlideControlElement,
  CarouselRotationControlElement,
  CarouselSlideElement,
  CarouselSlidesElement,
  CarouselTabElement,
  CarouselTabsElement
} from '@aracna/web-components/elements/data/carousel.element.js'

export const AracnaCarousel: ElementComponent<CarouselElement, CarouselProps> = createBaseElementComponent<
  CarouselElement,
  CarouselElementAttributes,
  CarouselElementEventMap
>('aracna-carousel', CarouselElement)

export const AracnaCarouselNextSlideControl: ElementComponent<CarouselNextSlideControlElement, CarouselNextSlideControlProps> = createBaseElementComponent<
  CarouselNextSlideControlElement,
  CarouselNextSlideControlElementAttributes,
  CarouselNextSlideControlElementEventMap
>('aracna-carousel-next-slide-control', CarouselNextSlideControlElement)

export const AracnaCarouselPreviousSlideControl: ElementComponent<CarouselPreviousSlideControlElement, CarouselPreviousSlideControlProps> =
  createBaseElementComponent<CarouselPreviousSlideControlElement, CarouselPreviousSlideControlElementAttributes, CarouselPreviousSlideControlElementEventMap>(
    'aracna-carousel-previous-slide-control',
    CarouselPreviousSlideControlElement
  )

export const AracnaCarouselRotationControl: ElementComponent<CarouselRotationControlElement, CarouselRotationControlProps> = createBaseElementComponent<
  CarouselRotationControlElement,
  CarouselRotationControlElementAttributes,
  CarouselRotationControlElementEventMap
>('aracna-carousel-rotation-control', CarouselRotationControlElement)

export const AracnaCarouselSlide: ElementComponent<CarouselSlideElement, CarouselSlideProps> = createBaseElementComponent<
  CarouselSlideElement,
  CarouselSlideElementAttributes,
  CarouselSlideElementEventMap
>('aracna-carousel-slide', CarouselSlideElement)
export const AracnaCarouselSlides: ElementComponent<CarouselSlidesElement, CarouselSlidesProps> = createBaseElementComponent<
  CarouselSlidesElement,
  CarouselSlidesElementAttributes,
  CarouselSlidesElementEventMap
>('aracna-carousel-slides', CarouselSlidesElement)
export const AracnaCarouselTab: ElementComponent<CarouselTabElement, CarouselTabProps> = createBaseElementComponent<
  CarouselTabElement,
  CarouselTabElementAttributes,
  CarouselTabElementEventMap
>('aracna-carousel-tab', CarouselTabElement)

export const AracnaCarouselTabs: ElementComponent<CarouselTabsElement, CarouselTabsProps> = createBaseElementComponent<
  CarouselTabsElement,
  CarouselTabsElementAttributes,
  CarouselTabsElementEventMap
>('aracna-carousel-tabs', CarouselTabsElement)
