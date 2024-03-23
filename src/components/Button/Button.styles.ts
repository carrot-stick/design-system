import styled from "styled-components";

export interface StyledButtonProps {
  width: string;
  height: string;
  border: string;
  fontSize: string;
  fontColor: string;
  backgroundColor: string;
  hoverColor: string;
}

export const StyledButton = styled.button<StyledButtonProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: ${({ border }) => border};
  border-radius: 3em;
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ fontColor }) => fontColor};
  background-color: ${({ backgroundColor }) => backgroundColor};

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor};
    transition: all 0.5s;
  }
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;
