import React from "react"
import * as SC from "./InputBox.styles"
import { InputBoxProps } from "./InputBox.types"

const InputBox: React.FC<InputBoxProps> = ({
    size,
    disabled,
    ...res
}) => {


    return(
        <form method="get" action="" style={{display: "inline"}}>
            <SC.InputRow size={size}>
                <SC.InputBox 
                    id={size}
                    type="text"
                    size={size}
                    disabled={disabled}
                    {...res}
                ></SC.InputBox>
                <SC.Label htmlFor={size} size={size}>Input</SC.Label>
            </SC.InputRow>
        </form>
    )
}

export default InputBox