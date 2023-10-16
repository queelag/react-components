import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaFeedProps, AracnaFeedArticleProps, AracnaFeedArticleDescriptionProps, AracnaFeedArticleLabelProps } from '@aracna/react'
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
import { FeedElement, FeedArticleElement, FeedArticleDescriptionElement, FeedArticleLabelElement } from '@aracna/web-components/elements/data/feed-element'

export const AracnaFeed: ElementComponent<FeedElement, AracnaFeedProps> = createBaseElementComponent<FeedElement, FeedElementAttributes, FeedElementEventMap>(
  'aracna-feed',
  FeedElement
)

export const AracnaFeedArticle: ElementComponent<FeedArticleElement, AracnaFeedArticleProps> = createBaseElementComponent<
  FeedArticleElement,
  FeedArticleElementAttributes,
  FeedArticleElementEventMap
>('aracna-feed-article', FeedArticleElement)

export const AracnaFeedArticleDescription: ElementComponent<FeedArticleDescriptionElement, AracnaFeedArticleDescriptionProps> = createBaseElementComponent<
  FeedArticleDescriptionElement,
  FeedArticleDescriptionElementAttributes,
  FeedArticleDescriptionElementEventMap
>('aracna-feed-article-description', FeedArticleDescriptionElement)

export const AracnaFeedArticleLabel: ElementComponent<FeedArticleLabelElement, AracnaFeedArticleLabelProps> = createBaseElementComponent<
  FeedArticleLabelElement,
  FeedArticleLabelElementAttributes,
  FeedArticleLabelElementEventMap
>('aracna-feed-article-label', FeedArticleLabelElement)
