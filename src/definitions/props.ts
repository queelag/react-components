
import type {
  AracnaAccordionButtonElementAttributes,
  AracnaAccordionButtonElementEventMap,
  AracnaAccordionElementAttributes,
  AracnaAccordionElementEventMap,
  AracnaAccordionHeaderElementAttributes,
  AracnaAccordionHeaderElementEventMap,
  AracnaAccordionPanelElementAttributes,
  AracnaAccordionPanelElementEventMap,
  AracnaAccordionSectionElementAttributes,
  AracnaAccordionSectionElementEventMap,
  AracnaAlertDialogDescriptionElementAttributes,
  AracnaAlertDialogDescriptionElementEventMap,
  AracnaAlertDialogElementAttributes,
  AracnaAlertDialogElementEventMap,
  AracnaAlertDialogLabelElementAttributes,
  AracnaAlertDialogLabelElementEventMap,
  AracnaAlertElementAttributes,
  AracnaAlertElementEventMap,
  AracnaAriaAccordionButtonElementAttributes,
  AracnaAriaAccordionButtonElementEventMap,
  AracnaAriaAccordionElementAttributes,
  AracnaAriaAccordionElementEventMap,
  AracnaAriaAccordionHeaderElementAttributes,
  AracnaAriaAccordionHeaderElementEventMap,
  AracnaAriaAccordionPanelElementAttributes,
  AracnaAriaAccordionPanelElementEventMap,
  AracnaAriaAccordionSectionElementAttributes,
  AracnaAriaAccordionSectionElementEventMap,
  AracnaAriaAlertDialogDescriptionElementAttributes,
  AracnaAriaAlertDialogDescriptionElementEventMap,
  AracnaAriaAlertDialogElementAttributes,
  AracnaAriaAlertDialogElementEventMap,
  AracnaAriaAlertDialogLabelElementAttributes,
  AracnaAriaAlertDialogLabelElementEventMap,
  AracnaAriaAlertElementAttributes,
  AracnaAriaAlertElementEventMap,
  AracnaAriaBreadcrumbElementAttributes,
  AracnaAriaBreadcrumbElementEventMap,
  AracnaAriaBreadcrumbItemElementAttributes,
  AracnaAriaBreadcrumbItemElementEventMap,
  AracnaAriaBreadcrumbListElementAttributes,
  AracnaAriaBreadcrumbListElementEventMap,
  AracnaAriaButtonElementAttributes,
  AracnaAriaButtonElementEventMap,
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
  AracnaAriaCheckBoxElementAttributes,
  AracnaAriaCheckBoxElementEventMap,
  AracnaAriaComboBoxButtonElementAttributes,
  AracnaAriaComboBoxButtonElementEventMap,
  AracnaAriaComboBoxClearElementAttributes,
  AracnaAriaComboBoxClearElementEventMap,
  AracnaAriaComboBoxElementAttributes,
  AracnaAriaComboBoxElementEventMap,
  AracnaAriaComboBoxGroupElementAttributes,
  AracnaAriaComboBoxGroupElementEventMap,
  AracnaAriaComboBoxInputElementAttributes,
  AracnaAriaComboBoxInputElementEventMap,
  AracnaAriaComboBoxListElementAttributes,
  AracnaAriaComboBoxListElementEventMap,
  AracnaAriaComboBoxOptionElementAttributes,
  AracnaAriaComboBoxOptionElementEventMap,
  AracnaAriaComboBoxOptionRemoveElementAttributes,
  AracnaAriaComboBoxOptionRemoveElementEventMap,
  AracnaAriaDialogDescriptionElementAttributes,
  AracnaAriaDialogDescriptionElementEventMap,
  AracnaAriaDialogElementAttributes,
  AracnaAriaDialogElementEventMap,
  AracnaAriaDialogLabelElementAttributes,
  AracnaAriaDialogLabelElementEventMap,
  AracnaAriaDisclosureButtonElementAttributes,
  AracnaAriaDisclosureButtonElementEventMap,
  AracnaAriaDisclosureElementAttributes,
  AracnaAriaDisclosureElementEventMap,
  AracnaAriaDisclosurePanelElementAttributes,
  AracnaAriaDisclosurePanelElementEventMap,
  AracnaAriaDisclosureSectionElementAttributes,
  AracnaAriaDisclosureSectionElementEventMap,
  AracnaAriaFeedArticleDescriptionElementAttributes,
  AracnaAriaFeedArticleDescriptionElementEventMap,
  AracnaAriaFeedArticleElementAttributes,
  AracnaAriaFeedArticleElementEventMap,
  AracnaAriaFeedArticleLabelElementAttributes,
  AracnaAriaFeedArticleLabelElementEventMap,
  AracnaAriaFeedElementAttributes,
  AracnaAriaFeedElementEventMap,
  AracnaAriaHeadingElementAttributes,
  AracnaAriaHeadingElementEventMap,
  AracnaAriaLinkElementAttributes,
  AracnaAriaLinkElementEventMap,
  AracnaAriaListBoxElementAttributes,
  AracnaAriaListBoxElementEventMap,
  AracnaAriaListBoxOptionElementAttributes,
  AracnaAriaListBoxOptionElementEventMap,
  AracnaAriaListElementAttributes,
  AracnaAriaListElementEventMap,
  AracnaAriaListItemElementAttributes,
  AracnaAriaListItemElementEventMap,
  AracnaAriaMenuButtonElementAttributes,
  AracnaAriaMenuButtonElementEventMap,
  AracnaAriaMenuElementAttributes,
  AracnaAriaMenuElementEventMap,
  AracnaAriaMenuItemElementAttributes,
  AracnaAriaMenuItemElementEventMap,
  AracnaAriaMenuSubMenuElementAttributes,
  AracnaAriaMenuSubMenuElementEventMap,
  AracnaAriaMeterElementAttributes,
  AracnaAriaMeterElementEventMap,
  AracnaAriaRadioButtonElementAttributes,
  AracnaAriaRadioButtonElementEventMap,
  AracnaAriaRadioGroupElementAttributes,
  AracnaAriaRadioGroupElementEventMap,
  AracnaAriaSliderElementAttributes,
  AracnaAriaSliderElementEventMap,
  AracnaAriaSliderThumbElementAttributes,
  AracnaAriaSliderThumbElementEventMap,
  AracnaAriaSwitchElementAttributes,
  AracnaAriaSwitchElementEventMap,
  AracnaAriaTabsElementAttributes,
  AracnaAriaTabsElementEventMap,
  AracnaAriaTabsPanelElementAttributes,
  AracnaAriaTabsPanelElementEventMap,
  AracnaAriaTabsTabElementAttributes,
  AracnaAriaTabsTabElementEventMap,
  AracnaAriaTooltipArrowElementAttributes,
  AracnaAriaTooltipArrowElementEventMap,
  AracnaAriaTooltipContentElementAttributes,
  AracnaAriaTooltipContentElementEventMap,
  AracnaAriaTooltipElementAttributes,
  AracnaAriaTooltipElementEventMap,
  AracnaAriaTooltipTriggerElementAttributes,
  AracnaAriaTooltipTriggerElementEventMap,
  AracnaAvatarElementAttributes,
  AracnaAvatarElementEventMap,
  AracnaBadgeElementAttributes,
  AracnaBadgeElementEventMap,
  AracnaBreadcrumbElementAttributes,
  AracnaBreadcrumbElementEventMap,
  AracnaBreadcrumbItemElementAttributes,
  AracnaBreadcrumbItemElementEventMap,
  AracnaBreadcrumbListElementAttributes,
  AracnaBreadcrumbListElementEventMap,
  AracnaButtonElementAttributes,
  AracnaButtonElementEventMap,
  AracnaButtonGroupElementAttributes,
  AracnaButtonGroupElementEventMap,
  AracnaCardElementAttributes,
  AracnaCardElementEventMap,
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
  AracnaCheckBoxElementAttributes,
  AracnaCheckBoxElementEventMap,
  AracnaChipElementAttributes,
  AracnaChipElementEventMap,
  AracnaDialogDescriptionElementAttributes,
  AracnaDialogDescriptionElementEventMap,
  AracnaDialogElementAttributes,
  AracnaDialogElementEventMap,
  AracnaDialogLabelElementAttributes,
  AracnaDialogLabelElementEventMap,
  AracnaDisclosureButtonElementAttributes,
  AracnaDisclosureButtonElementEventMap,
  AracnaDisclosureElementAttributes,
  AracnaDisclosureElementEventMap,
  AracnaDisclosurePanelElementAttributes,
  AracnaDisclosurePanelElementEventMap,
  AracnaDisclosureSectionElementAttributes,
  AracnaDisclosureSectionElementEventMap,
  AracnaDividerElementAttributes,
  AracnaDividerElementEventMap,
  AracnaFeedArticleDescriptionElementAttributes,
  AracnaFeedArticleDescriptionElementEventMap,
  AracnaFeedArticleElementAttributes,
  AracnaFeedArticleElementEventMap,
  AracnaFeedArticleLabelElementAttributes,
  AracnaFeedArticleLabelElementEventMap,
  AracnaFeedElementAttributes,
  AracnaFeedElementEventMap,
  AracnaFormElementAttributes,
  AracnaFormElementEventMap,
  AracnaHeadingElementAttributes,
  AracnaHeadingElementEventMap,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap,
  AracnaImageElementAttributes,
  AracnaImageElementEventMap,
  AracnaInputClearElementAttributes,
  AracnaInputClearElementEventMap,
  AracnaInputElementAttributes,
  AracnaInputElementEventMap,
  AracnaInputFileClearElementAttributes,
  AracnaInputFileClearElementEventMap,
  AracnaInputFileElementAttributes,
  AracnaInputFileElementEventMap,
  AracnaInputFileRemoveElementAttributes,
  AracnaInputFileRemoveElementEventMap,
  AracnaInputItemRemoveElementAttributes,
  AracnaInputItemRemoveElementEventMap,
  AracnaInputObscureElementAttributes,
  AracnaInputObscureElementEventMap,
  AracnaListBoxElementAttributes,
  AracnaListBoxElementEventMap,
  AracnaListBoxOptionElementAttributes,
  AracnaListBoxOptionElementEventMap,
  AracnaListElementAttributes,
  AracnaListElementEventMap,
  AracnaListItemElementAttributes,
  AracnaListItemElementEventMap,
  AracnaMenuButtonElementAttributes,
  AracnaMenuButtonElementEventMap,
  AracnaMenuElementAttributes,
  AracnaMenuElementEventMap,
  AracnaMenuItemElementAttributes,
  AracnaMenuItemElementEventMap,
  AracnaMenuSubMenuElementAttributes,
  AracnaMenuSubMenuElementEventMap,
  AracnaMeterElementAttributes,
  AracnaMeterElementEventMap,
  AracnaNavigationBarElementAttributes,
  AracnaNavigationBarElementEventMap,
  AracnaNavigationBarItemElementAttributes,
  AracnaNavigationBarItemElementEventMap,
  AracnaNavigationRailElementAttributes,
  AracnaNavigationRailElementEventMap,
  AracnaNavigationRailItemElementAttributes,
  AracnaNavigationRailItemElementEventMap,
  AracnaQrCodeElementAttributes,
  AracnaQrCodeElementEventMap,
  AracnaRadioButtonElementAttributes,
  AracnaRadioButtonElementEventMap,
  AracnaRadioGroupElementAttributes,
  AracnaRadioGroupElementEventMap,
  AracnaSelectButtonElementAttributes,
  AracnaSelectButtonElementEventMap,
  AracnaSelectClearElementAttributes,
  AracnaSelectClearElementEventMap,
  AracnaSelectElementAttributes,
  AracnaSelectElementEventMap,
  AracnaSelectGroupElementAttributes,
  AracnaSelectGroupElementEventMap,
  AracnaSelectInputElementAttributes,
  AracnaSelectInputElementEventMap,
  AracnaSelectListElementAttributes,
  AracnaSelectListElementEventMap,
  AracnaSelectOptionElementAttributes,
  AracnaSelectOptionElementEventMap,
  AracnaSelectOptionRemoveElementAttributes,
  AracnaSelectOptionRemoveElementEventMap,
  AracnaSliderElementAttributes,
  AracnaSliderElementEventMap,
  AracnaSliderThumbElementAttributes,
  AracnaSliderThumbElementEventMap,
  AracnaSwitchElementAttributes,
  AracnaSwitchElementEventMap,
  AracnaTabsElementAttributes,
  AracnaTabsElementEventMap,
  AracnaTabsPanelElementAttributes,
  AracnaTabsPanelElementEventMap,
  AracnaTabsTabElementAttributes,
  AracnaTabsTabElementEventMap,
  AracnaTextAreaClearElementAttributes,
  AracnaTextAreaClearElementEventMap,
  AracnaTextAreaElementAttributes,
  AracnaTextAreaElementEventMap,
  AracnaTextAreaItemRemoveElementAttributes,
  AracnaTextAreaItemRemoveElementEventMap,
  AracnaTextElementAttributes,
  AracnaTextElementEventMap,
  AracnaTooltipArrowElementAttributes,
  AracnaTooltipArrowElementEventMap,
  AracnaTooltipContentElementAttributes,
  AracnaTooltipContentElementEventMap,
  AracnaTooltipElementAttributes,
  AracnaTooltipElementEventMap,
  AracnaTooltipTriggerElementAttributes,
  AracnaTooltipTriggerElementEventMap
} from '@aracna/web-components'
import type {
  AracnaAccordionElement,
  AracnaAccordionButtonElement,
  AracnaAccordionHeaderElement,
  AracnaAccordionPanelElement,
  AracnaAccordionSectionElement
} from '@aracna/web-components/elements/surface/accordion-element'
import type {
  AracnaAlertDialogElement,
  AracnaAlertDialogDescriptionElement,
  AracnaAlertDialogLabelElement
} from '@aracna/web-components/elements/feedback/alert-dialog-element'
import type { AracnaAlertElement } from '@aracna/web-components/elements/feedback/alert-element'
import type {
  AracnaAriaAccordionElement,
  AracnaAriaAccordionButtonElement,
  AracnaAriaAccordionHeaderElement,
  AracnaAriaAccordionPanelElement,
  AracnaAriaAccordionSectionElement
} from '@aracna/web-components/elements/aria/aria-accordion-element'
import type {
  AracnaAriaAlertDialogElement,
  AracnaAriaAlertDialogDescriptionElement,
  AracnaAriaAlertDialogLabelElement
} from '@aracna/web-components/elements/aria/aria-alert-dialog-element'
import type { AracnaAriaAlertElement } from '@aracna/web-components/elements/aria/aria-alert-element'
import type {
  AracnaAriaBreadcrumbElement,
  AracnaAriaBreadcrumbItemElement,
  AracnaAriaBreadcrumbListElement
} from '@aracna/web-components/elements/aria/aria-breadcrumb-element'
import type { AracnaAriaButtonElement } from '@aracna/web-components/elements/aria/aria-button-element'
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
import type { AracnaAriaCheckBoxElement } from '@aracna/web-components/elements/aria/aria-check-box-element'
import type {
  AracnaAriaComboBoxElement,
  AracnaAriaComboBoxButtonElement,
  AracnaAriaComboBoxClearElement,
  AracnaAriaComboBoxGroupElement,
  AracnaAriaComboBoxInputElement,
  AracnaAriaComboBoxListElement,
  AracnaAriaComboBoxOptionElement,
  AracnaAriaComboBoxOptionRemoveElement
} from '@aracna/web-components/elements/aria/aria-combo-box-element'
import type {
  AracnaAriaDialogElement,
  AracnaAriaDialogDescriptionElement,
  AracnaAriaDialogLabelElement
} from '@aracna/web-components/elements/aria/aria-dialog-element'
import type {
  AracnaAriaDisclosureElement,
  AracnaAriaDisclosureButtonElement,
  AracnaAriaDisclosurePanelElement,
  AracnaAriaDisclosureSectionElement
} from '@aracna/web-components/elements/aria/aria-disclosure-element'
import type {
  AracnaAriaFeedElement,
  AracnaAriaFeedArticleElement,
  AracnaAriaFeedArticleDescriptionElement,
  AracnaAriaFeedArticleLabelElement
} from '@aracna/web-components/elements/aria/aria-feed-element'
import type { AracnaAriaHeadingElement } from '@aracna/web-components/elements/aria/aria-heading-element'
import type { AracnaAriaLinkElement } from '@aracna/web-components/elements/aria/aria-link-element'
import type { AracnaAriaListBoxElement, AracnaAriaListBoxOptionElement } from '@aracna/web-components/elements/aria/aria-list-box-element'
import type { AracnaAriaListElement, AracnaAriaListItemElement } from '@aracna/web-components/elements/aria/aria-list-element'
import type {
  AracnaAriaMenuElement,
  AracnaAriaMenuButtonElement,
  AracnaAriaMenuItemElement,
  AracnaAriaMenuSubMenuElement
} from '@aracna/web-components/elements/aria/aria-menu-element'
import type { AracnaAriaMeterElement } from '@aracna/web-components/elements/aria/aria-meter-element'
import type { AracnaAriaRadioButtonElement, AracnaAriaRadioGroupElement } from '@aracna/web-components/elements/aria/aria-radio-group-element'
import type { AracnaAriaSliderElement, AracnaAriaSliderThumbElement } from '@aracna/web-components/elements/aria/aria-slider-element'
import type { AracnaAriaSwitchElement } from '@aracna/web-components/elements/aria/aria-switch-element'
import type { AracnaAriaTabsElement, AracnaAriaTabsPanelElement, AracnaAriaTabsTabElement } from '@aracna/web-components/elements/aria/aria-tabs-element'
import type {
  AracnaAriaTooltipElement,
  AracnaAriaTooltipArrowElement,
  AracnaAriaTooltipContentElement,
  AracnaAriaTooltipTriggerElement
} from '@aracna/web-components/elements/aria/aria-tooltip-element'
import type { AracnaAvatarElement } from '@aracna/web-components/elements/data/avatar-element'
import type { AracnaBadgeElement } from '@aracna/web-components/elements/data/badge-element'
import type {
  AracnaBreadcrumbElement,
  AracnaBreadcrumbItemElement,
  AracnaBreadcrumbListElement
} from '@aracna/web-components/elements/navigation/breadcrumb-element'
import type { AracnaButtonElement } from '@aracna/web-components/elements/input/button-element'
import type { AracnaButtonGroupElement } from '@aracna/web-components/elements/input/button-group-element'
import type { AracnaCardElement } from '@aracna/web-components/elements/surface/card-element'
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
import type { AracnaCheckBoxElement } from '@aracna/web-components/elements/input/check-box-element'
import type { AracnaChipElement } from '@aracna/web-components/elements/data/chip-element'
import type { AracnaDialogElement, AracnaDialogDescriptionElement, AracnaDialogLabelElement } from '@aracna/web-components/elements/feedback/dialog-element'
import type {
  AracnaDisclosureElement,
  AracnaDisclosureButtonElement,
  AracnaDisclosurePanelElement,
  AracnaDisclosureSectionElement
} from '@aracna/web-components/elements/surface/disclosure-element'
import type { AracnaDividerElement } from '@aracna/web-components/elements/layout/divider-element'
import type {
  AracnaFeedElement,
  AracnaFeedArticleElement,
  AracnaFeedArticleDescriptionElement,
  AracnaFeedArticleLabelElement
} from '@aracna/web-components/elements/data/feed-element'
import type { AracnaFormElement } from '@aracna/web-components/elements/input/form-element'
import type { AracnaHeadingElement } from '@aracna/web-components/elements/typography/heading-element'
import type { AracnaIconElement } from '@aracna/web-components/elements/data/icon-element'
import type { AracnaImageElement } from '@aracna/web-components/elements/data/image-element'
import type {
  AracnaInputElement,
  AracnaInputClearElement,
  AracnaInputObscureElement,
  AracnaInputItemRemoveElement
} from '@aracna/web-components/elements/input/input-element'
import type {
  AracnaInputFileElement,
  AracnaInputFileClearElement,
  AracnaInputFileRemoveElement
} from '@aracna/web-components/elements/input/input-file-element'
import type { AracnaListBoxElement, AracnaListBoxOptionElement } from '@aracna/web-components/elements/input/list-box-element'
import type { AracnaListElement, AracnaListItemElement } from '@aracna/web-components/elements/data/list-element'
import type {
  AracnaMenuElement,
  AracnaMenuButtonElement,
  AracnaMenuItemElement,
  AracnaMenuSubMenuElement
} from '@aracna/web-components/elements/navigation/menu-element'
import type { AracnaMeterElement } from '@aracna/web-components/elements/feedback/meter-element'
import type { AracnaNavigationBarElement, AracnaNavigationBarItemElement } from '@aracna/web-components/elements/navigation/navigation-bar-element'
import type { AracnaNavigationRailElement, AracnaNavigationRailItemElement } from '@aracna/web-components/elements/navigation/navigation-rail-element'
import type { AracnaQrCodeElement } from '@aracna/web-components/elements/data/qr-code-element'
import type { AracnaRadioGroupElement, AracnaRadioButtonElement } from '@aracna/web-components/elements/input/radio-group-element'
import type {
  AracnaSelectElement,
  AracnaSelectButtonElement,
  AracnaSelectClearElement,
  AracnaSelectGroupElement,
  AracnaSelectInputElement,
  AracnaSelectListElement,
  AracnaSelectOptionElement,
  AracnaSelectOptionRemoveElement
} from '@aracna/web-components/elements/input/select-element'
import type { AracnaSliderElement, AracnaSliderThumbElement } from '@aracna/web-components/elements/input/slider-element'
import type { AracnaSwitchElement } from '@aracna/web-components/elements/input/switch-element'
import type { AracnaTabsElement, AracnaTabsPanelElement, AracnaTabsTabElement } from '@aracna/web-components/elements/navigation/tabs-element'
import type {
  AracnaTextAreaElement,
  AracnaTextAreaClearElement,
  AracnaTextAreaItemRemoveElement
} from '@aracna/web-components/elements/input/text-area-element'
import type { AracnaTextElement } from '@aracna/web-components/elements/typography/text-element'
import type {
  AracnaTooltipElement,
  AracnaTooltipArrowElement,
  AracnaTooltipContentElement,
  AracnaTooltipTriggerElement
} from '@aracna/web-components/elements/data/tooltip-element'
import type { ElementComponentProps } from '@aracna/react'

