import { Switch } from "@mantine/core"
import { ToggleProps } from "./_types"
import { prepend } from "./_utils"
import React, { forwardRef } from "react"

export const BaseToggle = forwardRef<HTMLInputElement, ToggleProps>((props, ref) => {
    const { id, className, ...rest } = props
    return (
        <div className={prepend("BaseToggle", className)}>
            <Switch ref={ref} id={id} {...rest} />
        </div>
    )
})
