import { Dispatch, SetStateAction, CSSProperties, MouseEventHandler, ChangeEventHandler, ReactNode } from "react"

type AlertProps = {
    type?: "error" | "info" | "success" | "warning"
    className?: string
    style?: CSSProperties
    children?: ReactNode
}

type ButtonProps = {
    onClick?: MouseEventHandler<HTMLButtonElement>
    loading?: boolean
    disabled?: boolean
    id?: string
    className?: string
    style?: CSSProperties
    children?: ReactNode
}

type CheckboxProps = {
    checked: boolean
    onChange: ChangeEventHandler<HTMLInputElement>
    id?: string
    label?: ReactNode
    required?: boolean
    disabled?: boolean
    className?: string
    style?: CSSProperties
}

type ContainerProps = {
    className?: string
    style?: CSSProperties
    children?: ReactNode
}

type DividerProps = {
    className?: string
    style?: CSSProperties
    children?: ReactNode
}

type H1Props = {
    className?: string
    style?: CSSProperties
    children?: ReactNode
}

type H3Props = {
    className?: string
    style?: CSSProperties
    children?: ReactNode
}

type H5Props = {
    className?: string
    style?: CSSProperties
    children?: ReactNode
}

type ImageProps = {
    src: string
    alt?: string
    className?: string
    style?: CSSProperties
}

type InputProps = {
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

type LabelProps = {
    htmlFor?: string
    className?: string
    style?: CSSProperties
    children?: ReactNode
}

type LinkProps = {
    href: string
    className?: string
    style?: CSSProperties
    children?: ReactNode
}

type ModalProps = {
    show: boolean
    setShow: Dispatch<SetStateAction<boolean>>
    onClose?: () => void
    className?: string
    style?: CSSProperties
    children?: ReactNode
}

type ParagraphProps = {
    className?: string
    style?: CSSProperties
    children?: ReactNode
}

type PopoverProps = {
    referenceElement: HTMLElement | null
    show: boolean
    setShow: Dispatch<SetStateAction<boolean>>
    placement?: string
    className?: string
    style?: CSSProperties
    children?: ReactNode
}

type ProgressProps = {
    className?: string
    style?: CSSProperties
}

type Option = {
    label: string
    value: string
}

type OptionGroup = {
    label: string
    options: Array<Option>
}

type Column = ReactNode

type Row = {
    [key: string]: ReactNode
}

type TableProps = {
    columns: Column[]
    rows?: Row[]
    className?: string
    style?: CSSProperties
}

type SelectProps = {
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
export type BasePopoverProps = PopoverProps
export type BaseProgressProps = ProgressProps
export type BaseSelectProps = SelectProps
export type BaseTableProps = TableProps
