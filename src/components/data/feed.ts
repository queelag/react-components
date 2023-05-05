import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { FeedProps, FeedArticleProps, FeedArticleDescriptionProps, FeedArticleLabelProps } from '@aracna/react'
import type {
  FeedElementAttributes,
  FeedElementEventMap,
  FeedArticleElementAttributes,
  FeedArticleElementEventMap,
  FeedArticleDescriptionElementAttributes,
  FeedArticleDescriptionElementEventMap,
  FeedArticleLabelElementAttributes,
  FeedArticleLabelElementEventMap
} from '@aracna/web'
import { FeedElement, FeedArticleElement, FeedArticleDescriptionElement, FeedArticleLabelElement } from '@aracna/web-components/data/feed'

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