export type AracnaAccordionProps<T = any> = ElementComponentProps<AracnaAccordionElement, AracnaAccordionElementAttributes<T>, AracnaAccordionElementEventMap>
export type AracnaAccordionButtonProps = ElementComponentProps<
  AracnaAccordionButtonElement,
  AracnaAccordionButtonElementAttributes,
  AracnaAccordionButtonElementEventMap
>
export type AracnaAccordionHeaderProps = ElementComponentProps<
  AracnaAccordionHeaderElement,
  AracnaAccordionHeaderElementAttributes,
  AracnaAccordionHeaderElementEventMap
>
export type AracnaAccordionPanelProps = ElementComponentProps<
  AracnaAccordionPanelElement,
  AracnaAccordionPanelElementAttributes,
  AracnaAccordionPanelElementEventMap
>
export type AracnaAccordionSectionProps = ElementComponentProps<
  AracnaAccordionSectionElement,
  AracnaAccordionSectionElementAttributes,
  AracnaAccordionSectionElementEventMap
>

export type AracnaAlertDialogProps = ElementComponentProps<AracnaAlertDialogElement, AracnaAlertDialogElementAttributes, AracnaAlertDialogElementEventMap>
export type AracnaAlertDialogDescriptionProps = ElementComponentProps<
  AracnaAlertDialogDescriptionElement,
  AracnaAlertDialogDescriptionElementAttributes,
  AracnaAlertDialogDescriptionElementEventMap
