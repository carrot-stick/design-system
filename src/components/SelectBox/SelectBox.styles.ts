import styled from "styled-components"
import { SelectBoxProps } from "./SelectBox.types"
import { getVisible } from "./SelectBox.utils"

export const SelectBox = styled.select<SelectBoxProps>`
    width: ${({visible}) => getVisible(visible).width};
    font-size: ${({visible}) => getVisible(visible).font};
`