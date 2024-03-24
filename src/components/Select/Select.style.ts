import styled, { CSSObject } from 'styled-components';
import { neutral } from '../../styles/color';
import DownArrowImage from '../../assets/icon-arrow.svg';

interface SelectStyleProps {
  size: string;
  variant?: string;
  borderColor?: string;
}

export const SelectContainer = styled.div<SelectStyleProps>`
  ${({ size }) => SelectSizeType[size]};

  ${({ variant, borderColor }) => SelectVariantType[variant!](borderColor)};

  background: ${({
    variant,
  }) => `url(${DownArrowImage}) calc(100% - 16px) center ${
    variant === 'field' ? neutral['75'] : 'transparent'
  }
    no-repeat`};
  background-size: 24px;
`;

export const SelectWrapper = styled.select<SelectStyleProps>`
  ${({ size }) => SelectFontType[size]};

  &:focus {
    outline: 0 none;
  }

  width: calc(100% - 24px);
  border: none;
  appearance: none;
  background: transparent;
  font-family: 'Pretendard-Regular';
`;

// select size style
export const SelectSizeType: Record<string, CSSObject> = {
  sm: {
    padding: '8.75px 10px',
    borderRadius: '6px',
    border: '1.5px solid',
  },
  md: {
    padding: '13.5px 12px',
    borderRadius: '8px',
    border: '1.75px solid',
  },
  lg: {
    padding: '16.5px 14px',
    borderRadius: '10px',
    border: '2px solid',
  },
};

// select font size style
export const SelectFontType: Record<string, CSSObject> = {
  sm: {
    fontSize: '13px',
  },
  md: {
    fontSize: '15px',
  },
  lg: {
    fontSize: '16px',
  },
};

// select variant style
export const SelectVariantType: Record<
  string,
  (borderColor?: string) => CSSObject
> = {
  outline: borderColor => ({
    borderColor: borderColor,
  }),
  field: borderColor => ({
    backgroundColor: `${neutral['75']}`,
    border: 'none',
  }),
  flushed: borderColor => ({
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: `1.75px solid ${borderColor}`,
    borderRadius: '0',
  }),
  unStyled: () => ({
    backgroundColor: 'none',
    border: 'none',
  }),
};
