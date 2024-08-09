
import type {
  AracnaMeterElementAttributes,
  AracnaMeterElementEventMap,
  AracnaDialogElementAttributes,
  AracnaDialogElementEventMap,
  AracnaDialogDescriptionElementAttributes,
  AracnaDialogDescriptionElementEventMap,
  AracnaDialogLabelElementAttributes,
  AracnaDialogLabelElementEventMap,
  AracnaAlertElementAttributes,
  AracnaAlertElementEventMap,
  AracnaAlertDialogElementAttributes,
  AracnaAlertDialogElementEventMap,
  AracnaAlertDialogDescriptionElementAttributes,
  AracnaAlertDialogDescriptionElementEventMap,
  AracnaAlertDialogLabelElementAttributes,
  AracnaAlertDialogLabelElementEventMap,
  AracnaTooltipElementAttributes,
  AracnaTooltipElementEventMap,
  AracnaTooltipArrowElementAttributes,
  AracnaTooltipArrowElementEventMap,
  AracnaTooltipContentElementAttributes,
  AracnaTooltipContentElementEventMap,
  AracnaTooltipTriggerElementAttributes,
  AracnaTooltipTriggerElementEventMap,
  AracnaQrCodeElementAttributes,
  AracnaQrCodeElementEventMap,
  AracnaListElementAttributes,
  AracnaListElementEventMap,
  AracnaListItemElementAttributes,
  AracnaListItemElementEventMap,
  AracnaImageElementAttributes,
  AracnaImageElementEventMap,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap,
  AracnaFeedElementAttributes,
  AracnaFeedElementEventMap,
  AracnaFeedArticleElementAttributes,
  AracnaFeedArticleElementEventMap,
  AracnaFeedArticleDescriptionElementAttributes,
  AracnaFeedArticleDescriptionElementEventMap,
  AracnaFeedArticleLabelElementAttributes,
  AracnaFeedArticleLabelElementEventMap,
  AracnaChipElementAttributes,
  AracnaChipElementEventMap,
  AracnaCarouselElementAttributes,
  AracnaCarouselElementEventMap,
  AracnaCarouselNextSlideControlElementAttributes,
  AracnaCarouselNextSlideControlElementEventMap,
  AracnaCarouselPreviousSlideControlElementAttributes,
  AracnaCarouselPreviousSlideControlElementEventMap,
  AracnaCarouselRotationControlElementAttributes,
  AracnaCarouselRotationControlElementEventMap,
  AracnaCarouselSlideElementAttributes,
  AracnaCarouselSlideElementEventMap,
  AracnaCarouselSlidesElementAttributes,
  AracnaCarouselSlidesElementEventMap,
  AracnaCarouselTabElementAttributes,
  AracnaCarouselTabElementEventMap,
  AracnaCarouselTabsElementAttributes,
  AracnaCarouselTabsElementEventMap,
  AracnaBadgeElementAttributes,
  AracnaBadgeElementEventMap,
  AracnaAvatarElementAttributes,
  AracnaAvatarElementEventMap,
  AracnaDividerElementAttributes,
  AracnaDividerElementEventMap,
  AracnaAriaTooltipElementAttributes,
  AracnaAriaTooltipElementEventMap,
  AracnaAriaTooltipArrowElementAttributes,
  AracnaAriaTooltipArrowElementEventMap,
  AracnaAriaTooltipContentElementAttributes,
  AracnaAriaTooltipContentElementEventMap,
  AracnaAriaTooltipTriggerElementAttributes,
  AracnaAriaTooltipTriggerElementEventMap,
  AracnaAriaTabsElementAttributes,
  AracnaAriaTabsElementEventMap,
  AracnaAriaTabsPanelElementAttributes,
  AracnaAriaTabsPanelElementEventMap,
  AracnaAriaTabsTabElementAttributes,
  AracnaAriaTabsTabElementEventMap,
  AracnaAriaSwitchElementAttributes,
  AracnaAriaSwitchElementEventMap,
  AracnaAriaSliderElementAttributes,
  AracnaAriaSliderElementEventMap,
  AracnaAriaSliderThumbElementAttributes,
  AracnaAriaSliderThumbElementEventMap,
  AracnaAriaRadioButtonElementAttributes,
  AracnaAriaRadioButtonElementEventMap,
  AracnaAriaRadioGroupElementAttributes,
  AracnaAriaRadioGroupElementEventMap,
  AracnaAriaMeterElementAttributes,
  AracnaAriaMeterElementEventMap,
  AracnaAriaMenuElementAttributes,
  AracnaAriaMenuElementEventMap,
  AracnaAriaMenuButtonElementAttributes,
  AracnaAriaMenuButtonElementEventMap,
  AracnaAriaMenuItemElementAttributes,
  AracnaAriaMenuItemElementEventMap,
  AracnaAriaMenuSubMenuElementAttributes,
  AracnaAriaMenuSubMenuElementEventMap,
  AracnaAriaListElementAttributes,
  AracnaAriaListElementEventMap,
  AracnaAriaListItemElementAttributes,
  AracnaAriaListItemElementEventMap,
  AracnaAriaListBoxElementAttributes,
  AracnaAriaListBoxElementEventMap,
  AracnaAriaListBoxOptionElementAttributes,
  AracnaAriaListBoxOptionElementEventMap,
  AracnaAriaLinkElementAttributes,
  AracnaAriaLinkElementEventMap,
  AracnaAriaFeedElementAttributes,
  AracnaAriaFeedElementEventMap,
  AracnaAriaFeedArticleElementAttributes,
  AracnaAriaFeedArticleElementEventMap,
  AracnaAriaFeedArticleDescriptionElementAttributes,
  AracnaAriaFeedArticleDescriptionElementEventMap,
  AracnaAriaFeedArticleLabelElementAttributes,
  AracnaAriaFeedArticleLabelElementEventMap,
  AracnaAriaDisclosureElementAttributes,
  AracnaAriaDisclosureElementEventMap,
  AracnaAriaDisclosureButtonElementAttributes,
  AracnaAriaDisclosureButtonElementEventMap,
  AracnaAriaDisclosurePanelElementAttributes,
  AracnaAriaDisclosurePanelElementEventMap,
  AracnaAriaDisclosureSectionElementAttributes,
  AracnaAriaDisclosureSectionElementEventMap,
  AracnaAriaDialogElementAttributes,
  AracnaAriaDialogElementEventMap,
  AracnaAriaDialogDescriptionElementAttributes,
  AracnaAriaDialogDescriptionElementEventMap,
  AracnaAriaDialogLabelElementAttributes,
  AracnaAriaDialogLabelElementEventMap,
  AracnaAriaComboBoxElementAttributes,
  AracnaAriaComboBoxElementEventMap,
  AracnaAriaComboBoxButtonElementAttributes,
  AracnaAriaComboBoxButtonElementEventMap,
  AracnaAriaComboBoxGroupElementAttributes,
  AracnaAriaComboBoxGroupElementEventMap,
  AracnaAriaComboBoxInputElementAttributes,
  AracnaAriaComboBoxInputElementEventMap,
  AracnaAriaComboBoxListElementAttributes,
  AracnaAriaComboBoxListElementEventMap,
  AracnaAriaComboBoxOptionElementAttributes,
  AracnaAriaComboBoxOptionElementEventMap,
  AracnaAriaCheckBoxElementAttributes,
  AracnaAriaCheckBoxElementEventMap,
  AracnaAriaCarouselElementAttributes,
  AracnaAriaCarouselElementEventMap,
  AracnaAriaCarouselNextSlideControlElementAttributes,
  AracnaAriaCarouselNextSlideControlElementEventMap,
  AracnaAriaCarouselPreviousSlideControlElementAttributes,
  AracnaAriaCarouselPreviousSlideControlElementEventMap,
  AracnaAriaCarouselRotationControlElementAttributes,
  AracnaAriaCarouselRotationControlElementEventMap,
  AracnaAriaCarouselSlideElementAttributes,
  AracnaAriaCarouselSlideElementEventMap,
  AracnaAriaCarouselSlidesElementAttributes,
  AracnaAriaCarouselSlidesElementEventMap,
  AracnaAriaCarouselTabElementAttributes,
  AracnaAriaCarouselTabElementEventMap,
  AracnaAriaCarouselTabsElementAttributes,
  AracnaAriaCarouselTabsElementEventMap,
  AracnaAriaButtonElementAttributes,
  AracnaAriaButtonElementEventMap,
  AracnaAriaBreadcrumbElementAttributes,
  AracnaAriaBreadcrumbElementEventMap,
  AracnaAriaBreadcrumbItemElementAttributes,
  AracnaAriaBreadcrumbItemElementEventMap,
  AracnaAriaBreadcrumbListElementAttributes,
  AracnaAriaBreadcrumbListElementEventMap,
  AracnaAriaAlertElementAttributes,
  AracnaAriaAlertElementEventMap,
  AracnaAriaAlertDialogElementAttributes,
  AracnaAriaAlertDialogElementEventMap,
  AracnaAriaAlertDialogDescriptionElementAttributes,
  AracnaAriaAlertDialogDescriptionElementEventMap,
  AracnaAriaAlertDialogLabelElementAttributes,
  AracnaAriaAlertDialogLabelElementEventMap,
  AracnaAriaAccordionElementAttributes,
  AracnaAriaAccordionElementEventMap,
  AracnaAriaAccordionButtonElementAttributes,
  AracnaAriaAccordionButtonElementEventMap,
  AracnaAriaAccordionHeaderElementAttributes,
  AracnaAriaAccordionHeaderElementEventMap,
  AracnaAriaAccordionPanelElementAttributes,
  AracnaAriaAccordionPanelElementEventMap,
  AracnaAriaAccordionSectionElementAttributes,
  AracnaAriaAccordionSectionElementEventMap,
  AracnaTabsElementAttributes,
  AracnaTabsElementEventMap,
  AracnaTabsPanelElementAttributes,
  AracnaTabsPanelElementEventMap,
  AracnaTabsTabElementAttributes,
  AracnaTabsTabElementEventMap,
  AracnaNavigationRailElementAttributes,
  AracnaNavigationRailElementEventMap,
  AracnaNavigationRailItemElementAttributes,
  AracnaNavigationRailItemElementEventMap,
  AracnaNavigationBarElementAttributes,
  AracnaNavigationBarElementEventMap,
  AracnaNavigationBarItemElementAttributes,
  AracnaNavigationBarItemElementEventMap,
  AracnaMenuElementAttributes,
  AracnaMenuElementEventMap,
  AracnaMenuButtonElementAttributes,
  AracnaMenuButtonElementEventMap,
  AracnaMenuItemElementAttributes,
  AracnaMenuItemElementEventMap,
  AracnaMenuSubMenuElementAttributes,
  AracnaMenuSubMenuElementEventMap,
  AracnaBreadcrumbElementAttributes,
  AracnaBreadcrumbElementEventMap,
  AracnaBreadcrumbItemElementAttributes,
  AracnaBreadcrumbItemElementEventMap,
  AracnaBreadcrumbListElementAttributes,
  AracnaBreadcrumbListElementEventMap,
  AracnaDisclosureElementAttributes,
  AracnaDisclosureElementEventMap,
  AracnaDisclosureButtonElementAttributes,
  AracnaDisclosureButtonElementEventMap,
  AracnaDisclosurePanelElementAttributes,
  AracnaDisclosurePanelElementEventMap,
  AracnaDisclosureSectionElementAttributes,
  AracnaDisclosureSectionElementEventMap,
  AracnaCardElementAttributes,
  AracnaCardElementEventMap,
  AracnaAccordionElementAttributes,
  AracnaAccordionElementEventMap,
  AracnaAccordionButtonElementAttributes,
  AracnaAccordionButtonElementEventMap,
  AracnaAccordionHeaderElementAttributes,
  AracnaAccordionHeaderElementEventMap,
  AracnaAccordionPanelElementAttributes,
  AracnaAccordionPanelElementEventMap,
  AracnaAccordionSectionElementAttributes,
  AracnaAccordionSectionElementEventMap,
  AracnaTextAreaElementAttributes,
  AracnaTextAreaElementEventMap,
  AracnaSwitchElementAttributes,
  AracnaSwitchElementEventMap,
  AracnaSliderElementAttributes,
  AracnaSliderElementEventMap,
  AracnaSliderThumbElementAttributes,
  AracnaSliderThumbElementEventMap,
  AracnaSelectElementAttributes,
  AracnaSelectElementEventMap,
  AracnaSelectButtonElementAttributes,
  AracnaSelectButtonElementEventMap,
  AracnaSelectGroupElementAttributes,
  AracnaSelectGroupElementEventMap,
  AracnaSelectInputElementAttributes,
  AracnaSelectInputElementEventMap,
  AracnaSelectListElementAttributes,
  AracnaSelectListElementEventMap,
  AracnaSelectOptionElementAttributes,
  AracnaSelectOptionElementEventMap,
  AracnaRadioGroupElementAttributes,
  AracnaRadioGroupElementEventMap,
  AracnaRadioButtonElementAttributes,
  AracnaRadioButtonElementEventMap,
  AracnaListBoxElementAttributes,
  AracnaListBoxElementEventMap,
  AracnaListBoxOptionElementAttributes,
  AracnaListBoxOptionElementEventMap,
  AracnaInputFileElementAttributes,
  AracnaInputFileElementEventMap,
  AracnaInputElementAttributes,
  AracnaInputElementEventMap,
  AracnaFormElementAttributes,
  AracnaFormElementEventMap,
  AracnaCheckBoxElementAttributes,
  AracnaCheckBoxElementEventMap,
  AracnaButtonGroupElementAttributes,
  AracnaButtonGroupElementEventMap,
  AracnaButtonElementAttributes,
  AracnaButtonElementEventMap
} from '@aracna/web-components'
import type { AracnaMeterElement } from '@aracna/web-components/elements/feedback/meter-element'
import type { AracnaDialogElement, AracnaDialogDescriptionElement, AracnaDialogLabelElement } from '@aracna/web-components/elements/feedback/dialog-element'
import type { AracnaAlertElement } from '@aracna/web-components/elements/feedback/alert-element'
import type {
  AracnaAlertDialogElement,
  AracnaAlertDialogDescriptionElement,
  AracnaAlertDialogLabelElement
} from '@aracna/web-components/elements/feedback/alert-dialog-element'
import type {
  AracnaTooltipElement,
  AracnaTooltipArrowElement,
  AracnaTooltipContentElement,
  AracnaTooltipTriggerElement
} from '@aracna/web-components/elements/data/tooltip-element'
import type { AracnaQrCodeElement } from '@aracna/web-components/elements/data/qr-code-element'
import type { AracnaListElement, AracnaListItemElement } from '@aracna/web-components/elements/data/list-element'
import type { AracnaImageElement } from '@aracna/web-components/elements/data/image-element'
import type { AracnaIconElement } from '@aracna/web-components/elements/data/icon-element'
import type {
  AracnaFeedElement,
  AracnaFeedArticleElement,
  AracnaFeedArticleDescriptionElement,
  AracnaFeedArticleLabelElement
} from '@aracna/web-components/elements/data/feed-element'
import type { AracnaChipElement } from '@aracna/web-components/elements/data/chip-element'
import type {
  AracnaCarouselElement,
  AracnaCarouselNextSlideControlElement,
  AracnaCarouselPreviousSlideControlElement,
  AracnaCarouselRotationControlElement,
  AracnaCarouselSlideElement,
  AracnaCarouselSlidesElement,
  AracnaCarouselTabElement,
  AracnaCarouselTabsElement
} from '@aracna/web-components/elements/data/carousel-element'
import type { AracnaBadgeElement } from '@aracna/web-components/elements/data/badge-element'
import type { AracnaAvatarElement } from '@aracna/web-components/elements/data/avatar-element'
import type { AracnaDividerElement } from '@aracna/web-components/elements/layout/divider-element'
import type {
  AracnaAriaTooltipElement,
  AracnaAriaTooltipArrowElement,
  AracnaAriaTooltipContentElement,
  AracnaAriaTooltipTriggerElement
} from '@aracna/web-components/elements/aria/aria-tooltip-element'
import type { AracnaAriaTabsElement, AracnaAriaTabsPanelElement, AracnaAriaTabsTabElement } from '@aracna/web-components/elements/aria/aria-tabs-element'
import type { AracnaAriaSwitchElement } from '@aracna/web-components/elements/aria/aria-switch-element'
import type { AracnaAriaSliderElement, AracnaAriaSliderThumbElement } from '@aracna/web-components/elements/aria/aria-slider-element'
import type { AracnaAriaRadioButtonElement, AracnaAriaRadioGroupElement } from '@aracna/web-components/elements/aria/aria-radio-group-element'
import type { AracnaAriaMeterElement } from '@aracna/web-components/elements/aria/aria-meter-element'
import type {
  AracnaAriaMenuElement,
  AracnaAriaMenuButtonElement,
  AracnaAriaMenuItemElement,
  AracnaAriaMenuSubMenuElement
} from '@aracna/web-components/elements/aria/aria-menu-element'
import type { AracnaAriaListElement, AracnaAriaListItemElement } from '@aracna/web-components/elements/aria/aria-list-element'
import type { AracnaAriaListBoxElement, AracnaAriaListBoxOptionElement } from '@aracna/web-components/elements/aria/aria-list-box-element'
import type { AracnaAriaLinkElement } from '@aracna/web-components/elements/aria/aria-link-element'
import type {
  AracnaAriaFeedElement,
  AracnaAriaFeedArticleElement,
  AracnaAriaFeedArticleDescriptionElement,
  AracnaAriaFeedArticleLabelElement
} from '@aracna/web-components/elements/aria/aria-feed-element'
import type {
  AracnaAriaDisclosureElement,
  AracnaAriaDisclosureButtonElement,
  AracnaAriaDisclosurePanelElement,
  AracnaAriaDisclosureSectionElement
} from '@aracna/web-components/elements/aria/aria-disclosure-element'
import type {
  AracnaAriaDialogElement,
  AracnaAriaDialogDescriptionElement,
  AracnaAriaDialogLabelElement
} from '@aracna/web-components/elements/aria/aria-dialog-element'
import type {
  AracnaAriaComboBoxElement,
  AracnaAriaComboBoxButtonElement,
  AracnaAriaComboBoxGroupElement,
  AracnaAriaComboBoxInputElement,
  AracnaAriaComboBoxListElement,
  AracnaAriaComboBoxOptionElement
} from '@aracna/web-components/elements/aria/aria-combo-box-element'
import type { AracnaAriaCheckBoxElement } from '@aracna/web-components/elements/aria/aria-check-box-element'
import type {
  AracnaAriaCarouselElement,
  AracnaAriaCarouselNextSlideControlElement,
  AracnaAriaCarouselPreviousSlideControlElement,
  AracnaAriaCarouselRotationControlElement,
  AracnaAriaCarouselSlideElement,
  AracnaAriaCarouselSlidesElement,
  AracnaAriaCarouselTabElement,
  AracnaAriaCarouselTabsElement
} from '@aracna/web-components/elements/aria/aria-carousel-element'
import type { AracnaAriaButtonElement } from '@aracna/web-components/elements/aria/aria-button-element'
import type {
  AracnaAriaBreadcrumbElement,
  AracnaAriaBreadcrumbItemElement,
  AracnaAriaBreadcrumbListElement
} from '@aracna/web-components/elements/aria/aria-breadcrumb-element'
import type { AracnaAriaAlertElement } from '@aracna/web-components/elements/aria/aria-alert-element'
import type {
  AracnaAriaAlertDialogElement,
  AracnaAriaAlertDialogDescriptionElement,
  AracnaAriaAlertDialogLabelElement
} from '@aracna/web-components/elements/aria/aria-alert-dialog-element'
import type {
  AracnaAriaAccordionElement,
  AracnaAriaAccordionButtonElement,
  AracnaAriaAccordionHeaderElement,
  AracnaAriaAccordionPanelElement,
  AracnaAriaAccordionSectionElement
} from '@aracna/web-components/elements/aria/aria-accordion-element'
import type { AracnaTabsElement, AracnaTabsPanelElement, AracnaTabsTabElement } from '@aracna/web-components/elements/navigation/tabs-element'
import type { AracnaNavigationRailElement, AracnaNavigationRailItemElement } from '@aracna/web-components/elements/navigation/navigation-rail-element'
import type { AracnaNavigationBarElement, AracnaNavigationBarItemElement } from '@aracna/web-components/elements/navigation/navigation-bar-element'
import type {
  AracnaMenuElement,
  AracnaMenuButtonElement,
  AracnaMenuItemElement,
  AracnaMenuSubMenuElement
} from '@aracna/web-components/elements/navigation/menu-element'
import type {
  AracnaBreadcrumbElement,
  AracnaBreadcrumbItemElement,
  AracnaBreadcrumbListElement
} from '@aracna/web-components/elements/navigation/breadcrumb-element'
import type {
  AracnaDisclosureElement,
  AracnaDisclosureButtonElement,
  AracnaDisclosurePanelElement,
  AracnaDisclosureSectionElement
} from '@aracna/web-components/elements/surface/disclosure-element'
import type { AracnaCardElement } from '@aracna/web-components/elements/surface/card-element'
import type {
  AracnaAccordionElement,
  AracnaAccordionButtonElement,
  AracnaAccordionHeaderElement,
  AracnaAccordionPanelElement,
  AracnaAccordionSectionElement
} from '@aracna/web-components/elements/surface/accordion-element'
import type { AracnaTextAreaElement } from '@aracna/web-components/elements/input/text-area-element'
import type { AracnaSwitchElement } from '@aracna/web-components/elements/input/switch-element'
import type { AracnaSliderElement, AracnaSliderThumbElement } from '@aracna/web-components/elements/input/slider-element'
import type {
  AracnaSelectElement,
  AracnaSelectButtonElement,
  AracnaSelectGroupElement,
  AracnaSelectInputElement,
  AracnaSelectListElement,
  AracnaSelectOptionElement
} from '@aracna/web-components/elements/input/select-element'
import type { AracnaRadioGroupElement, AracnaRadioButtonElement } from '@aracna/web-components/elements/input/radio-group-element'
import type { AracnaListBoxElement, AracnaListBoxOptionElement } from '@aracna/web-components/elements/input/list-box-element'
import type { AracnaInputFileElement } from '@aracna/web-components/elements/input/input-file-element'
import type { AracnaInputElement } from '@aracna/web-components/elements/input/input-element'
import type { AracnaFormElement } from '@aracna/web-components/elements/input/form-element'
import type { AracnaCheckBoxElement } from '@aracna/web-components/elements/input/check-box-element'
import type { AracnaButtonGroupElement } from '@aracna/web-components/elements/input/button-group-element'
import type { AracnaButtonElement } from '@aracna/web-components/elements/input/button-element'
import type { ElementComponentProps } from '@aracna/react'

