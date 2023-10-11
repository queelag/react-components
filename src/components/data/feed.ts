import type { ElementComponent, FeedArticleDescriptionProps, FeedArticleLabelProps, FeedArticleProps, FeedProps } from '@aracna/react'
import { createBaseElementComponent } from '@aracna/react'
import type {
  FeedArticleDescriptionElementAttributes,
  FeedArticleDescriptionElementEventMap,
  FeedArticleElementAttributes,
  FeedArticleElementEventMap,
  FeedArticleLabelElementAttributes,
  FeedArticleLabelElementEventMap,
  FeedElementAttributes,
  FeedElementEventMap
} from '@aracna/web'
import { FeedArticleDescriptionElement, FeedArticleElement, FeedArticleLabelElement, FeedElement } from '@aracna/web-components/elements/data/feed-element'

export const AracnaFeed: ElementComponent<FeedElement, FeedProps> = createBaseElementComponent<FeedElement, FeedElementAttributes, FeedElementEventMap>(
  'aracna-feed',
  FeedElement
)

export const AracnaFeedArticle: ElementComponent<FeedArticleElement, FeedArticleProps> = createBaseElementComponent<
  FeedArticleElement,
  FeedArticleElementAttributes,
  FeedArticleElementEventMap
>('aracna-feed-article', FeedArticleElement)

export const AracnaFeedArticleDescription: ElementComponent<FeedArticleDescriptionElement, FeedArticleDescriptionProps> = createBaseElementComponent<
  FeedArticleDescriptionElement,
  FeedArticleDescriptionElementAttributes,
  FeedArticleDescriptionElementEventMap
>('aracna-feed-article-description', FeedArticleDescriptionElement)

export const AracnaFeedArticleLabel: ElementComponent<FeedArticleLabelElement, FeedArticleLabelProps> = createBaseElementComponent<
  FeedArticleLabelElement,
  FeedArticleLabelElementAttributes,
  FeedArticleLabelElementEventMap
>('aracna-feed-article-label', FeedArticleLabelElement)
