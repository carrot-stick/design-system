import styled from "styled-components";

export interface StyledButtonProps {
  padding: string;
  border: string;
  fontSize: string;
  fontColor: string;
  backgroundColor: string;
  hoverColor: string;
}

export const StyledButton = styled.button<StyledButtonProps>`
  padding: ${({ padding }) => padding};
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