>
export type AracnaAlertDialogLabelProps = ElementComponentProps<
  AracnaAlertDialogLabelElement,
  AracnaAlertDialogLabelElementAttributes,
  AracnaAlertDialogLabelElementEventMap
>

export type AracnaAlertProps = ElementComponentProps<AracnaAlertElement, AracnaAlertElementAttributes, AracnaAlertElementEventMap>

export type AracnaAriaAccordionProps = ElementComponentProps<
  AracnaAriaAccordionElement,
  AracnaAriaAccordionElementAttributes,
  AracnaAriaAccordionElementEventMap
>
export type AracnaAriaAccordionButtonProps = ElementComponentProps<
  AracnaAriaAccordionButtonElement,
  AracnaAriaAccordionButtonElementAttributes,
  AracnaAriaAccordionButtonElementEventMap
>
export type AracnaAriaAccordionHeaderProps = ElementComponentProps<
  AracnaAriaAccordionHeaderElement,
  AracnaAriaAccordionHeaderElementAttributes,
  AracnaAriaAccordionHeaderElementEventMap
>
export type AracnaAriaAccordionPanelProps = ElementComponentProps<
  AracnaAriaAccordionPanelElement,
  AracnaAriaAccordionPanelElementAttributes,
  AracnaAriaAccordionPanelElementEventMap
