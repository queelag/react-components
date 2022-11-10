import {
  AriaFeedArticleDescriptionProps,
  AriaFeedArticleLabelProps,
  AriaFeedArticleProps,
  AriaFeedProps,
  createBaseElementComponent,
  ElementComponent
} from '@queelag/react'
import {
  AriaFeedArticleDescriptionElement,
  AriaFeedArticleElement,
  AriaFeedArticleLabelElement,
  AriaFeedElement
} from '@queelag/web-components/elements/aria/aria.feed.element.js'

export const QAriaFeed: ElementComponent<AriaFeedElement, AriaFeedProps> = createBaseElementComponent('q-aria-feed', AriaFeedElement)

export const QAriaFeedArticle: ElementComponent<AriaFeedArticleElement, AriaFeedArticleProps> = createBaseElementComponent(
  'q-aria-feed-article',
  AriaFeedArticleElement
)

export const QAriaFeedArticleDescription: ElementComponent<AriaFeedArticleDescriptionElement, AriaFeedArticleDescriptionProps> = createBaseElementComponent(
  'q-aria-feed-article-description',
  AriaFeedArticleDescriptionElement
)

export const QAriaFeedArticleLabel: ElementComponent<AriaFeedArticleLabelElement, AriaFeedArticleLabelProps> = createBaseElementComponent(
  'q-aria-feed-article-label',
  AriaFeedArticleLabelElement
)