export type AracnaAracnaMeterProps = ElementComponentProps<AracnaMeterElement, AracnaMeterElementAttributes, AracnaMeterElementEventMap>

export type AracnaAracnaDialogProps = ElementComponentProps<AracnaDialogElement, AracnaDialogElementAttributes, AracnaDialogElementEventMap>
export type AracnaAracnaDialogDescriptionProps = ElementComponentProps<
  AracnaDialogDescriptionElement,
  AracnaDialogDescriptionElementAttributes,
  AracnaDialogDescriptionElementEventMap
>
export type AracnaAracnaDialogLabelProps = ElementComponentProps<AracnaDialogLabelElement, AracnaDialogLabelElementAttributes, AracnaDialogLabelElementEventMap>

export type AracnaAracnaAlertProps = ElementComponentProps<AracnaAlertElement, AracnaAlertElementAttributes, AracnaAlertElementEventMap>

export type AracnaAracnaAlertDialogProps = ElementComponentProps<AracnaAlertDialogElement, AracnaAlertDialogElementAttributes, AracnaAlertDialogElementEventMap>
export type AracnaAracnaAlertDialogDescriptionProps = ElementComponentProps<
  AracnaAlertDialogDescriptionElement,
  AracnaAlertDialogDescriptionElementAttributes,
  AracnaAlertDialogDescriptionElementEventMap
