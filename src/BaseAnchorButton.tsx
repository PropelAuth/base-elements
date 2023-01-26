import { BaseAnchorButtonProps } from "./_types"
import { BaseLoader } from "./BaseLoader"
import { prepend } from "./_utils"
import React, { forwardRef } from "react"

export const BaseAnchorButton = forwardRef<HTMLButtonElement, BaseAnchorButtonProps>((props, ref) => {
    const { loading, className, children, ...rest } = props
    return (
        <button ref={ref} className={prepend("BaseAnchorButton", className)} {...rest}>
            {loading ? <BaseLoader /> : children}
        </button>
    )
})
