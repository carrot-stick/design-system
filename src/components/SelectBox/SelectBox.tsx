import React from "react"
import * as SC from "./SelectBox.styles"
import { SelectBoxProps } from "./SelectBox.types"

const SelectBox: React.FC<SelectBoxProps> = ({visible, size, multiple, onChange, disabled}) => {


    return(
        <SC.SelectBox onChange={onChange} visible={visible} size={size} multiple={multiple} disabled={disabled}>
            <option key="1" value="1">1</option>
            <option key="2" value="2">2</option>
            <option key="3" value="3">3</option>
            <option key="4" value="4">4</option>
            <option key="5" value="5">5</option>
        </SC.SelectBox>
    )
}

export default SelectBox