>
export type AracnaAracnaAlertDialogLabelProps = ElementComponentProps<
  AracnaAlertDialogLabelElement,
  AracnaAlertDialogLabelElementAttributes,
  AracnaAlertDialogLabelElementEventMap
>

export type AracnaAracnaTooltipProps = ElementComponentProps<AracnaTooltipElement, AracnaTooltipElementAttributes, AracnaTooltipElementEventMap>
export type AracnaAracnaTooltipArrowProps = ElementComponentProps<
  AracnaTooltipArrowElement,
  AracnaTooltipArrowElementAttributes,
  AracnaTooltipArrowElementEventMap
>
export type AracnaAracnaTooltipContentProps = ElementComponentProps<
  AracnaTooltipContentElement,
  AracnaTooltipContentElementAttributes,
  AracnaTooltipContentElementEventMap
>
export type AracnaAracnaTooltipTriggerProps = ElementComponentProps<
  AracnaTooltipTriggerElement,
  AracnaTooltipTriggerElementAttributes,
  AracnaTooltipTriggerElementEventMap
>

export type AracnaAracnaQrCodeProps = ElementComponentProps<AracnaQrCodeElement, AracnaQrCodeElementAttributes, AracnaQrCodeElementEventMap>

export type AracnaAracnaListProps<T = any> = ElementComponentProps<AracnaListElement, AracnaListElementAttributes<T>, AracnaListElementEventMap>
export type AracnaAracnaListItemProps = ElementComponentProps<AracnaListItemElement, AracnaListItemElementAttributes, AracnaListItemElementEventMap>

