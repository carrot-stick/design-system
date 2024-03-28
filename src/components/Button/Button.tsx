import React from "react"
import * as SC from "./Button.styles"
import { ButtonProps } from "./Button.types"

const Button: React.FC<ButtonProps> = ({
    children,
    size = "sm",
    variant = "solid",
    color = "red",
    onClick,
    disabled,
    ...rest
}) => {
    
    return(
        <SC.Button
            size={size}
            variant={variant}
            color={color}
            onClick={onClick}
            disabled={disabled}
            {...rest}
        >
            {children}
        </SC.Button>
    )
}

export default Button