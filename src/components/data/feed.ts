import type { ElementComponent } from '@aracna/react'
import { createBaseElementComponent } from '../../functions/create-base-element-component.js'
import type { AracnaFeedProps, AracnaFeedArticleProps, AracnaFeedArticleDescriptionProps, AracnaFeedArticleLabelProps } from '../../definitions/props.js'
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

export const AracnaFeed: ElementComponent<AracnaFeedElement, AracnaFeedProps> = createBaseElementComponent<
  AracnaFeedElement,
  AracnaFeedElementAttributes,
  AracnaFeedElementEventMap
>('aracna-feed', AracnaFeedElement)

export const AracnaFeedArticle: ElementComponent<AracnaFeedArticleElement, AracnaFeedArticleProps> = createBaseElementComponent<
  AracnaFeedArticleElement,
  AracnaFeedArticleElementAttributes,
  AracnaFeedArticleElementEventMap
>('aracna-feed-article', AracnaFeedArticleElement)

export const AracnaFeedArticleDescription: ElementComponent<AracnaFeedArticleDescriptionElement, AracnaFeedArticleDescriptionProps> =
  createBaseElementComponent<AracnaFeedArticleDescriptionElement, AracnaFeedArticleDescriptionElementAttributes, AracnaFeedArticleDescriptionElementEventMap>(
    'aracna-feed-article-description',
    AracnaFeedArticleDescriptionElement
  )

export const AracnaFeedArticleLabel: ElementComponent<AracnaFeedArticleLabelElement, AracnaFeedArticleLabelProps> = createBaseElementComponent<
  AracnaFeedArticleLabelElement,
  AracnaFeedArticleLabelElementAttributes,
  AracnaFeedArticleLabelElementEventMap
>('aracna-feed-article-label', AracnaFeedArticleLabelElement)
