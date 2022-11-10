import { createElementComponent, ElementComponent, FeedArticleDescriptionProps, FeedArticleLabelProps, FeedArticleProps, FeedProps } from '@queelag/react'
import { FeedArticleDescriptionElement, FeedArticleElement, FeedArticleLabelElement, FeedElement } from '@queelag/web-components/elements/data/feed.element.js'

export const QFeed: ElementComponent<FeedElement, FeedProps> = createElementComponent('q-feed', FeedElement)

export const QFeedArticle: ElementComponent<FeedArticleElement, FeedArticleProps> = createElementComponent('q-feed-article', FeedArticleElement)

export const QFeedArticleDescription: ElementComponent<FeedArticleDescriptionElement, FeedArticleDescriptionProps> = createElementComponent(
  'q-feed-article-description',
  FeedArticleDescriptionElement
)

export const QFeedArticleLabel: ElementComponent<FeedArticleLabelElement, FeedArticleLabelProps> = createElementComponent(
  'q-feed-article-label',
  FeedArticleLabelElement
)
