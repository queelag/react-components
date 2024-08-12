import type { ElementComponent } from '@aracna/react'
import { createBaseElementComponent } from '../../functions/create-base-element-component.js'
import type {
  AracnaAriaFeedProps,
  AracnaAriaFeedArticleProps,
  AracnaAriaFeedArticleDescriptionProps,
  AracnaAriaFeedArticleLabelProps
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

export const AracnaAriaFeed: ElementComponent<AracnaAriaFeedElement, AracnaAriaFeedProps> = createBaseElementComponent<
  AracnaAriaFeedElement,
  AracnaAriaFeedElementAttributes,
  AracnaAriaFeedElementEventMap
>('aracna-aria-feed', AracnaAriaFeedElement)

export const AracnaAriaFeedArticle: ElementComponent<AracnaAriaFeedArticleElement, AracnaAriaFeedArticleProps> = createBaseElementComponent<
  AracnaAriaFeedArticleElement,
  AracnaAriaFeedArticleElementAttributes,
  AracnaAriaFeedArticleElementEventMap
>('aracna-aria-feed-article', AracnaAriaFeedArticleElement)

export const AracnaAriaFeedArticleDescription: ElementComponent<AracnaAriaFeedArticleDescriptionElement, AracnaAriaFeedArticleDescriptionProps> =
  createBaseElementComponent<
    AracnaAriaFeedArticleDescriptionElement,
    AracnaAriaFeedArticleDescriptionElementAttributes,
    AracnaAriaFeedArticleDescriptionElementEventMap
  >('aracna-aria-feed-article-description', AracnaAriaFeedArticleDescriptionElement)

export const AracnaAriaFeedArticleLabel: ElementComponent<AracnaAriaFeedArticleLabelElement, AracnaAriaFeedArticleLabelProps> = createBaseElementComponent<
  AracnaAriaFeedArticleLabelElement,
  AracnaAriaFeedArticleLabelElementAttributes,
  AracnaAriaFeedArticleLabelElementEventMap
>('aracna-aria-feed-article-label', AracnaAriaFeedArticleLabelElement)
