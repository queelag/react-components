import {
  AriaCarouselNextSlideControlProps,
  AriaCarouselPreviousSlideControlProps,
  AriaCarouselProps,
  AriaCarouselRotationControlProps,
  AriaCarouselSlideProps,
  AriaCarouselSlidesProps,
  AriaCarouselTabProps,
  AriaCarouselTabsProps,
  forwardRef
} from '@queelag/preact'
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
import { h, Ref } from 'preact'

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'q-aria-carousel': AriaCarouselProps
      'q-aria-carousel-next-slide-control': AriaCarouselNextSlideControlProps
      'q-aria-carousel-previous-slide-control': AriaCarouselPreviousSlideControlProps
      'q-aria-carousel-rotation-control': AriaCarouselRotationControlProps
      'q-aria-carousel-slide': AriaCarouselSlideProps
      'q-aria-carousel-slides': AriaCarouselSlidesProps
      'q-aria-carousel-tab': AriaCarouselTabProps
      'q-aria-carousel-tabs': AriaCarouselTabsProps
    }
  }
}

export const AriaCarousel = forwardRef((props: AriaCarouselProps, ref: Ref<AriaCarouselElement>) => {
  return <q-aria-carousel {...props} ref={ref} />
})

export const AriaCarouselNextSlideControl = forwardRef((props: AriaCarouselNextSlideControlProps, ref: Ref<AriaCarouselNextSlideControlElement>) => {
  return <q-aria-carousel-next-slide-control {...props} ref={ref} />
})

export const AriaCarouselPreviousSlideControl = forwardRef(
  (props: AriaCarouselPreviousSlideControlProps, ref: Ref<AriaCarouselPreviousSlideControlElement>) => {
    return <q-aria-carousel-previous-slide-control {...props} ref={ref} />
  }
)

export const AriaCarouselRotationControl = forwardRef((props: AriaCarouselRotationControlProps, ref: Ref<AriaCarouselRotationControlElement>) => {
  return <q-aria-carousel-rotation-control {...props} ref={ref} />
})

export const AriaCarouselSlide = forwardRef((props: AriaCarouselSlideProps, ref: Ref<AriaCarouselSlideElement>) => {
  return <q-aria-carousel-slide {...props} ref={ref} />
})

export const AriaCarouselSlides = forwardRef((props: AriaCarouselSlidesProps, ref: Ref<AriaCarouselSlidesElement>) => {
  return <q-aria-carousel-slides {...props} ref={ref} />
})

export const AriaCarouselTab = forwardRef((props: AriaCarouselTabProps, ref: Ref<AriaCarouselTabElement>) => {
  return <q-aria-carousel-tab {...props} ref={ref} />
})

export const AriaCarouselTabs = forwardRef((props: AriaCarouselTabsProps, ref: Ref<AriaCarouselTabsElement>) => {
  return <q-aria-carousel-tabs {...props} ref={ref} />
})