>
export type AracnaAriaAccordionSectionProps = ElementComponentProps<
  AracnaAriaAccordionSectionElement,
  AracnaAriaAccordionSectionElementAttributes,
  AracnaAriaAccordionSectionElementEventMap
>

export type AracnaAriaAlertDialogProps = ElementComponentProps<
  AracnaAriaAlertDialogElement,
  AracnaAriaAlertDialogElementAttributes,
  AracnaAriaAlertDialogElementEventMap
>
export type AracnaAriaAlertDialogDescriptionProps = ElementComponentProps<
  AracnaAriaAlertDialogDescriptionElement,
  AracnaAriaAlertDialogDescriptionElementAttributes,
  AracnaAriaAlertDialogDescriptionElementEventMap
>
export type AracnaAriaAlertDialogLabelProps = ElementComponentProps<
  AracnaAriaAlertDialogLabelElement,
  AracnaAriaAlertDialogLabelElementAttributes,
  AracnaAriaAlertDialogLabelElementEventMap
>

export type AracnaAriaAlertProps = ElementComponentProps<AracnaAriaAlertElement, AracnaAriaAlertElementAttributes, AracnaAriaAlertElementEventMap>

export type AracnaAriaBreadcrumbProps = ElementComponentProps<
  AracnaAriaBreadcrumbElement,
  AracnaAriaBreadcrumbElementAttributes,
  AracnaAriaBreadcrumbElementEventMap
