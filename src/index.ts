import { FC, RefAttributes } from "react"
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
import { BaseLoader } from "./BaseLoader"
import { BaseSelect } from "./BaseSelect"
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
    LoaderProps,
    SelectProps,
} from "./_types"

export type BaseElements = {
    Alert: FC<AlertProps & RefAttributes<HTMLDivElement>>
    Button: FC<ButtonProps & RefAttributes<HTMLButtonElement>>
    AnchorButton: FC<AnchorButtonProps & RefAttributes<HTMLButtonElement>>
    Checkbox: FC<CheckboxProps & RefAttributes<HTMLInputElement>>
    Container: FC<ContainerProps & RefAttributes<HTMLDivElement>>
    Divider: FC<DividerProps & RefAttributes<HTMLDivElement>>
    H1: FC<H1Props & RefAttributes<HTMLHeadingElement>>
    H3: FC<H3Props & RefAttributes<HTMLHeadingElement>>
    H5: FC<H5Props & RefAttributes<HTMLHeadingElement>>
    Image: FC<ImageProps & RefAttributes<HTMLImageElement>>
    Input: FC<InputProps & RefAttributes<HTMLInputElement>>
    Label: FC<LabelProps & RefAttributes<HTMLLabelElement>>
    Link: FC<LinkProps & RefAttributes<HTMLAnchorElement>>
    Modal: (props: ModalProps) => JSX.Element
    Paragraph: FC<ParagraphProps & RefAttributes<HTMLParagraphElement>>
    Loader: FC<LoaderProps & RefAttributes<HTMLSpanElement>>
    Select: FC<SelectProps & RefAttributes<HTMLSelectElement>>
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
    Loader: BaseLoader,
    Select: BaseSelect,
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
    BaseLoader,
    BaseSelect,
}
