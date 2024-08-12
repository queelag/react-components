import type { ElementComponent } from '@aracna/react'
import { createBaseElementComponent } from '../../functions/create-base-element-component.js'
import type {
  AracnaCarouselProps,
  AracnaCarouselNextSlideControlProps,
  AracnaCarouselPreviousSlideControlProps,
  AracnaCarouselRotationControlProps,
  AracnaCarouselSlideProps,
  AracnaCarouselSlidesProps,
  AracnaCarouselTabProps,
  AracnaCarouselTabsProps
} from '../../definitions/props.js'
import type {
  AracnaCarouselElementAttributes,
  AracnaCarouselElementEventMap,
  AracnaCarouselNextSlideControlElementAttributes,
  AracnaCarouselNextSlideControlElementEventMap,
  AracnaCarouselPreviousSlideControlElementAttributes,
  AracnaCarouselPreviousSlideControlElementEventMap,
  AracnaCarouselRotationControlElementAttributes,
  AracnaCarouselRotationControlElementEventMap,
  AracnaCarouselSlideElementAttributes,
  AracnaCarouselSlideElementEventMap,
  AracnaCarouselSlidesElementAttributes,
  AracnaCarouselSlidesElementEventMap,
  AracnaCarouselTabElementAttributes,
  AracnaCarouselTabElementEventMap,
  AracnaCarouselTabsElementAttributes,
  AracnaCarouselTabsElementEventMap
} from '@aracna/web-components'
import {
  AracnaCarouselElement,
  AracnaCarouselNextSlideControlElement,
  AracnaCarouselPreviousSlideControlElement,
  AracnaCarouselRotationControlElement,
  AracnaCarouselSlideElement,
  AracnaCarouselSlidesElement,
  AracnaCarouselTabElement,
  AracnaCarouselTabsElement
} from '@aracna/web-components/elements/data/carousel-element'

export const AracnaCarousel: ElementComponent<AracnaCarouselElement, AracnaCarouselProps> = createBaseElementComponent<
  AracnaCarouselElement,
  AracnaCarouselElementAttributes,
  AracnaCarouselElementEventMap
>('aracna-carousel', AracnaCarouselElement, ['rotation-pause', 'rotation-resume', 'rotation-start', 'rotation-stop'])

export const AracnaCarouselNextSlideControl: ElementComponent<AracnaCarouselNextSlideControlElement, AracnaCarouselNextSlideControlProps> =
  createBaseElementComponent<
    AracnaCarouselNextSlideControlElement,
    AracnaCarouselNextSlideControlElementAttributes,
    AracnaCarouselNextSlideControlElementEventMap
  >('aracna-carousel-next-slide-control', AracnaCarouselNextSlideControlElement)

export const AracnaCarouselPreviousSlideControl: ElementComponent<AracnaCarouselPreviousSlideControlElement, AracnaCarouselPreviousSlideControlProps> =
  createBaseElementComponent<
    AracnaCarouselPreviousSlideControlElement,
    AracnaCarouselPreviousSlideControlElementAttributes,
    AracnaCarouselPreviousSlideControlElementEventMap
  >('aracna-carousel-previous-slide-control', AracnaCarouselPreviousSlideControlElement)

export const AracnaCarouselRotationControl: ElementComponent<AracnaCarouselRotationControlElement, AracnaCarouselRotationControlProps> =
  createBaseElementComponent<
    AracnaCarouselRotationControlElement,
    AracnaCarouselRotationControlElementAttributes,
    AracnaCarouselRotationControlElementEventMap
  >('aracna-carousel-rotation-control', AracnaCarouselRotationControlElement)

export const AracnaCarouselSlide: ElementComponent<AracnaCarouselSlideElement, AracnaCarouselSlideProps> = createBaseElementComponent<
  AracnaCarouselSlideElement,
  AracnaCarouselSlideElementAttributes,
  AracnaCarouselSlideElementEventMap
>('aracna-carousel-slide', AracnaCarouselSlideElement, ['activate', 'deactivate'])

export const AracnaCarouselSlides: ElementComponent<AracnaCarouselSlidesElement, AracnaCarouselSlidesProps> = createBaseElementComponent<
  AracnaCarouselSlidesElement,
  AracnaCarouselSlidesElementAttributes,
  AracnaCarouselSlidesElementEventMap
>('aracna-carousel-slides', AracnaCarouselSlidesElement)

export const AracnaCarouselTab: ElementComponent<AracnaCarouselTabElement, AracnaCarouselTabProps> = createBaseElementComponent<
  AracnaCarouselTabElement,
  AracnaCarouselTabElementAttributes,
  AracnaCarouselTabElementEventMap
>('aracna-carousel-tab', AracnaCarouselTabElement, ['activate', 'deactivate'])

export const AracnaCarouselTabs: ElementComponent<AracnaCarouselTabsElement, AracnaCarouselTabsProps> = createBaseElementComponent<
  AracnaCarouselTabsElement,
  AracnaCarouselTabsElementAttributes,
  AracnaCarouselTabsElementEventMap
>('aracna-carousel-tabs', AracnaCarouselTabsElement)