>
export type AracnaAriaBreadcrumbItemProps = ElementComponentProps<
  AracnaAriaBreadcrumbItemElement,
  AracnaAriaBreadcrumbItemElementAttributes,
  AracnaAriaBreadcrumbItemElementEventMap
>
export type AracnaAriaBreadcrumbListProps = ElementComponentProps<
  AracnaAriaBreadcrumbListElement,
  AracnaAriaBreadcrumbListElementAttributes,
  AracnaAriaBreadcrumbListElementEventMap
>

export type AracnaAriaButtonProps = ElementComponentProps<AracnaAriaButtonElement, AracnaAriaButtonElementAttributes, AracnaAriaButtonElementEventMap>

export type AracnaAriaCarouselProps = ElementComponentProps<AracnaAriaCarouselElement, AracnaAriaCarouselElementAttributes, AracnaAriaCarouselElementEventMap>
export type AracnaAriaCarouselNextSlideControlProps = ElementComponentProps<
  AracnaAriaCarouselNextSlideControlElement,
  AracnaAriaCarouselNextSlideControlElementAttributes,
  AracnaAriaCarouselNextSlideControlElementEventMap
>
export type AracnaAriaCarouselPreviousSlideControlProps = ElementComponentProps<
  AracnaAriaCarouselPreviousSlideControlElement,
  AracnaAriaCarouselPreviousSlideControlElementAttributes,
  AracnaAriaCarouselPreviousSlideControlElementEventMap
>
export type AracnaAriaCarouselRotationControlProps = ElementComponentProps<
  AracnaAriaCarouselRotationControlElement,
  AracnaAriaCarouselRotationControlElementAttributes,
  AracnaAriaCarouselRotationControlElementEventMap
>
export type AracnaAriaCarouselSlideProps = ElementComponentProps<
  AracnaAriaCarouselSlideElement,
  AracnaAriaCarouselSlideElementAttributes,
  AracnaAriaCarouselSlideElementEventMap
>
export type AracnaAriaCarouselSlidesProps = ElementComponentProps<
  AracnaAriaCarouselSlidesElement,
  AracnaAriaCarouselSlidesElementAttributes,
  AracnaAriaCarouselSlidesElementEventMap
>
export type AracnaAriaCarouselTabProps = ElementComponentProps<
  AracnaAriaCarouselTabElement,
  AracnaAriaCarouselTabElementAttributes,
  AracnaAriaCarouselTabElementEventMap
>
export type AracnaAriaCarouselTabsProps = ElementComponentProps<
  AracnaAriaCarouselTabsElement,
  AracnaAriaCarouselTabsElementAttributes,
  AracnaAriaCarouselTabsElementEventMap
>

export type AracnaAriaCheckBoxProps = ElementComponentProps<AracnaAriaCheckBoxElement, AracnaAriaCheckBoxElementAttributes, AracnaAriaCheckBoxElementEventMap>

export type AracnaAriaComboBoxProps = ElementComponentProps<
  AracnaAriaComboBoxElement,
  AracnaAriaComboBoxElementAttributes<AracnaAriaComboBoxOptionElement>,
  AracnaAriaComboBoxElementEventMap
>
export type AracnaAriaComboBoxButtonProps = ElementComponentProps<
  AracnaAriaComboBoxButtonElement,
  AracnaAriaComboBoxButtonElementAttributes,
  AracnaAriaComboBoxButtonElementEventMap
>
export type AracnaAriaComboBoxClearProps = ElementComponentProps<
  AracnaAriaComboBoxClearElement,
  AracnaAriaComboBoxClearElementAttributes,
  AracnaAriaComboBoxClearElementEventMap
>
export type AracnaAriaComboBoxGroupProps = ElementComponentProps<
  AracnaAriaComboBoxGroupElement,
  AracnaAriaComboBoxGroupElementAttributes,
  AracnaAriaComboBoxGroupElementEventMap
>
export type AracnaAriaComboBoxInputProps = ElementComponentProps<
  AracnaAriaComboBoxInputElement,
  AracnaAriaComboBoxInputElementAttributes,
  AracnaAriaComboBoxInputElementEventMap
>
export type AracnaAriaComboBoxListProps = ElementComponentProps<
  AracnaAriaComboBoxListElement,
  AracnaAriaComboBoxListElementAttributes,
  AracnaAriaComboBoxListElementEventMap
>
export type AracnaAriaComboBoxOptionProps = ElementComponentProps<
  AracnaAriaComboBoxOptionElement,
  AracnaAriaComboBoxOptionElementAttributes,
  AracnaAriaComboBoxOptionElementEventMap
>
export type AracnaAriaComboBoxOptionRemoveProps = ElementComponentProps<
  AracnaAriaComboBoxOptionRemoveElement,
  AracnaAriaComboBoxOptionRemoveElementAttributes,
  AracnaAriaComboBoxOptionRemoveElementEventMap
>

export type AracnaAriaDialogProps = ElementComponentProps<AracnaAriaDialogElement, AracnaAriaDialogElementAttributes, AracnaAriaDialogElementEventMap>
export type AracnaAriaDialogDescriptionProps = ElementComponentProps<
  AracnaAriaDialogDescriptionElement,
  AracnaAriaDialogDescriptionElementAttributes,
  AracnaAriaDialogDescriptionElementEventMap
>
export type AracnaAriaDialogLabelProps = ElementComponentProps<
  AracnaAriaDialogLabelElement,
  AracnaAriaDialogLabelElementAttributes,
  AracnaAriaDialogLabelElementEventMap
>

export type AracnaAriaDisclosureProps = ElementComponentProps<
  AracnaAriaDisclosureElement,
  AracnaAriaDisclosureElementAttributes,
  AracnaAriaDisclosureElementEventMap
>
export type AracnaAriaDisclosureButtonProps = ElementComponentProps<
  AracnaAriaDisclosureButtonElement,
  AracnaAriaDisclosureButtonElementAttributes,
  AracnaAriaDisclosureButtonElementEventMap
>
export type AracnaAriaDisclosurePanelProps = ElementComponentProps<
  AracnaAriaDisclosurePanelElement,
  AracnaAriaDisclosurePanelElementAttributes,
  AracnaAriaDisclosurePanelElementEventMap
>
export type AracnaAriaDisclosureSectionProps = ElementComponentProps<
  AracnaAriaDisclosureSectionElement,
  AracnaAriaDisclosureSectionElementAttributes,
  AracnaAriaDisclosureSectionElementEventMap
>

export type AracnaAriaFeedProps = ElementComponentProps<AracnaAriaFeedElement, AracnaAriaFeedElementAttributes, AracnaAriaFeedElementEventMap>
export type AracnaAriaFeedArticleProps = ElementComponentProps<
  AracnaAriaFeedArticleElement,
  AracnaAriaFeedArticleElementAttributes,
  AracnaAriaFeedArticleElementEventMap
