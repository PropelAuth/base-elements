import { ForwardRefExoticComponent, RefAttributes } from "react"
import { BaseAlert } from "./BaseAlert"
import { BaseAnchorButton } from "./BaseAnchorButton"
import { BaseButton } from "./BaseButton"
import { BaseCheckbox } from "./BaseCheckbox"
import { BaseContainer } from "./BaseContainer"
import { BaseDivider } from "./BaseDivider"
import { BaseH1 } from "./BaseH1"
import { BaseH3 } from "./BaseH3"
import { BaseH5 } from "./BaseH5"
import { BaseImage } from "./BaseImage"
import { BaseInput } from "./BaseInput"
import { BaseLabel } from "./BaseLabel"
import { BaseLink } from "./BaseLink"
import { BaseModal } from "./BaseModal"
import { BaseParagraph } from "./BaseParagraph"
import { BasePopover } from "./BasePopover"
import { BaseProgress } from "./BaseProgress"
import { BaseSelect } from "./BaseSelect"
import { BaseTable } from "./BaseTable"
import "./_styles.css"
import {
    AlertProps,
    ButtonProps,
    AnchorButtonProps,
    CheckboxProps,
    ContainerProps,
    DividerProps,
    H1Props,
    H3Props,
    H5Props,
    ImageProps,
    InputProps,
    LabelProps,
    LinkProps,
    ModalProps,
    ParagraphProps,
    PopoverProps,
    ProgressProps,
    SelectProps,
    TableProps,
} from "./_types"

export type BaseElements = {
    Alert: ForwardRefExoticComponent<AlertProps & RefAttributes<HTMLDivElement>>
    Button: ForwardRefExoticComponent<ButtonProps & RefAttributes<HTMLButtonElement>>
    AnchorButton: ForwardRefExoticComponent<AnchorButtonProps & RefAttributes<HTMLButtonElement>>
    Checkbox: ForwardRefExoticComponent<CheckboxProps & RefAttributes<HTMLInputElement>>
    Container: ForwardRefExoticComponent<ContainerProps & RefAttributes<HTMLDivElement>>
    Divider: ForwardRefExoticComponent<DividerProps & RefAttributes<HTMLDivElement>>
    H1: ForwardRefExoticComponent<H1Props & RefAttributes<HTMLHeadingElement>>
    H3: ForwardRefExoticComponent<H3Props & RefAttributes<HTMLHeadingElement>>
    H5: ForwardRefExoticComponent<H5Props & RefAttributes<HTMLHeadingElement>>
    Image: ForwardRefExoticComponent<ImageProps & RefAttributes<HTMLImageElement>>
    Input: ForwardRefExoticComponent<InputProps & RefAttributes<HTMLInputElement>>
    Label: ForwardRefExoticComponent<LabelProps & RefAttributes<HTMLLabelElement>>
    Link: ForwardRefExoticComponent<LinkProps & RefAttributes<HTMLAnchorElement>>
    Modal: (props: ModalProps) => JSX.Element
    Paragraph: ForwardRefExoticComponent<ParagraphProps & RefAttributes<HTMLParagraphElement>>
    Popover: (props: PopoverProps) => JSX.Element
    Progress: ForwardRefExoticComponent<ProgressProps & RefAttributes<HTMLSpanElement>>
    Select: ForwardRefExoticComponent<SelectProps & RefAttributes<HTMLSelectElement>>
    Table: ForwardRefExoticComponent<TableProps & RefAttributes<HTMLTableElement>>
}

export const BaseElements: BaseElements = {
    Alert: BaseAlert,
    Button: BaseButton,
    AnchorButton: BaseAnchorButton,
    Checkbox: BaseCheckbox,
    Container: BaseContainer,
    Divider: BaseDivider,
    H1: BaseH1,
    H3: BaseH3,
    H5: BaseH5,
    Image: BaseImage,
    Input: BaseInput,
    Label: BaseLabel,
    Link: BaseLink,
    Modal: BaseModal,
    Paragraph: BaseParagraph,
    Popover: BasePopover,
    Progress: BaseProgress,
    Select: BaseSelect,
    Table: BaseTable,
}

export {
    BaseAlert,
    BaseButton,
    BaseAnchorButton,
    BaseCheckbox,
    BaseContainer,
    BaseDivider,
    BaseH1,
    BaseH3,
    BaseH5,
    BaseImage,
    BaseInput,
    BaseLabel,
    BaseLink,
    BaseModal,
    BaseParagraph,
    BasePopover,
    BaseProgress,
    BaseSelect,
    BaseTable,
}
