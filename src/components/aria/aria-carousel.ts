import type { ElementComponent } from '@aracna/react'
import { createBaseElementComponent } from '../../functions/create-base-element-component.js'
import type {
  AracnaAriaCarouselProps,
  AracnaAriaCarouselNextSlideControlProps,
  AracnaAriaCarouselPreviousSlideControlProps,
  AracnaAriaCarouselRotationControlProps,
  AracnaAriaCarouselSlideProps,
  AracnaAriaCarouselSlidesProps,
  AracnaAriaCarouselTabProps,
  AracnaAriaCarouselTabsProps
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

export const AracnaAriaCarousel: ElementComponent<AracnaAriaCarouselElement, AracnaAriaCarouselProps> = createBaseElementComponent<
  AracnaAriaCarouselElement,
  AracnaAriaCarouselElementAttributes,
  AracnaAriaCarouselElementEventMap
>('aracna-aria-carousel', AracnaAriaCarouselElement, ['rotation-pause', 'rotation-resume', 'rotation-start', 'rotation-stop'])

export const AracnaAriaCarouselNextSlideControl: ElementComponent<AracnaAriaCarouselNextSlideControlElement, AracnaAriaCarouselNextSlideControlProps> =
  createBaseElementComponent<
    AracnaAriaCarouselNextSlideControlElement,
    AracnaAriaCarouselNextSlideControlElementAttributes,
    AracnaAriaCarouselNextSlideControlElementEventMap
  >('aracna-aria-carousel-next-slide-control', AracnaAriaCarouselNextSlideControlElement)

export const AracnaAriaCarouselPreviousSlideControl: ElementComponent<
  AracnaAriaCarouselPreviousSlideControlElement,
  AracnaAriaCarouselPreviousSlideControlProps
> = createBaseElementComponent<
  AracnaAriaCarouselPreviousSlideControlElement,
  AracnaAriaCarouselPreviousSlideControlElementAttributes,
  AracnaAriaCarouselPreviousSlideControlElementEventMap
>('aracna-aria-carousel-previous-slide-control', AracnaAriaCarouselPreviousSlideControlElement)

export const AracnaAriaCarouselRotationControl: ElementComponent<AracnaAriaCarouselRotationControlElement, AracnaAriaCarouselRotationControlProps> =
  createBaseElementComponent<
    AracnaAriaCarouselRotationControlElement,
    AracnaAriaCarouselRotationControlElementAttributes,
    AracnaAriaCarouselRotationControlElementEventMap
  >('aracna-aria-carousel-rotation-control', AracnaAriaCarouselRotationControlElement)

export const AracnaAriaCarouselSlide: ElementComponent<AracnaAriaCarouselSlideElement, AracnaAriaCarouselSlideProps> = createBaseElementComponent<
  AracnaAriaCarouselSlideElement,
  AracnaAriaCarouselSlideElementAttributes,
  AracnaAriaCarouselSlideElementEventMap
>('aracna-aria-carousel-slide', AracnaAriaCarouselSlideElement, ['activate', 'deactivate'])

export const AracnaAriaCarouselSlides: ElementComponent<AracnaAriaCarouselSlidesElement, AracnaAriaCarouselSlidesProps> = createBaseElementComponent<
  AracnaAriaCarouselSlidesElement,
  AracnaAriaCarouselSlidesElementAttributes,
  AracnaAriaCarouselSlidesElementEventMap
>('aracna-aria-carousel-slides', AracnaAriaCarouselSlidesElement)

export const AracnaAriaCarouselTab: ElementComponent<AracnaAriaCarouselTabElement, AracnaAriaCarouselTabProps> = createBaseElementComponent<
  AracnaAriaCarouselTabElement,
  AracnaAriaCarouselTabElementAttributes,
  AracnaAriaCarouselTabElementEventMap
>('aracna-aria-carousel-tab', AracnaAriaCarouselTabElement, ['activate', 'deactivate'])

export const AracnaAriaCarouselTabs: ElementComponent<AracnaAriaCarouselTabsElement, AracnaAriaCarouselTabsProps> = createBaseElementComponent<
  AracnaAriaCarouselTabsElement,
  AracnaAriaCarouselTabsElementAttributes,
  AracnaAriaCarouselTabsElementEventMap
>('aracna-aria-carousel-tabs', AracnaAriaCarouselTabsElement)
