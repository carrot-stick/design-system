import styled, { CSSObject } from 'styled-components';

interface ButtonContainerStyleProps {
  color: string;
  size: CSSObject;
  variant: string;
}

const setBackgroundStyle = (variant: string, color: string) => {
  switch (variant) {
    case 'solid':
      return color;
    default:
      return 'none';
  }
};

const setBorderStyle = (variant: string, color: string) => {
  switch (variant) {
    case 'outline':
      return `0.125rem solid ${color}`;
    default:
      return 'none';
  }
};

const setTextStyle = (variant: string) => {
  switch (variant) {
    case 'link':
      return 'underline';
    default:
      return null;
  }
};

const setColorStyle = (variant: string, color: string) => {
  switch (variant) {
    case 'link':
      return color;
    case 'outline':
      return color;
    default:
      return 'white';
  }
};

export const ButtonContainer = styled.button<ButtonContainerStyleProps>`
  ${props => props.size};

  color: ${props => setColorStyle(props.variant, props.color)};
  background: ${props => setBackgroundStyle(props.variant, props.color)};
  border: ${props => setBorderStyle(props.variant, props.color)};
  text-decoration: ${props => setTextStyle(props.variant)};

  &: disabled {
    cursor: not-allowed;
  }

  font-family: 'Pretendard-Medium';
  display: inline-block;
`;

// button size style
export const ButtonSizeType: Record<string, CSSObject> = {
  small: {
    fontSize: '14px',
    padding: '10px 12px',
    borderRadius: '8px',
  },
  medium: {
    fontSize: '18px',
    padding: '12px 16px',
    borderRadius: '10px',
  },
  large: {
    fontSize: '22px',
    padding: '14px 20px',
    borderRadius: '12px',
  },
};
