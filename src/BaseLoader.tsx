import { BaseLoaderProps } from "./_types"
import { prepend } from "./_utils"
import React, { forwardRef } from "react"

export const BaseLoader = forwardRef<HTMLSpanElement, BaseLoaderProps>((props, ref) => {
    const { className, ...rest } = props
    return (
        <span ref={ref} className={prepend("BaseLoader", className)} {...rest}>
            Loading...
        </span>
    )
})
