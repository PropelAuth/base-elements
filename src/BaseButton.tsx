import { BaseButtonProps } from "./_types"
import { BaseLoader } from "./BaseLoader"
import { prepend } from "./_utils"
import React, { forwardRef } from "react"

export const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>((props, ref) => {
    const { loading, className, children, ...rest } = props
    return (
        <button ref={ref} className={prepend("BaseButton", className)} {...rest}>
            {loading ? <BaseLoader /> : children}
        </button>
    )
})
