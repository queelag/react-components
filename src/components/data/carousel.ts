import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type {
  AracnaCarouselProps,
  AracnaCarouselNextSlideControlProps,
  AracnaCarouselPreviousSlideControlProps,
  AracnaCarouselRotationControlProps,
  AracnaCarouselSlideProps,
  AracnaCarouselSlidesProps,
  AracnaCarouselTabProps,
  AracnaCarouselTabsProps
} from '@aracna/react'
import type {
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
} from '@aracna/web-components/elements/data/carousel-element'

export const AracnaCarousel: ElementComponent<CarouselElement, AracnaCarouselProps> = createBaseElementComponent<
  CarouselElement,
  CarouselElementAttributes,
  CarouselElementEventMap
>('aracna-carousel', CarouselElement)

export const AracnaCarouselNextSlideControl: ElementComponent<CarouselNextSlideControlElement, AracnaCarouselNextSlideControlProps> =
  createBaseElementComponent<CarouselNextSlideControlElement, CarouselNextSlideControlElementAttributes, CarouselNextSlideControlElementEventMap>(
    'aracna-carousel-next-slide-control',
    CarouselNextSlideControlElement
  )

export const AracnaCarouselPreviousSlideControl: ElementComponent<CarouselPreviousSlideControlElement, AracnaCarouselPreviousSlideControlProps> =
  createBaseElementComponent<CarouselPreviousSlideControlElement, CarouselPreviousSlideControlElementAttributes, CarouselPreviousSlideControlElementEventMap>(
    'aracna-carousel-previous-slide-control',
    CarouselPreviousSlideControlElement
  )

export const AracnaCarouselRotationControl: ElementComponent<CarouselRotationControlElement, AracnaCarouselRotationControlProps> = createBaseElementComponent<
  CarouselRotationControlElement,
  CarouselRotationControlElementAttributes,
  CarouselRotationControlElementEventMap
>('aracna-carousel-rotation-control', CarouselRotationControlElement)

export const AracnaCarouselSlide: ElementComponent<CarouselSlideElement, AracnaCarouselSlideProps> = createBaseElementComponent<
  CarouselSlideElement,
  CarouselSlideElementAttributes,
  CarouselSlideElementEventMap
>('aracna-carousel-slide', CarouselSlideElement, ['carousel-slide-activate', 'carousel-slide-deactive'])

export const AracnaCarouselSlides: ElementComponent<CarouselSlidesElement, AracnaCarouselSlidesProps> = createBaseElementComponent<
  CarouselSlidesElement,
  CarouselSlidesElementAttributes,
  CarouselSlidesElementEventMap
>('aracna-carousel-slides', CarouselSlidesElement)

export const AracnaCarouselTab: ElementComponent<CarouselTabElement, AracnaCarouselTabProps> = createBaseElementComponent<
  CarouselTabElement,
  CarouselTabElementAttributes,
  CarouselTabElementEventMap
>('aracna-carousel-tab', CarouselTabElement)

export const AracnaCarouselTabs: ElementComponent<CarouselTabsElement, AracnaCarouselTabsProps> = createBaseElementComponent<
  CarouselTabsElement,
  CarouselTabsElementAttributes,
  CarouselTabsElementEventMap
>('aracna-carousel-tabs', CarouselTabsElement)
