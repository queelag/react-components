import { createBaseElementComponent, ElementComponent, FeedArticleDescriptionProps, FeedArticleLabelProps, FeedArticleProps, FeedProps } from '@queelag/react'
import { FeedArticleDescriptionElement, FeedArticleElement, FeedArticleLabelElement, FeedElement } from '@queelag/web-components/elements/data/feed.element.js'

export const QFeed: ElementComponent<FeedElement, FeedProps> = createBaseElementComponent('q-feed', FeedElement)

export const QFeedArticle: ElementComponent<FeedArticleElement, FeedArticleProps> = createBaseElementComponent('q-feed-article', FeedArticleElement)

export const QFeedArticleDescription: ElementComponent<FeedArticleDescriptionElement, FeedArticleDescriptionProps> = createBaseElementComponent(
  'q-feed-article-description',
  FeedArticleDescriptionElement
)

export const QFeedArticleLabel: ElementComponent<FeedArticleLabelElement, FeedArticleLabelProps> = createBaseElementComponent(
  'q-feed-article-label',
  FeedArticleLabelElement
)
