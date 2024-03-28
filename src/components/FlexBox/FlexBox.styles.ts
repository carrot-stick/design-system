import styled from "styled-components"
import { FlexBoxProps } from "./Flexbox.types"

export const FlexBox = styled.div<FlexBoxProps>`
    display: flex;
    flex-wrap: ${({wrap}) => wrap || "nowrap"};
    justify-content: ${({ justify }) => justify || "initial"};
    align-items: ${({ align }) => align || "initial"};
    flex-direction: ${({direction}) => direction || "row"};
    gap: ${({gap}) => gap || 0}px;
    width: 50vw;
    height: 50vh;
    border: 5px solid black;
`

export const Element = styled.div`
    font-size: 20px;
    padding: 10px;
    height: 70px;
    width: 70px;
`