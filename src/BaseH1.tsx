import { BaseH1Props } from "./_types"
import { prepend } from "./_utils"
import React, { forwardRef } from "react"

export const BaseH1 = forwardRef<HTMLHeadingElement, BaseH1Props>((props, ref) => {
    const { className, children, ...rest } = props
    return (
        <h1 ref={ref} className={prepend("BaseH1", className)} {...rest}>
            {children}
        </h1>
    )
})
