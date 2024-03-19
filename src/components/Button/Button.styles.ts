import styled from "styled-components";

export interface StyledButtonProps {
  width: string;
  height: string;
  border: string;
  backgroundColor: string;
  hoverColor: string;
  fontSize: string;
}

export const StyledButton = styled.button<StyledButtonProps>`
  min-width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: 0 20px;
  border: ${({ border }) => border};
  border-radius: 10px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};

  &: hover {
    background-color: ${({ hoverColor }) => hoverColor};
    transition: all 0.3s ease-in-out;
  }

  &: disabled {
    cursor: auto;
  }
`;

export const ButtonList = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-end;
`;
