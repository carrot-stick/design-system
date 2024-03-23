import styled from "styled-components";
import { getSize, getBorder, getPadding } from "./Button.utils";
import { ButtonStyledProps } from "./Button.types";


export const Button = styled.button<ButtonStyledProps>`
    color: white;
    font-size: ${({ size }) => getSize(size)};
    border-radius: 5px; 
    padding: ${({ size }) => getPadding(size)};
    background-color: ${({ color }) => color};
    border: ${({ variant }) => getBorder(variant)};

    &:disabled {
        background-color: gray;
    }
`

export const ButtonList = styled.div`
    display: flex;
    gap: 20px;
    flex-direction: column;
`