export type AracnaAracnaImageProps = ElementComponentProps<AracnaImageElement, AracnaImageElementAttributes, AracnaImageElementEventMap>

export type AracnaAracnaIconProps = ElementComponentProps<AracnaIconElement, AracnaIconElementAttributes, AracnaIconElementEventMap>

export type AracnaAracnaFeedProps<T = any> = ElementComponentProps<AracnaFeedElement, AracnaFeedElementAttributes<T>, AracnaFeedElementEventMap>
export type AracnaAracnaFeedArticleProps = ElementComponentProps<AracnaFeedArticleElement, AracnaFeedArticleElementAttributes, AracnaFeedArticleElementEventMap>
export type AracnaAracnaFeedArticleDescriptionProps = ElementComponentProps<
  AracnaFeedArticleDescriptionElement,
  AracnaFeedArticleDescriptionElementAttributes,
  AracnaFeedArticleDescriptionElementEventMap
>
export type AracnaAracnaFeedArticleLabelProps = ElementComponentProps<
  AracnaFeedArticleLabelElement,
  AracnaFeedArticleLabelElementAttributes,
  AracnaFeedArticleLabelElementEventMap
>

export type AracnaAracnaChipProps = ElementComponentProps<AracnaChipElement, AracnaChipElementAttributes, AracnaChipElementEventMap>

