import { BaseInputProps } from "./_types"
import { prepend } from "./_utils"
import React, { forwardRef } from "react"

export const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>((props, ref) => {
    const { className, ...rest } = props
    return <input ref={ref} className={prepend("BaseInput", className)} {...rest} />
})
