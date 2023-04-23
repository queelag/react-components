import {
  AriaFeedArticleDescriptionProps,
  AriaFeedArticleLabelProps,
  AriaFeedArticleProps,
  AriaFeedProps,
  createBaseElementComponent,
  ElementComponent
} from '@aracna/react'
import {
  AriaFeedArticleDescriptionElementAttributes,
  AriaFeedArticleDescriptionElementEventMap,
  AriaFeedArticleElementAttributes,
  AriaFeedArticleElementEventMap,
  AriaFeedArticleLabelElementAttributes,
  AriaFeedArticleLabelElementEventMap,
  AriaFeedElementAttributes,
  AriaFeedElementEventMap
} from '@aracna/web'
import {
  AriaFeedArticleDescriptionElement,
  AriaFeedArticleElement,
  AriaFeedArticleLabelElement,
  AriaFeedElement
} from '@aracna/web-components/elements/aria/aria.feed.element.js'

export const AracnaAriaFeed: ElementComponent<AriaFeedElement, AriaFeedProps> = createBaseElementComponent<
  AriaFeedElement,
  AriaFeedElementAttributes,
  AriaFeedElementEventMap
>('aracna-aria-feed', AriaFeedElement)

export const AracnaAriaFeedArticle: ElementComponent<AriaFeedArticleElement, AriaFeedArticleProps> = createBaseElementComponent<
  AriaFeedArticleElement,
  AriaFeedArticleElementAttributes,
  AriaFeedArticleElementEventMap
>('aracna-aria-feed-article', AriaFeedArticleElement)

export const AracnaAriaFeedArticleDescription: ElementComponent<AriaFeedArticleDescriptionElement, AriaFeedArticleDescriptionProps> =
  createBaseElementComponent<AriaFeedArticleDescriptionElement, AriaFeedArticleDescriptionElementAttributes, AriaFeedArticleDescriptionElementEventMap>(
    'aracna-aria-feed-article-description',
    AriaFeedArticleDescriptionElement
  )

export const AracnaAriaFeedArticleLabel: ElementComponent<AriaFeedArticleLabelElement, AriaFeedArticleLabelProps> = createBaseElementComponent<
  AriaFeedArticleLabelElement,
  AriaFeedArticleLabelElementAttributes,
  AriaFeedArticleLabelElementEventMap
>('aracna-aria-feed-article-label', AriaFeedArticleLabelElement)
