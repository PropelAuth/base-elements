import { Dispatch, SetStateAction, CSSProperties, MouseEventHandler, ChangeEventHandler, ReactNode } from "react"

export type AlertProps = {
    type?: "error" | "info" | "success" | "warning"
    className?: string
    style?: CSSProperties
    children?: ReactNode
}

export type ButtonProps = {
    onClick?: MouseEventHandler<HTMLButtonElement>
    loading?: boolean
    disabled?: boolean
    id?: string
    className?: string
    style?: CSSProperties
    children?: ReactNode
}

export type AnchorButtonProps = {
    onClick?: MouseEventHandler<HTMLButtonElement>
    loading?: boolean
    disabled?: boolean
    id?: string
    className?: string
    style?: CSSProperties
    children?: ReactNode
}

export type CheckboxProps = {
    checked: boolean
    onChange: ChangeEventHandler<HTMLInputElement>
    id?: string
    label?: ReactNode
    required?: boolean
    disabled?: boolean
    className?: string
    style?: CSSProperties
}

export type ContainerProps = {
    className?: string
    style?: CSSProperties
    children?: ReactNode
}

export type DividerProps = {
    className?: string
    style?: CSSProperties
    children?: ReactNode
}

export type H1Props = {
    className?: string
    style?: CSSProperties
    children?: ReactNode
}

export type H3Props = {
    className?: string
    style?: CSSProperties
    children?: ReactNode
}

export type H5Props = {
    className?: string
    style?: CSSProperties
    children?: ReactNode
}

export type ImageProps = {
    src: string
    alt?: string
    className?: string
    style?: CSSProperties
}

export type InputProps = {
    value: string
    onChange?: ChangeEventHandler<HTMLInputElement>
    id?: string
    type?: string
    required?: boolean
    disabled?: boolean
    readOnly?: boolean
    placeholder?: string
    className?: string
    style?: CSSProperties
}

export type LabelProps = {
    htmlFor?: string
    className?: string
    style?: CSSProperties
    children?: ReactNode
}

export type LinkProps = {
    href: string
    className?: string
    style?: CSSProperties
    children?: ReactNode
}

export type ModalProps = {
    show: boolean
    setShow: Dispatch<SetStateAction<boolean>>
    onClose?: () => void
    className?: string
    style?: CSSProperties
    children?: ReactNode
}

export type ParagraphProps = {
    className?: string
    style?: CSSProperties
    children?: ReactNode
}

export type LoaderProps = {
    className?: string
    style?: CSSProperties
}

export type Option = {
    label: string
    value: string
}

export type OptionGroup = {
    label: string
    options: Array<Option>
}

export type SelectProps = {
    value: string
    onChange: ChangeEventHandler<HTMLSelectElement>
    options?: Array<OptionGroup | Option>
    disabled?: boolean
    id?: string
    className?: string
    style?: CSSProperties
}

export type BaseAlertProps = AlertProps
export type BaseButtonProps = ButtonProps
export type BaseAnchorButtonProps = AnchorButtonProps
export type BaseCheckboxProps = CheckboxProps
export type BaseContainerProps = ContainerProps
export type BaseDividerProps = DividerProps
export type BaseH1Props = H1Props
export type BaseH3Props = H3Props
export type BaseH5Props = H5Props
export type BaseImageProps = ImageProps
export type BaseInputProps = InputProps
export type BaseLabelProps = LabelProps
export type BaseLinkProps = LinkProps
export type BaseModalProps = ModalProps
export type BaseParagraphProps = ParagraphProps
export type BaseLoaderProps = LoaderProps
export type BaseSelectProps = SelectProps
