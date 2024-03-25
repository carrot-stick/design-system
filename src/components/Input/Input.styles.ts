import styled, { css } from "styled-components";

export interface StyledInputProps {
  width: string | number;
  height: string | number;
  border: string;
  fontSize: string;
  fontColor: string;
  inputColor: string;
  backgroundColor: string;
  hoverColor: string;
  variant: "outlined" | "filled" | "unstyled";
}

export const StyledInput = styled.input<StyledInputProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: ${({ border }) => border};
  outline: none;
  border-radius: 6px;
  padding: 0 12px;
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ fontColor }) => fontColor};
  background-color: ${({ backgroundColor }) => backgroundColor};

  ${({ variant, hoverColor }) =>
    variant === "outlined" &&
    css`
      &:focus {
        border: 2px solid ${hoverColor};
      }

      &:hover {
        border: 1px solid ${hoverColor};
        transition: all 0.3s ease-in-out;
      }
    `}

  ${({ variant, hoverColor }) =>
    variant === "filled" &&
    css`
      &:focus {
        border: 2px solid ${hoverColor};
        background-color: transparent;
      }

      &:hover {
        background-color: ${hoverColor};
        transition: all 0.3s ease-in-out;
      }
    `}
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;
