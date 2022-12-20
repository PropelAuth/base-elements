import { BaseContainerProps } from "./_types"
import { prepend } from "./_utils"
import React, { forwardRef } from "react"

export const BaseContainer = forwardRef<HTMLDivElement, BaseContainerProps>((props, ref) => {
    const { className, children, ...rest } = props
    return (
        <div ref={ref} className={prepend("BaseContainer", className)} {...rest}>
            {children}
        </div>
    )
})
