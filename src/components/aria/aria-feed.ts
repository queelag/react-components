import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AriaFeedProps, AriaFeedArticleProps, AriaFeedArticleDescriptionProps, AriaFeedArticleLabelProps } from '@aracna/react'
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
import { AriaFeedElement, AriaFeedArticleElement, AriaFeedArticleDescriptionElement, AriaFeedArticleLabelElement } from '@aracna/web-components/aria/aria-feed'

export const AracnaAriaFeed: ElementComponent<AriaFeedElement, AriaFeedProps> = createBaseElementComponent<
  AriaFeedElement,
  AriaFeedElementAttributes,
  AriaFeedElementEventMap
>('aracna-aria-feed', AriaFeedElement)

export const AracnaAriaFeedArticle: ElementComponent<AriaFeedArticleElement, AriaFeedArticleProps> = createBaseElementComponent<
  AriaFeedArticleElement,
  AriaFeedArticleElementAttributes,
  AriaFeedArticleElementEventMap
>('aracna-aria-feed-article', AriaFeedArticleElement)

export const AracnaAriaFeedArticleDescription: ElementComponent<AriaFeedArticleDescriptionElement, AriaFeedArticleDescriptionProps> =
  createBaseElementComponent<AriaFeedArticleDescriptionElement, AriaFeedArticleDescriptionElementAttributes, AriaFeedArticleDescriptionElementEventMap>(
    'aracna-aria-feed-article-description',
    AriaFeedArticleDescriptionElement
  )

export const AracnaAriaFeedArticleLabel: ElementComponent<AriaFeedArticleLabelElement, AriaFeedArticleLabelProps> = createBaseElementComponent<
  AriaFeedArticleLabelElement,
  AriaFeedArticleLabelElementAttributes,
  AriaFeedArticleLabelElementEventMap
>('aracna-aria-feed-article-label', AriaFeedArticleLabelElement)
