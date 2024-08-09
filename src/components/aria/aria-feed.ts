import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type {
  AracnaAracnaAriaFeedProps,
  AracnaAracnaAriaFeedArticleProps,
  AracnaAracnaAriaFeedArticleDescriptionProps,
  AracnaAracnaAriaFeedArticleLabelProps
} from '../../definitions/props.js'
import type {
  AracnaAriaFeedElementAttributes,
  AracnaAriaFeedElementEventMap,
  AracnaAriaFeedArticleElementAttributes,
  AracnaAriaFeedArticleElementEventMap,
  AracnaAriaFeedArticleDescriptionElementAttributes,
  AracnaAriaFeedArticleDescriptionElementEventMap,
  AracnaAriaFeedArticleLabelElementAttributes,
  AracnaAriaFeedArticleLabelElementEventMap
} from '@aracna/web-components'
import {
  AracnaAriaFeedElement,
  AracnaAriaFeedArticleElement,
  AracnaAriaFeedArticleDescriptionElement,
  AracnaAriaFeedArticleLabelElement
} from '@aracna/web-components/elements/aria/aria-feed-element'

export const AracnaAracnaAriaFeed: ElementComponent<AracnaAriaFeedElement, AracnaAracnaAriaFeedProps> = createBaseElementComponent<
  AracnaAriaFeedElement,
  AracnaAriaFeedElementAttributes,
  AracnaAriaFeedElementEventMap
>('aracna-aria-feed', AracnaAriaFeedElement)

export const AracnaAracnaAriaFeedArticle: ElementComponent<AracnaAriaFeedArticleElement, AracnaAracnaAriaFeedArticleProps> = createBaseElementComponent<
  AracnaAriaFeedArticleElement,
  AracnaAriaFeedArticleElementAttributes,
  AracnaAriaFeedArticleElementEventMap
>('aracna-aria-feed-article', AracnaAriaFeedArticleElement)

export const AracnaAracnaAriaFeedArticleDescription: ElementComponent<AracnaAriaFeedArticleDescriptionElement, AracnaAracnaAriaFeedArticleDescriptionProps> =
  createBaseElementComponent<
    AracnaAriaFeedArticleDescriptionElement,
    AracnaAriaFeedArticleDescriptionElementAttributes,
    AracnaAriaFeedArticleDescriptionElementEventMap
  >('aracna-aria-feed-article-description', AracnaAriaFeedArticleDescriptionElement)

export const AracnaAracnaAriaFeedArticleLabel: ElementComponent<AracnaAriaFeedArticleLabelElement, AracnaAracnaAriaFeedArticleLabelProps> =
  createBaseElementComponent<AracnaAriaFeedArticleLabelElement, AracnaAriaFeedArticleLabelElementAttributes, AracnaAriaFeedArticleLabelElementEventMap>(
    'aracna-aria-feed-article-label',
    AracnaAriaFeedArticleLabelElement
  )
