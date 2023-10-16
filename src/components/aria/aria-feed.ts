import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAriaFeedProps, AracnaAriaFeedArticleProps, AracnaAriaFeedArticleDescriptionProps, AracnaAriaFeedArticleLabelProps } from '@aracna/react'
import type {
  AriaFeedElementAttributes,
  AriaFeedElementEventMap,
  AriaFeedArticleElementAttributes,
  AriaFeedArticleElementEventMap,
  AriaFeedArticleDescriptionElementAttributes,
  AriaFeedArticleDescriptionElementEventMap,
  AriaFeedArticleLabelElementAttributes,
  AriaFeedArticleLabelElementEventMap
} from '@aracna/web'
import {
  AriaFeedElement,
  AriaFeedArticleElement,
  AriaFeedArticleDescriptionElement,
  AriaFeedArticleLabelElement
} from '@aracna/web-components/elements/aria/aria-feed-element'

export const AracnaAriaFeed: ElementComponent<AriaFeedElement, AracnaAriaFeedProps> = createBaseElementComponent<
  AriaFeedElement,
  AriaFeedElementAttributes,
  AriaFeedElementEventMap
>('aracna-aria-feed', AriaFeedElement)

export const AracnaAriaFeedArticle: ElementComponent<AriaFeedArticleElement, AracnaAriaFeedArticleProps> = createBaseElementComponent<
  AriaFeedArticleElement,
  AriaFeedArticleElementAttributes,
  AriaFeedArticleElementEventMap
>('aracna-aria-feed-article', AriaFeedArticleElement)

export const AracnaAriaFeedArticleDescription: ElementComponent<AriaFeedArticleDescriptionElement, AracnaAriaFeedArticleDescriptionProps> =
  createBaseElementComponent<AriaFeedArticleDescriptionElement, AriaFeedArticleDescriptionElementAttributes, AriaFeedArticleDescriptionElementEventMap>(
    'aracna-aria-feed-article-description',
    AriaFeedArticleDescriptionElement
  )

export const AracnaAriaFeedArticleLabel: ElementComponent<AriaFeedArticleLabelElement, AracnaAriaFeedArticleLabelProps> = createBaseElementComponent<
  AriaFeedArticleLabelElement,
  AriaFeedArticleLabelElementAttributes,
  AriaFeedArticleLabelElementEventMap
>('aracna-aria-feed-article-label', AriaFeedArticleLabelElement)