export type AracnaAracnaCarouselProps<T = any> = ElementComponentProps<AracnaCarouselElement, AracnaCarouselElementAttributes<T>, AracnaCarouselElementEventMap>
export type AracnaAracnaCarouselNextSlideControlProps = ElementComponentProps<
  AracnaCarouselNextSlideControlElement,
  AracnaCarouselNextSlideControlElementAttributes,
  AracnaCarouselNextSlideControlElementEventMap
>
export type AracnaAracnaCarouselPreviousSlideControlProps = ElementComponentProps<
  AracnaCarouselPreviousSlideControlElement,
  AracnaCarouselPreviousSlideControlElementAttributes,
  AracnaCarouselPreviousSlideControlElementEventMap
>
export type AracnaAracnaCarouselRotationControlProps = ElementComponentProps<
  AracnaCarouselRotationControlElement,
  AracnaCarouselRotationControlElementAttributes,
  AracnaCarouselRotationControlElementEventMap
>
export type AracnaAracnaCarouselSlideProps = ElementComponentProps<
  AracnaCarouselSlideElement,
  AracnaCarouselSlideElementAttributes,
  AracnaCarouselSlideElementEventMap
>
export type AracnaAracnaCarouselSlidesProps = ElementComponentProps<
  AracnaCarouselSlidesElement,
  AracnaCarouselSlidesElementAttributes,
  AracnaCarouselSlidesElementEventMap
>
export type AracnaAracnaCarouselTabProps = ElementComponentProps<AracnaCarouselTabElement, AracnaCarouselTabElementAttributes, AracnaCarouselTabElementEventMap>
export type AracnaAracnaCarouselTabsProps = ElementComponentProps<
  AracnaCarouselTabsElement,
  AracnaCarouselTabsElementAttributes,
  AracnaCarouselTabsElementEventMap
>

export type AracnaAracnaBadgeProps = ElementComponentProps<AracnaBadgeElement, AracnaBadgeElementAttributes, AracnaBadgeElementEventMap>

export type AracnaAracnaAvatarProps = ElementComponentProps<AracnaAvatarElement, AracnaAvatarElementAttributes, AracnaAvatarElementEventMap>

export type AracnaAracnaDividerProps = ElementComponentProps<AracnaDividerElement, AracnaDividerElementAttributes, AracnaDividerElementEventMap>

export type AracnaAracnaAriaTooltipProps = ElementComponentProps<AracnaAriaTooltipElement, AracnaAriaTooltipElementAttributes, AracnaAriaTooltipElementEventMap>
export type AracnaAracnaAriaTooltipArrowProps = ElementComponentProps<
  AracnaAriaTooltipArrowElement,
  AracnaAriaTooltipArrowElementAttributes,
  AracnaAriaTooltipArrowElementEventMap
>
export type AracnaAracnaAriaTooltipContentProps = ElementComponentProps<
  AracnaAriaTooltipContentElement,
  AracnaAriaTooltipContentElementAttributes,
  AracnaAriaTooltipContentElementEventMap
>
export type AracnaAracnaAriaTooltipTriggerProps = ElementComponentProps<
  AracnaAriaTooltipTriggerElement,
  AracnaAriaTooltipTriggerElementAttributes,
  AracnaAriaTooltipTriggerElementEventMap
>

export type AracnaAracnaAriaTabsProps = ElementComponentProps<AracnaAriaTabsElement, AracnaAriaTabsElementAttributes, AracnaAriaTabsElementEventMap>
export type AracnaAracnaAriaTabsPanelProps = ElementComponentProps<
  AracnaAriaTabsPanelElement,
  AracnaAriaTabsPanelElementAttributes,
  AracnaAriaTabsPanelElementEventMap
>
export type AracnaAracnaAriaTabsTabProps = ElementComponentProps<AracnaAriaTabsTabElement, AracnaAriaTabsTabElementAttributes, AracnaAriaTabsTabElementEventMap>

export type AracnaAracnaAriaSwitchProps = ElementComponentProps<AracnaAriaSwitchElement, AracnaAriaSwitchElementAttributes, AracnaAriaSwitchElementEventMap>

export type AracnaAracnaAriaSliderProps = ElementComponentProps<AracnaAriaSliderElement, AracnaAriaSliderElementAttributes, AracnaAriaSliderElementEventMap>
export type AracnaAracnaAriaSliderThumbProps = ElementComponentProps<
  AracnaAriaSliderThumbElement,
  AracnaAriaSliderThumbElementAttributes,
  AracnaAriaSliderThumbElementEventMap
>

export type AracnaAracnaAriaRadioButtonProps = ElementComponentProps<
  AracnaAriaRadioButtonElement,
  AracnaAriaRadioButtonElementAttributes,
  AracnaAriaRadioButtonElementEventMap
>
export type AracnaAracnaAriaRadioGroupProps = ElementComponentProps<
  AracnaAriaRadioGroupElement,
  AracnaAriaRadioGroupElementAttributes,
  AracnaAriaRadioGroupElementEventMap
>

export type AracnaAracnaAriaMeterProps = ElementComponentProps<AracnaAriaMeterElement, AracnaAriaMeterElementAttributes, AracnaAriaMeterElementEventMap>

export type AracnaAracnaAriaMenuProps = ElementComponentProps<
  AracnaAriaMenuElement,
  AracnaAriaMenuElementAttributes<AracnaAriaMenuItemElement>,
  AracnaAriaMenuElementEventMap
>
export type AracnaAracnaAriaMenuButtonProps = ElementComponentProps<
  AracnaAriaMenuButtonElement,
  AracnaAriaMenuButtonElementAttributes,
  AracnaAriaMenuButtonElementEventMap
>
export type AracnaAracnaAriaMenuItemProps = ElementComponentProps<
  AracnaAriaMenuItemElement,
  AracnaAriaMenuItemElementAttributes,
  AracnaAriaMenuItemElementEventMap
