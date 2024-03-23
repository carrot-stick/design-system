import styled, { css } from "styled-components";

export interface StyledSelectProps {
  width: string;
  height: string;
  border: string;
  fontSize: string;
  selectColor: string;
  backgroundColor: string;
  hoverColor: string;
  disabledColor: string;
  variant: "outlined" | "filled";
}

export const StyledSelect = styled.select<StyledSelectProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: ${({ border }) => border};
  outline: none;
  border-radius: 6px;
  padding: 0 12px;
  font-size: ${({ fontSize }) => fontSize};
  background-color: ${({ backgroundColor }) => backgroundColor};

  &: disabled {
    cursor: not-allowed;
  }

  ${({ variant, hoverColor, disabled, disabledColor }) =>
    variant === "outlined" &&
    css`
      &:focus {
        border: 2px solid ${hoverColor};
      }

      &:not(:disabled):hover {
        border: 1px solid ${hoverColor};
        transition: all 0.3s ease-in-out;
      }

      ${disabled &&
      css`
        color: ${disabledColor};
        border-color: ${disabledColor};
        background-color: transparent;
      `}
    `}

  ${({ variant, hoverColor, disabled, disabledColor }) =>
    variant === "filled" &&
    css`
      &:focus {
        border: 2px solid ${hoverColor};
        background-color: transparent;
        pointer-events: none;
      }

      &:not(:disabled):hover {
        background-color: ${hoverColor};
        transition: all 0.3s ease-in-out;
      }

      ${disabled &&
      css`
        color: ${disabledColor};
        border: 1px solid ${disabledColor};
        background-color: transparent;
      `}
    `}
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;
