import styled, { CSSObject } from 'styled-components';
import { neutral } from '../../styles/color';

interface InputContainerStyleProps {
  size: string;
  variant: string;
  error: boolean;
  borderColor: string;
  focusBorderColor?: string;
  errorBorderColor?: string;
}

export const InputContainer = styled.input<InputContainerStyleProps>`
  ${({ size }) => InputSizeType[size]};

  ${({ variant, borderColor, error }) =>
    InputVariantType[variant](undefined, borderColor, error)};

  &:focus {
    ${({ variant, focusBorderColor }) =>
      InputVariantType[variant](focusBorderColor, undefined, undefined).focus};
  }

  &: disabled {
    cursor: not-allowed;
  }

  font-family: 'Pretendard-Regular';
`;

// input size style
export const InputSizeType: Record<string, CSSObject> = {
  sm: {
    // maxHeight: '40px',
    fontSize: '13px',
    padding: '8.75px 10px',
    borderRadius: '6px',
    border: '1.5px solid',
  },
  md: {
    // maxHeight: '48px',
    fontSize: '15px',
    padding: '13.5px 12px',
    borderRadius: '8px',
    border: '1.75px solid',
  },
  lg: {
    // maxHeight: '56px',
    fontSize: '16px',
    padding: '16.5px 14px',
    borderRadius: '10px',
    border: '2px solid',
  },
};

// input variant style
export const InputVariantType: Record<
  string,
  (
    focusBorderColor?: string,
    borderColor?: string,
    error?: boolean,
  ) => CSSObject
> = {
  outline: (focusBorderColor, borderColor) => ({
    borderColor: borderColor,
    focus: {
      outlineColor: setFocusBorderColor(focusBorderColor),
    },
  }),
  field: (focusBorderColor, borderColor, error) => ({
    backgroundColor: `${neutral['75']}`,
    border: setErrorBorderColor(error!, borderColor!),
    focus: {
      outlineColor: setFocusBorderColor(focusBorderColor),
      backgroundColor: 'transparent',
    },
  }),
  flushed: (focusBorderColor, borderColor) => ({
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: `1.75px solid ${borderColor}`,
    borderRadius: '0',
    focus: {
      outline: 'none',
      borderBottom: `1.75px solid ${setFocusBorderColor(focusBorderColor)}`,
    },
  }),
  unStyled: () => ({
    backgroundColor: 'none',
    border: 'none',
    focus: {
      outline: 'none',
    },
  }),
};

// 포커스 테두리 색상 설정
const setFocusBorderColor = (focusBorderColor?: string) => {
  return focusBorderColor ? focusBorderColor : `${neutral['800']}`;
};

// 에러 테두리 색상 설정
const setErrorBorderColor = (error: boolean, borderColor: string) => {
  return error ? `1.75px solid ${borderColor}` : 'none';
};