>
export type AracnaAracnaAriaMenuSubMenuProps = ElementComponentProps<
  AracnaAriaMenuSubMenuElement,
  AracnaAriaMenuSubMenuElementAttributes,
  AracnaAriaMenuSubMenuElementEventMap
>

export type AracnaAracnaAriaListProps = ElementComponentProps<AracnaAriaListElement, AracnaAriaListElementAttributes, AracnaAriaListElementEventMap>
export type AracnaAracnaAriaListItemProps = ElementComponentProps<
  AracnaAriaListItemElement,
  AracnaAriaListItemElementAttributes,
  AracnaAriaListItemElementEventMap
>

export type AracnaAracnaAriaListBoxProps = ElementComponentProps<
  AracnaAriaListBoxElement,
  AracnaAriaListBoxElementAttributes<AracnaAriaListBoxOptionElement>,
  AracnaAriaListBoxElementEventMap
>
export type AracnaAracnaAriaListBoxOptionProps = ElementComponentProps<
  AracnaAriaListBoxOptionElement,
  AracnaAriaListBoxOptionElementAttributes,
  AracnaAriaListBoxOptionElementEventMap
>

export type AracnaAracnaAriaLinkProps = ElementComponentProps<AracnaAriaLinkElement, AracnaAriaLinkElementAttributes, AracnaAriaLinkElementEventMap>

export type AracnaAracnaAriaFeedProps = ElementComponentProps<AracnaAriaFeedElement, AracnaAriaFeedElementAttributes, AracnaAriaFeedElementEventMap>
export type AracnaAracnaAriaFeedArticleProps = ElementComponentProps<
  AracnaAriaFeedArticleElement,
  AracnaAriaFeedArticleElementAttributes,
  AracnaAriaFeedArticleElementEventMap
>
export type AracnaAracnaAriaFeedArticleDescriptionProps = ElementComponentProps<
  AracnaAriaFeedArticleDescriptionElement,
  AracnaAriaFeedArticleDescriptionElementAttributes,
  AracnaAriaFeedArticleDescriptionElementEventMap
>
export type AracnaAracnaAriaFeedArticleLabelProps = ElementComponentProps<
  AracnaAriaFeedArticleLabelElement,
  AracnaAriaFeedArticleLabelElementAttributes,
  AracnaAriaFeedArticleLabelElementEventMap
>

export type AracnaAracnaAriaDisclosureProps = ElementComponentProps<
  AracnaAriaDisclosureElement,
  AracnaAriaDisclosureElementAttributes,
  AracnaAriaDisclosureElementEventMap
>
export type AracnaAracnaAriaDisclosureButtonProps = ElementComponentProps<
  AracnaAriaDisclosureButtonElement,
  AracnaAriaDisclosureButtonElementAttributes,
  AracnaAriaDisclosureButtonElementEventMap
>
export type AracnaAracnaAriaDisclosurePanelProps = ElementComponentProps<
  AracnaAriaDisclosurePanelElement,
  AracnaAriaDisclosurePanelElementAttributes,
  AracnaAriaDisclosurePanelElementEventMap
>
export type AracnaAracnaAriaDisclosureSectionProps = ElementComponentProps<
  AracnaAriaDisclosureSectionElement,
  AracnaAriaDisclosureSectionElementAttributes,
  AracnaAriaDisclosureSectionElementEventMap
>

export type AracnaAracnaAriaDialogProps = ElementComponentProps<AracnaAriaDialogElement, AracnaAriaDialogElementAttributes, AracnaAriaDialogElementEventMap>
export type AracnaAracnaAriaDialogDescriptionProps = ElementComponentProps<
  AracnaAriaDialogDescriptionElement,
  AracnaAriaDialogDescriptionElementAttributes,
  AracnaAriaDialogDescriptionElementEventMap
>
export type AracnaAracnaAriaDialogLabelProps = ElementComponentProps<
  AracnaAriaDialogLabelElement,
  AracnaAriaDialogLabelElementAttributes,
  AracnaAriaDialogLabelElementEventMap
>

export type AracnaAracnaAriaComboBoxProps = ElementComponentProps<
  AracnaAriaComboBoxElement,
  AracnaAriaComboBoxElementAttributes<AracnaAriaComboBoxOptionElement>,
  AracnaAriaComboBoxElementEventMap
>
export type AracnaAracnaAriaComboBoxButtonProps = ElementComponentProps<
  AracnaAriaComboBoxButtonElement,
  AracnaAriaComboBoxButtonElementAttributes,
  AracnaAriaComboBoxButtonElementEventMap
>
export type AracnaAracnaAriaComboBoxGroupProps = ElementComponentProps<
  AracnaAriaComboBoxGroupElement,
  AracnaAriaComboBoxGroupElementAttributes,
  AracnaAriaComboBoxGroupElementEventMap
>
export type AracnaAracnaAriaComboBoxInputProps = ElementComponentProps<
  AracnaAriaComboBoxInputElement,
  AracnaAriaComboBoxInputElementAttributes,
  AracnaAriaComboBoxInputElementEventMap
>
export type AracnaAracnaAriaComboBoxListProps = ElementComponentProps<
  AracnaAriaComboBoxListElement,
  AracnaAriaComboBoxListElementAttributes,
  AracnaAriaComboBoxListElementEventMap
>
export type AracnaAracnaAriaComboBoxOptionProps = ElementComponentProps<
  AracnaAriaComboBoxOptionElement,
  AracnaAriaComboBoxOptionElementAttributes,
  AracnaAriaComboBoxOptionElementEventMap
>

export type AracnaAracnaAriaCheckBoxProps = ElementComponentProps<
  AracnaAriaCheckBoxElement,
  AracnaAriaCheckBoxElementAttributes,
  AracnaAriaCheckBoxElementEventMap
>

export type AracnaAracnaAriaCarouselProps = ElementComponentProps<
  AracnaAriaCarouselElement,
  AracnaAriaCarouselElementAttributes,
  AracnaAriaCarouselElementEventMap
>
export type AracnaAracnaAriaCarouselNextSlideControlProps = ElementComponentProps<
  AracnaAriaCarouselNextSlideControlElement,
  AracnaAriaCarouselNextSlideControlElementAttributes,
  AracnaAriaCarouselNextSlideControlElementEventMap
>
export type AracnaAracnaAriaCarouselPreviousSlideControlProps = ElementComponentProps<
  AracnaAriaCarouselPreviousSlideControlElement,
  AracnaAriaCarouselPreviousSlideControlElementAttributes,
  AracnaAriaCarouselPreviousSlideControlElementEventMap
