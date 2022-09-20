import { AriaFeedArticleDescriptionProps, AriaFeedArticleLabelProps, AriaFeedArticleProps, AriaFeedProps, forwardRef } from '@queelag/preact'
import { AriaFeedArticleDescriptionElement, AriaFeedArticleElement, AriaFeedArticleLabelElement, AriaFeedElement } from '@queelag/web-components'
import { h, Ref } from 'preact'

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'q-aria-feed': AriaFeedProps
      'q-aria-feed-article': AriaFeedArticleProps
      'q-aria-feed-article-description': AriaFeedArticleDescriptionProps
      'q-aria-feed-article-label': AriaFeedArticleLabelProps
    }
  }
}

export const AriaFeed = forwardRef((props: AriaFeedProps, ref: Ref<AriaFeedElement>) => {
  return <q-aria-feed {...props} ref={ref} />
})

export const AriaFeedArticle = forwardRef((props: AriaFeedArticleProps, ref: Ref<AriaFeedArticleElement>) => {
  return <q-aria-feed-article {...props} ref={ref} />
})

export const AriaFeedArticleDescription = forwardRef((props: AriaFeedArticleDescriptionProps, ref: Ref<AriaFeedArticleDescriptionElement>) => {
  return <q-aria-feed-article-description {...props} ref={ref} />
})

export const AriaFeedArticleLabel = forwardRef((props: AriaFeedArticleLabelProps, ref: Ref<AriaFeedArticleLabelElement>) => {
  return <q-aria-feed-article-label {...props} ref={ref} />
})