>
export type AracnaAriaFeedArticleDescriptionProps = ElementComponentProps<
  AracnaAriaFeedArticleDescriptionElement,
  AracnaAriaFeedArticleDescriptionElementAttributes,
  AracnaAriaFeedArticleDescriptionElementEventMap
>
export type AracnaAriaFeedArticleLabelProps = ElementComponentProps<
  AracnaAriaFeedArticleLabelElement,
  AracnaAriaFeedArticleLabelElementAttributes,
  AracnaAriaFeedArticleLabelElementEventMap
>

export type AracnaAriaHeadingProps = ElementComponentProps<AracnaAriaHeadingElement, AracnaAriaHeadingElementAttributes, AracnaAriaHeadingElementEventMap>

export type AracnaAriaLinkProps = ElementComponentProps<AracnaAriaLinkElement, AracnaAriaLinkElementAttributes, AracnaAriaLinkElementEventMap>

export type AracnaAriaListBoxProps = ElementComponentProps<
  AracnaAriaListBoxElement,
  AracnaAriaListBoxElementAttributes<AracnaAriaListBoxOptionElement>,
  AracnaAriaListBoxElementEventMap
>
export type AracnaAriaListBoxOptionProps = ElementComponentProps<
  AracnaAriaListBoxOptionElement,
  AracnaAriaListBoxOptionElementAttributes,
  AracnaAriaListBoxOptionElementEventMap
>

export type AracnaAriaListProps = ElementComponentProps<AracnaAriaListElement, AracnaAriaListElementAttributes, AracnaAriaListElementEventMap>
export type AracnaAriaListItemProps = ElementComponentProps<AracnaAriaListItemElement, AracnaAriaListItemElementAttributes, AracnaAriaListItemElementEventMap>

export type AracnaAriaMenuProps = ElementComponentProps<
  AracnaAriaMenuElement,
  AracnaAriaMenuElementAttributes<AracnaAriaMenuItemElement>,
  AracnaAriaMenuElementEventMap
>
export type AracnaAriaMenuButtonProps = ElementComponentProps<
  AracnaAriaMenuButtonElement,
  AracnaAriaMenuButtonElementAttributes,
  AracnaAriaMenuButtonElementEventMap
>
export type AracnaAriaMenuItemProps = ElementComponentProps<AracnaAriaMenuItemElement, AracnaAriaMenuItemElementAttributes, AracnaAriaMenuItemElementEventMap>
export type AracnaAriaMenuSubMenuProps = ElementComponentProps<
  AracnaAriaMenuSubMenuElement,
  AracnaAriaMenuSubMenuElementAttributes,
  AracnaAriaMenuSubMenuElementEventMap
>

export type AracnaAriaMeterProps = ElementComponentProps<AracnaAriaMeterElement, AracnaAriaMeterElementAttributes, AracnaAriaMeterElementEventMap>

export type AracnaAriaRadioButtonProps = ElementComponentProps<
  AracnaAriaRadioButtonElement,
  AracnaAriaRadioButtonElementAttributes,
  AracnaAriaRadioButtonElementEventMap
>
export type AracnaAriaRadioGroupProps = ElementComponentProps<
  AracnaAriaRadioGroupElement,
  AracnaAriaRadioGroupElementAttributes,
  AracnaAriaRadioGroupElementEventMap
>

export type AracnaAriaSliderProps = ElementComponentProps<AracnaAriaSliderElement, AracnaAriaSliderElementAttributes, AracnaAriaSliderElementEventMap>
export type AracnaAriaSliderThumbProps = ElementComponentProps<
  AracnaAriaSliderThumbElement,
  AracnaAriaSliderThumbElementAttributes,
  AracnaAriaSliderThumbElementEventMap
>

export type AracnaAriaSwitchProps = ElementComponentProps<AracnaAriaSwitchElement, AracnaAriaSwitchElementAttributes, AracnaAriaSwitchElementEventMap>

export type AracnaAriaTabsProps = ElementComponentProps<AracnaAriaTabsElement, AracnaAriaTabsElementAttributes, AracnaAriaTabsElementEventMap>
export type AracnaAriaTabsPanelProps = ElementComponentProps<
  AracnaAriaTabsPanelElement,
  AracnaAriaTabsPanelElementAttributes,
  AracnaAriaTabsPanelElementEventMap
>
export type AracnaAriaTabsTabProps = ElementComponentProps<AracnaAriaTabsTabElement, AracnaAriaTabsTabElementAttributes, AracnaAriaTabsTabElementEventMap>

export type AracnaAriaTooltipProps = ElementComponentProps<AracnaAriaTooltipElement, AracnaAriaTooltipElementAttributes, AracnaAriaTooltipElementEventMap>
export type AracnaAriaTooltipArrowProps = ElementComponentProps<
  AracnaAriaTooltipArrowElement,
  AracnaAriaTooltipArrowElementAttributes,
  AracnaAriaTooltipArrowElementEventMap
>
export type AracnaAriaTooltipContentProps = ElementComponentProps<
  AracnaAriaTooltipContentElement,
  AracnaAriaTooltipContentElementAttributes,
  AracnaAriaTooltipContentElementEventMap
>
export type AracnaAriaTooltipTriggerProps = ElementComponentProps<
  AracnaAriaTooltipTriggerElement,
  AracnaAriaTooltipTriggerElementAttributes,
  AracnaAriaTooltipTriggerElementEventMap
>

export type AracnaAvatarProps = ElementComponentProps<AracnaAvatarElement, AracnaAvatarElementAttributes, AracnaAvatarElementEventMap>

export type AracnaBadgeProps = ElementComponentProps<AracnaBadgeElement, AracnaBadgeElementAttributes, AracnaBadgeElementEventMap>

export type AracnaBreadcrumbProps<T = any> = ElementComponentProps<
  AracnaBreadcrumbElement,
  AracnaBreadcrumbElementAttributes<T>,
  AracnaBreadcrumbElementEventMap
>
export type AracnaBreadcrumbItemProps = ElementComponentProps<
  AracnaBreadcrumbItemElement,
  AracnaBreadcrumbItemElementAttributes,
  AracnaBreadcrumbItemElementEventMap
>
export type AracnaBreadcrumbListProps = ElementComponentProps<
  AracnaBreadcrumbListElement,
  AracnaBreadcrumbListElementAttributes,
  AracnaBreadcrumbListElementEventMap
>

export type AracnaButtonProps = ElementComponentProps<AracnaButtonElement, AracnaButtonElementAttributes, AracnaButtonElementEventMap>

export type AracnaButtonGroupProps<T = any> = ElementComponentProps<
  AracnaButtonGroupElement,
  AracnaButtonGroupElementAttributes<T>,
  AracnaButtonGroupElementEventMap
>