>
export type AracnaAracnaAriaCarouselRotationControlProps = ElementComponentProps<
  AracnaAriaCarouselRotationControlElement,
  AracnaAriaCarouselRotationControlElementAttributes,
  AracnaAriaCarouselRotationControlElementEventMap
>
export type AracnaAracnaAriaCarouselSlideProps = ElementComponentProps<
  AracnaAriaCarouselSlideElement,
  AracnaAriaCarouselSlideElementAttributes,
  AracnaAriaCarouselSlideElementEventMap
>
export type AracnaAracnaAriaCarouselSlidesProps = ElementComponentProps<
  AracnaAriaCarouselSlidesElement,
  AracnaAriaCarouselSlidesElementAttributes,
  AracnaAriaCarouselSlidesElementEventMap
>
export type AracnaAracnaAriaCarouselTabProps = ElementComponentProps<
  AracnaAriaCarouselTabElement,
  AracnaAriaCarouselTabElementAttributes,
  AracnaAriaCarouselTabElementEventMap
>
export type AracnaAracnaAriaCarouselTabsProps = ElementComponentProps<
  AracnaAriaCarouselTabsElement,
  AracnaAriaCarouselTabsElementAttributes,
  AracnaAriaCarouselTabsElementEventMap
>

export type AracnaAracnaAriaButtonProps = ElementComponentProps<AracnaAriaButtonElement, AracnaAriaButtonElementAttributes, AracnaAriaButtonElementEventMap>

export type AracnaAracnaAriaBreadcrumbProps = ElementComponentProps<
  AracnaAriaBreadcrumbElement,
  AracnaAriaBreadcrumbElementAttributes,
  AracnaAriaBreadcrumbElementEventMap
>
export type AracnaAracnaAriaBreadcrumbItemProps = ElementComponentProps<
  AracnaAriaBreadcrumbItemElement,
  AracnaAriaBreadcrumbItemElementAttributes,
  AracnaAriaBreadcrumbItemElementEventMap
>
export type AracnaAracnaAriaBreadcrumbListProps = ElementComponentProps<
  AracnaAriaBreadcrumbListElement,
  AracnaAriaBreadcrumbListElementAttributes,
  AracnaAriaBreadcrumbListElementEventMap
>

export type AracnaAracnaAriaAlertProps = ElementComponentProps<AracnaAriaAlertElement, AracnaAriaAlertElementAttributes, AracnaAriaAlertElementEventMap>

export type AracnaAracnaAriaAlertDialogProps = ElementComponentProps<
  AracnaAriaAlertDialogElement,
  AracnaAriaAlertDialogElementAttributes,
  AracnaAriaAlertDialogElementEventMap
>
export type AracnaAracnaAriaAlertDialogDescriptionProps = ElementComponentProps<
  AracnaAriaAlertDialogDescriptionElement,
  AracnaAriaAlertDialogDescriptionElementAttributes,
  AracnaAriaAlertDialogDescriptionElementEventMap
>
export type AracnaAracnaAriaAlertDialogLabelProps = ElementComponentProps<
  AracnaAriaAlertDialogLabelElement,
  AracnaAriaAlertDialogLabelElementAttributes,
  AracnaAriaAlertDialogLabelElementEventMap
>

export type AracnaAracnaAriaAccordionProps = ElementComponentProps<
  AracnaAriaAccordionElement,
  AracnaAriaAccordionElementAttributes,
  AracnaAriaAccordionElementEventMap
>
export type AracnaAracnaAriaAccordionButtonProps = ElementComponentProps<
  AracnaAriaAccordionButtonElement,
  AracnaAriaAccordionButtonElementAttributes,
  AracnaAriaAccordionButtonElementEventMap
>
export type AracnaAracnaAriaAccordionHeaderProps = ElementComponentProps<
  AracnaAriaAccordionHeaderElement,
  AracnaAriaAccordionHeaderElementAttributes,
  AracnaAriaAccordionHeaderElementEventMap
>
export type AracnaAracnaAriaAccordionPanelProps = ElementComponentProps<
  AracnaAriaAccordionPanelElement,
  AracnaAriaAccordionPanelElementAttributes,
  AracnaAriaAccordionPanelElementEventMap
>
export type AracnaAracnaAriaAccordionSectionProps = ElementComponentProps<
  AracnaAriaAccordionSectionElement,
  AracnaAriaAccordionSectionElementAttributes,
  AracnaAriaAccordionSectionElementEventMap
>

export type AracnaAracnaTabsProps<T = any> = ElementComponentProps<AracnaTabsElement, AracnaTabsElementAttributes<T>, AracnaTabsElementEventMap>
export type AracnaAracnaTabsPanelProps = ElementComponentProps<AracnaTabsPanelElement, AracnaTabsPanelElementAttributes, AracnaTabsPanelElementEventMap>
export type AracnaAracnaTabsTabProps = ElementComponentProps<AracnaTabsTabElement, AracnaTabsTabElementAttributes, AracnaTabsTabElementEventMap>

export type AracnaAracnaNavigationRailProps<T = any> = ElementComponentProps<
  AracnaNavigationRailElement,
  AracnaNavigationRailElementAttributes<T>,
  AracnaNavigationRailElementEventMap
>
export type AracnaAracnaNavigationRailItemProps = ElementComponentProps<
  AracnaNavigationRailItemElement,
  AracnaNavigationRailItemElementAttributes,
  AracnaNavigationRailItemElementEventMap
>

export type AracnaAracnaNavigationBarProps<T = any> = ElementComponentProps<
  AracnaNavigationBarElement,
  AracnaNavigationBarElementAttributes<T>,
  AracnaNavigationBarElementEventMap
>
export type AracnaAracnaNavigationBarItemProps = ElementComponentProps<
  AracnaNavigationBarItemElement,
  AracnaNavigationBarItemElementAttributes,
  AracnaNavigationBarItemElementEventMap
>

export type AracnaAracnaMenuProps<T = any> = ElementComponentProps<
  AracnaMenuElement,
  AracnaMenuElementAttributes<AracnaMenuItemElement, T>,
  AracnaMenuElementEventMap
>
export type AracnaAracnaMenuButtonProps = ElementComponentProps<AracnaMenuButtonElement, AracnaMenuButtonElementAttributes, AracnaMenuButtonElementEventMap>
export type AracnaAracnaMenuItemProps<T = any> = ElementComponentProps<AracnaMenuItemElement, AracnaMenuItemElementAttributes<T>, AracnaMenuItemElementEventMap>
export type AracnaAracnaMenuSubMenuProps = ElementComponentProps<AracnaMenuSubMenuElement, AracnaMenuSubMenuElementAttributes, AracnaMenuSubMenuElementEventMap>

