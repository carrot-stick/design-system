import styled from "styled-components";

interface InputStylesProps {
  width: string;
  height: string;
  fontSize: string;
  border: string;
  backgroundColor: string;
  disabledColor: string;
}

export const StyledInput = styled.input<InputStylesProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: 0 12px;
  border: ${({ border }) => border};
  border-radius: 10px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  font-size: ${({ fontSize }) => fontSize};

  &: disabled {
    background-color: ${({ disabledColor }) => disabledColor};
  }
`;

export const InputList = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-end;
`;