export type AracnaCardProps = ElementComponentProps<AracnaCardElement, AracnaCardElementAttributes, AracnaCardElementEventMap>

export type AracnaCarouselProps<T = any> = ElementComponentProps<AracnaCarouselElement, AracnaCarouselElementAttributes<T>, AracnaCarouselElementEventMap>
export type AracnaCarouselNextSlideControlProps = ElementComponentProps<
  AracnaCarouselNextSlideControlElement,
  AracnaCarouselNextSlideControlElementAttributes,
  AracnaCarouselNextSlideControlElementEventMap
>
export type AracnaCarouselPreviousSlideControlProps = ElementComponentProps<
  AracnaCarouselPreviousSlideControlElement,
  AracnaCarouselPreviousSlideControlElementAttributes,
  AracnaCarouselPreviousSlideControlElementEventMap
>
export type AracnaCarouselRotationControlProps = ElementComponentProps<
  AracnaCarouselRotationControlElement,
  AracnaCarouselRotationControlElementAttributes,
  AracnaCarouselRotationControlElementEventMap
>
export type AracnaCarouselSlideProps = ElementComponentProps<
  AracnaCarouselSlideElement,
  AracnaCarouselSlideElementAttributes,
  AracnaCarouselSlideElementEventMap
>
export type AracnaCarouselSlidesProps = ElementComponentProps<
  AracnaCarouselSlidesElement,
  AracnaCarouselSlidesElementAttributes,
  AracnaCarouselSlidesElementEventMap
>
export type AracnaCarouselTabProps = ElementComponentProps<AracnaCarouselTabElement, AracnaCarouselTabElementAttributes, AracnaCarouselTabElementEventMap>
export type AracnaCarouselTabsProps = ElementComponentProps<AracnaCarouselTabsElement, AracnaCarouselTabsElementAttributes, AracnaCarouselTabsElementEventMap>

export type AracnaCheckBoxProps = ElementComponentProps<AracnaCheckBoxElement, AracnaCheckBoxElementAttributes, AracnaCheckBoxElementEventMap>

export type AracnaChipProps = ElementComponentProps<AracnaChipElement, AracnaChipElementAttributes, AracnaChipElementEventMap>

export type AracnaDialogProps = ElementComponentProps<AracnaDialogElement, AracnaDialogElementAttributes, AracnaDialogElementEventMap>
export type AracnaDialogDescriptionProps = ElementComponentProps<
  AracnaDialogDescriptionElement,
  AracnaDialogDescriptionElementAttributes,
  AracnaDialogDescriptionElementEventMap
>
export type AracnaDialogLabelProps = ElementComponentProps<AracnaDialogLabelElement, AracnaDialogLabelElementAttributes, AracnaDialogLabelElementEventMap>

export type AracnaDisclosureProps<T = any> = ElementComponentProps<
  AracnaDisclosureElement,
  AracnaDisclosureElementAttributes<T>,
  AracnaDisclosureElementEventMap
>
export type AracnaDisclosureButtonProps = ElementComponentProps<
  AracnaDisclosureButtonElement,
  AracnaDisclosureButtonElementAttributes,
  AracnaDisclosureButtonElementEventMap
>
export type AracnaDisclosurePanelProps = ElementComponentProps<
  AracnaDisclosurePanelElement,
  AracnaDisclosurePanelElementAttributes,
  AracnaDisclosurePanelElementEventMap
>
export type AracnaDisclosureSectionProps = ElementComponentProps<
  AracnaDisclosureSectionElement,
  AracnaDisclosureSectionElementAttributes,
  AracnaDisclosureSectionElementEventMap
>

export type AracnaDividerProps = ElementComponentProps<AracnaDividerElement, AracnaDividerElementAttributes, AracnaDividerElementEventMap>

export type AracnaFeedProps<T = any> = ElementComponentProps<AracnaFeedElement, AracnaFeedElementAttributes<T>, AracnaFeedElementEventMap>
export type AracnaFeedArticleProps = ElementComponentProps<AracnaFeedArticleElement, AracnaFeedArticleElementAttributes, AracnaFeedArticleElementEventMap>
export type AracnaFeedArticleDescriptionProps = ElementComponentProps<
  AracnaFeedArticleDescriptionElement,
  AracnaFeedArticleDescriptionElementAttributes,
  AracnaFeedArticleDescriptionElementEventMap
>
export type AracnaFeedArticleLabelProps = ElementComponentProps<
  AracnaFeedArticleLabelElement,
  AracnaFeedArticleLabelElementAttributes,
  AracnaFeedArticleLabelElementEventMap
>

export type AracnaFormProps<T = any> = ElementComponentProps<AracnaFormElement, AracnaFormElementAttributes<T>, AracnaFormElementEventMap>

export type AracnaHeadingProps = ElementComponentProps<AracnaHeadingElement, AracnaHeadingElementAttributes, AracnaHeadingElementEventMap>

export type AracnaIconProps = ElementComponentProps<AracnaIconElement, AracnaIconElementAttributes, AracnaIconElementEventMap>

export type AracnaImageProps = ElementComponentProps<AracnaImageElement, AracnaImageElementAttributes, AracnaImageElementEventMap>

export type AracnaInputProps = ElementComponentProps<AracnaInputElement, AracnaInputElementAttributes, AracnaInputElementEventMap>
export type AracnaInputClearProps = ElementComponentProps<AracnaInputClearElement, AracnaInputClearElementAttributes, AracnaInputClearElementEventMap>
export type AracnaInputObscureProps = ElementComponentProps<AracnaInputObscureElement, AracnaInputObscureElementAttributes, AracnaInputObscureElementEventMap>
export type AracnaInputItemRemoveProps = ElementComponentProps<
  AracnaInputItemRemoveElement,
  AracnaInputItemRemoveElementAttributes,
  AracnaInputItemRemoveElementEventMap
>

export type AracnaInputFileProps = ElementComponentProps<AracnaInputFileElement, AracnaInputFileElementAttributes, AracnaInputFileElementEventMap>
export type AracnaInputFileClearProps = ElementComponentProps<
  AracnaInputFileClearElement,
  AracnaInputFileClearElementAttributes,
  AracnaInputFileClearElementEventMap
>
export type AracnaInputFileRemoveProps = ElementComponentProps<
  AracnaInputFileRemoveElement,
  AracnaInputFileRemoveElementAttributes,
  AracnaInputFileRemoveElementEventMap
>

export type AracnaListBoxProps = ElementComponentProps<
  AracnaListBoxElement,
  AracnaListBoxElementAttributes<AracnaListBoxOptionElement>,
  AracnaListBoxElementEventMap
>
export type AracnaListBoxOptionProps = ElementComponentProps<
  AracnaListBoxOptionElement,
  AracnaListBoxOptionElementAttributes,
  AracnaListBoxOptionElementEventMap
