import styled from "styled-components"
import { InputBoxProps, InputRowProps } from "./InputBox.types";
import { getSize } from "./InputBox.utils";

export const InputRow = styled.div<InputRowProps>`
    width: ${({size}) => getSize(size).width};
    height: ${({size}) => getSize(size).height};
    position: relative;
    &:focus-within {
        box-shadow: 0 6px 16px rgba(101, 101, 101, .07), 0 17px 21px rgba(21, 21, 21, .2);
      }
    transition: .2s ease-in-out;
`


export const Label = styled.label<InputRowProps>`
    position: absolute;
    font-size: ${({size}) => getSize(size).font};
    transition: .2s ease-in-out;
    transform: translate(-50%, -50%);
    transform-origin: top left;
    color: gray;
    top: 50%;
    left: 50%;
`


export const InputBox = styled.input<InputBoxProps>`
    &::placeholder{
        font-style: italic;
    }
    &:focus {
    + ${Label} {
      transform: scale(.3);
      top: 0;
      left: 0;
      padding-left: 10px;
        }
    }
    position: absolute;
    font-size: ${({size}) => getSize(size).font};
    width: ${({size}) => getSize(size).width};
    height: ${({size}) => getSize(size).height};
    transition: .2s ease-in-out;
    padding-top: 15px;
`