export type AracnaAracnaBreadcrumbProps<T = any> = ElementComponentProps<
  AracnaBreadcrumbElement,
  AracnaBreadcrumbElementAttributes<T>,
  AracnaBreadcrumbElementEventMap
>
export type AracnaAracnaBreadcrumbItemProps = ElementComponentProps<
  AracnaBreadcrumbItemElement,
  AracnaBreadcrumbItemElementAttributes,
  AracnaBreadcrumbItemElementEventMap
>
export type AracnaAracnaBreadcrumbListProps = ElementComponentProps<
  AracnaBreadcrumbListElement,
  AracnaBreadcrumbListElementAttributes,
  AracnaBreadcrumbListElementEventMap
>

export type AracnaAracnaDisclosureProps<T = any> = ElementComponentProps<
  AracnaDisclosureElement,
  AracnaDisclosureElementAttributes<T>,
  AracnaDisclosureElementEventMap
>
export type AracnaAracnaDisclosureButtonProps = ElementComponentProps<
  AracnaDisclosureButtonElement,
  AracnaDisclosureButtonElementAttributes,
  AracnaDisclosureButtonElementEventMap
>
export type AracnaAracnaDisclosurePanelProps = ElementComponentProps<
  AracnaDisclosurePanelElement,
  AracnaDisclosurePanelElementAttributes,
  AracnaDisclosurePanelElementEventMap
>
export type AracnaAracnaDisclosureSectionProps = ElementComponentProps<
  AracnaDisclosureSectionElement,
  AracnaDisclosureSectionElementAttributes,
  AracnaDisclosureSectionElementEventMap
>

export type AracnaAracnaCardProps = ElementComponentProps<AracnaCardElement, AracnaCardElementAttributes, AracnaCardElementEventMap>

export type AracnaAracnaAccordionProps<T = any> = ElementComponentProps<
  AracnaAccordionElement,
  AracnaAccordionElementAttributes<T>,
  AracnaAccordionElementEventMap
>
export type AracnaAracnaAccordionButtonProps = ElementComponentProps<
  AracnaAccordionButtonElement,
  AracnaAccordionButtonElementAttributes,
  AracnaAccordionButtonElementEventMap
>
export type AracnaAracnaAccordionHeaderProps = ElementComponentProps<
  AracnaAccordionHeaderElement,
  AracnaAccordionHeaderElementAttributes,
  AracnaAccordionHeaderElementEventMap
>
export type AracnaAracnaAccordionPanelProps = ElementComponentProps<
  AracnaAccordionPanelElement,
  AracnaAccordionPanelElementAttributes,
  AracnaAccordionPanelElementEventMap
>
export type AracnaAracnaAccordionSectionProps = ElementComponentProps<
  AracnaAccordionSectionElement,
  AracnaAccordionSectionElementAttributes,
  AracnaAccordionSectionElementEventMap
>

export type AracnaAracnaTextAreaProps = ElementComponentProps<AracnaTextAreaElement, AracnaTextAreaElementAttributes, AracnaTextAreaElementEventMap>

export type AracnaAracnaSwitchProps = ElementComponentProps<AracnaSwitchElement, AracnaSwitchElementAttributes, AracnaSwitchElementEventMap>

export type AracnaAracnaSliderProps<T = any> = ElementComponentProps<AracnaSliderElement, AracnaSliderElementAttributes<T>, AracnaSliderElementEventMap>
export type AracnaAracnaSliderThumbProps = ElementComponentProps<AracnaSliderThumbElement, AracnaSliderThumbElementAttributes, AracnaSliderThumbElementEventMap>

export type AracnaAracnaSelectProps<T = any> = ElementComponentProps<
  AracnaSelectElement,
  AracnaSelectElementAttributes<AracnaSelectOptionElement, T>,
  AracnaSelectElementEventMap
>
export type AracnaAracnaSelectButtonProps = ElementComponentProps<
  AracnaSelectButtonElement,
  AracnaSelectButtonElementAttributes,
  AracnaSelectButtonElementEventMap
>
export type AracnaAracnaSelectGroupProps = ElementComponentProps<AracnaSelectGroupElement, AracnaSelectGroupElementAttributes, AracnaSelectGroupElementEventMap>
export type AracnaAracnaSelectInputProps = ElementComponentProps<AracnaSelectInputElement, AracnaSelectInputElementAttributes, AracnaSelectInputElementEventMap>
export type AracnaAracnaSelectListProps = ElementComponentProps<AracnaSelectListElement, AracnaSelectListElementAttributes, AracnaSelectListElementEventMap>
export type AracnaAracnaSelectOptionProps = ElementComponentProps<
  AracnaSelectOptionElement,
  AracnaSelectOptionElementAttributes,
  AracnaSelectOptionElementEventMap
>

export type AracnaAracnaRadioGroupProps<T = any> = ElementComponentProps<
  AracnaRadioGroupElement,
  AracnaRadioGroupElementAttributes<T>,
  AracnaRadioGroupElementEventMap
>
export type AracnaAracnaRadioButtonProps = ElementComponentProps<AracnaRadioButtonElement, AracnaRadioButtonElementAttributes, AracnaRadioButtonElementEventMap>

export type AracnaAracnaListBoxProps = ElementComponentProps<
  AracnaListBoxElement,
  AracnaListBoxElementAttributes<AracnaListBoxOptionElement>,
  AracnaListBoxElementEventMap
>
export type AracnaAracnaListBoxOptionProps = ElementComponentProps<
  AracnaListBoxOptionElement,
  AracnaListBoxOptionElementAttributes,
  AracnaListBoxOptionElementEventMap
>

export type AracnaAracnaInputFileProps = ElementComponentProps<AracnaInputFileElement, AracnaInputFileElementAttributes, AracnaInputFileElementEventMap>

export type AracnaAracnaInputProps = ElementComponentProps<AracnaInputElement, AracnaInputElementAttributes, AracnaInputElementEventMap>

export type AracnaAracnaFormProps<T = any> = ElementComponentProps<AracnaFormElement, AracnaFormElementAttributes<T>, AracnaFormElementEventMap>

export type AracnaAracnaCheckBoxProps = ElementComponentProps<AracnaCheckBoxElement, AracnaCheckBoxElementAttributes, AracnaCheckBoxElementEventMap>

export type AracnaAracnaButtonGroupProps<T = any> = ElementComponentProps<
  AracnaButtonGroupElement,
  AracnaButtonGroupElementAttributes<T>,
  AracnaButtonGroupElementEventMap
>

export type AracnaAracnaButtonProps = ElementComponentProps<AracnaButtonElement, AracnaButtonElementAttributes, AracnaButtonElementEventMap>