>

export type AracnaListProps<T = any> = ElementComponentProps<AracnaListElement, AracnaListElementAttributes<T>, AracnaListElementEventMap>
export type AracnaListItemProps = ElementComponentProps<AracnaListItemElement, AracnaListItemElementAttributes, AracnaListItemElementEventMap>

export type AracnaMenuProps<T = any> = ElementComponentProps<
  AracnaMenuElement,
  AracnaMenuElementAttributes<AracnaMenuItemElement, T>,
  AracnaMenuElementEventMap
>
export type AracnaMenuButtonProps = ElementComponentProps<AracnaMenuButtonElement, AracnaMenuButtonElementAttributes, AracnaMenuButtonElementEventMap>
export type AracnaMenuItemProps<T = any> = ElementComponentProps<AracnaMenuItemElement, AracnaMenuItemElementAttributes<T>, AracnaMenuItemElementEventMap>
export type AracnaMenuSubMenuProps = ElementComponentProps<AracnaMenuSubMenuElement, AracnaMenuSubMenuElementAttributes, AracnaMenuSubMenuElementEventMap>

export type AracnaMeterProps = ElementComponentProps<AracnaMeterElement, AracnaMeterElementAttributes, AracnaMeterElementEventMap>

export type AracnaNavigationBarProps<T = any> = ElementComponentProps<
  AracnaNavigationBarElement,
  AracnaNavigationBarElementAttributes<T>,
  AracnaNavigationBarElementEventMap
>
export type AracnaNavigationBarItemProps = ElementComponentProps<
  AracnaNavigationBarItemElement,
  AracnaNavigationBarItemElementAttributes,
  AracnaNavigationBarItemElementEventMap
>

export type AracnaNavigationRailProps<T = any> = ElementComponentProps<
  AracnaNavigationRailElement,
  AracnaNavigationRailElementAttributes<T>,
  AracnaNavigationRailElementEventMap
>
export type AracnaNavigationRailItemProps = ElementComponentProps<
  AracnaNavigationRailItemElement,
  AracnaNavigationRailItemElementAttributes,
  AracnaNavigationRailItemElementEventMap
>

export type AracnaQrCodeProps = ElementComponentProps<AracnaQrCodeElement, AracnaQrCodeElementAttributes, AracnaQrCodeElementEventMap>

export type AracnaRadioGroupProps<T = any> = ElementComponentProps<
  AracnaRadioGroupElement,
  AracnaRadioGroupElementAttributes<T>,
  AracnaRadioGroupElementEventMap
>
export type AracnaRadioButtonProps = ElementComponentProps<AracnaRadioButtonElement, AracnaRadioButtonElementAttributes, AracnaRadioButtonElementEventMap>

export type AracnaSelectProps<T = any> = ElementComponentProps<
  AracnaSelectElement,
  AracnaSelectElementAttributes<AracnaSelectOptionElement, T>,
  AracnaSelectElementEventMap
>
export type AracnaSelectButtonProps = ElementComponentProps<AracnaSelectButtonElement, AracnaSelectButtonElementAttributes, AracnaSelectButtonElementEventMap>
export type AracnaSelectClearProps = ElementComponentProps<AracnaSelectClearElement, AracnaSelectClearElementAttributes, AracnaSelectClearElementEventMap>
export type AracnaSelectGroupProps = ElementComponentProps<AracnaSelectGroupElement, AracnaSelectGroupElementAttributes, AracnaSelectGroupElementEventMap>
export type AracnaSelectInputProps = ElementComponentProps<AracnaSelectInputElement, AracnaSelectInputElementAttributes, AracnaSelectInputElementEventMap>
export type AracnaSelectListProps = ElementComponentProps<AracnaSelectListElement, AracnaSelectListElementAttributes, AracnaSelectListElementEventMap>
export type AracnaSelectOptionProps = ElementComponentProps<AracnaSelectOptionElement, AracnaSelectOptionElementAttributes, AracnaSelectOptionElementEventMap>
export type AracnaSelectOptionRemoveProps = ElementComponentProps<
  AracnaSelectOptionRemoveElement,
  AracnaSelectOptionRemoveElementAttributes,
  AracnaSelectOptionRemoveElementEventMap
>

export type AracnaSliderProps<T = any> = ElementComponentProps<AracnaSliderElement, AracnaSliderElementAttributes<T>, AracnaSliderElementEventMap>
export type AracnaSliderThumbProps = ElementComponentProps<AracnaSliderThumbElement, AracnaSliderThumbElementAttributes, AracnaSliderThumbElementEventMap>

export type AracnaSwitchProps = ElementComponentProps<AracnaSwitchElement, AracnaSwitchElementAttributes, AracnaSwitchElementEventMap>

export type AracnaTabsProps<T = any> = ElementComponentProps<AracnaTabsElement, AracnaTabsElementAttributes<T>, AracnaTabsElementEventMap>
export type AracnaTabsPanelProps = ElementComponentProps<AracnaTabsPanelElement, AracnaTabsPanelElementAttributes, AracnaTabsPanelElementEventMap>
export type AracnaTabsTabProps = ElementComponentProps<AracnaTabsTabElement, AracnaTabsTabElementAttributes, AracnaTabsTabElementEventMap>

export type AracnaTextAreaProps = ElementComponentProps<AracnaTextAreaElement, AracnaTextAreaElementAttributes, AracnaTextAreaElementEventMap>
export type AracnaTextAreaClearProps = ElementComponentProps<
  AracnaTextAreaClearElement,
  AracnaTextAreaClearElementAttributes,
  AracnaTextAreaClearElementEventMap
>
export type AracnaTextAreaItemRemoveProps = ElementComponentProps<
  AracnaTextAreaItemRemoveElement,
  AracnaTextAreaItemRemoveElementAttributes,
  AracnaTextAreaItemRemoveElementEventMap
>

export type AracnaTextProps = ElementComponentProps<AracnaTextElement, AracnaTextElementAttributes, AracnaTextElementEventMap>

export type AracnaTooltipProps = ElementComponentProps<AracnaTooltipElement, AracnaTooltipElementAttributes, AracnaTooltipElementEventMap>
export type AracnaTooltipArrowProps = ElementComponentProps<AracnaTooltipArrowElement, AracnaTooltipArrowElementAttributes, AracnaTooltipArrowElementEventMap>
export type AracnaTooltipContentProps = ElementComponentProps<
  AracnaTooltipContentElement,
  AracnaTooltipContentElementAttributes,
  AracnaTooltipContentElementEventMap
>
export type AracnaTooltipTriggerProps = ElementComponentProps<
  AracnaTooltipTriggerElement,
  AracnaTooltipTriggerElementAttributes,
  AracnaTooltipTriggerElementEventMap
>
