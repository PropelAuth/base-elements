import { BaseTextAreaProps } from "./_types"
import { prepend } from "./_utils"
import React, { forwardRef } from "react"

export const BaseTextArea = forwardRef<HTMLTextAreaElement, BaseTextAreaProps>((props, ref) => {
    const { className, ...rest } = props
    return <textarea ref={ref} className={prepend("BaseTextArea", className)} {...rest} />
})
