import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type {
  AracnaAracnaFeedProps,
  AracnaAracnaFeedArticleProps,
  AracnaAracnaFeedArticleDescriptionProps,
  AracnaAracnaFeedArticleLabelProps
} from '../../definitions/props.js'
import type {
  AracnaFeedElementAttributes,
  AracnaFeedElementEventMap,
  AracnaFeedArticleElementAttributes,
  AracnaFeedArticleElementEventMap,
  AracnaFeedArticleDescriptionElementAttributes,
  AracnaFeedArticleDescriptionElementEventMap,
  AracnaFeedArticleLabelElementAttributes,
  AracnaFeedArticleLabelElementEventMap
} from '@aracna/web-components'
import {
  AracnaFeedElement,
  AracnaFeedArticleElement,
  AracnaFeedArticleDescriptionElement,
  AracnaFeedArticleLabelElement
} from '@aracna/web-components/elements/data/feed-element'

export const AracnaAracnaFeed: ElementComponent<AracnaFeedElement, AracnaAracnaFeedProps> = createBaseElementComponent<
  AracnaFeedElement,
  AracnaFeedElementAttributes,
  AracnaFeedElementEventMap
>('aracna-feed', AracnaFeedElement)

export const AracnaAracnaFeedArticle: ElementComponent<AracnaFeedArticleElement, AracnaAracnaFeedArticleProps> = createBaseElementComponent<
  AracnaFeedArticleElement,
  AracnaFeedArticleElementAttributes,
  AracnaFeedArticleElementEventMap
>('aracna-feed-article', AracnaFeedArticleElement)

export const AracnaAracnaFeedArticleDescription: ElementComponent<AracnaFeedArticleDescriptionElement, AracnaAracnaFeedArticleDescriptionProps> =
  createBaseElementComponent<AracnaFeedArticleDescriptionElement, AracnaFeedArticleDescriptionElementAttributes, AracnaFeedArticleDescriptionElementEventMap>(
    'aracna-feed-article-description',
    AracnaFeedArticleDescriptionElement
  )

export const AracnaAracnaFeedArticleLabel: ElementComponent<AracnaFeedArticleLabelElement, AracnaAracnaFeedArticleLabelProps> = createBaseElementComponent<
  AracnaFeedArticleLabelElement,
  AracnaFeedArticleLabelElementAttributes,
  AracnaFeedArticleLabelElementEventMap
>('aracna-feed-article-label', AracnaFeedArticleLabelElement)
