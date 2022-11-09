import {
  AriaFeedArticleDescriptionProps,
  AriaFeedArticleLabelProps,
  AriaFeedArticleProps,
  AriaFeedProps,
  createElementComponent,
  ElementComponent
} from '@queelag/react'
import {
  AriaFeedArticleDescriptionElement,
  AriaFeedArticleElement,
  AriaFeedArticleLabelElement,
  AriaFeedElement
} from '@queelag/web-components/elements/aria/aria.feed.element'

export const QAriaFeed: ElementComponent<AriaFeedElement, AriaFeedProps> = createElementComponent('q-aria-feed', AriaFeedElement)

export const QAriaFeedArticle: ElementComponent<AriaFeedArticleElement, AriaFeedArticleProps> = createElementComponent(
  'q-aria-feed-article',
  AriaFeedArticleElement
)

export const QAriaFeedArticleDescription: ElementComponent<AriaFeedArticleDescriptionElement, AriaFeedArticleDescriptionProps> = createElementComponent(
  'q-aria-feed-article-description',
  AriaFeedArticleDescriptionElement
)

export const QAriaFeedArticleLabel: ElementComponent<AriaFeedArticleLabelElement, AriaFeedArticleLabelProps> = createElementComponent(
  'q-aria-feed-article-label',
  AriaFeedArticleLabelElement
)
