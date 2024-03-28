import * as S from './Button.style';
import { ButtonSizeType } from './Button.style';
import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  variant: 'solid' | 'outline' | 'link';
  size: 'small' | 'medium' | 'large';
  color: string;
  children: React.ReactNode;
}

const Button = ({
  variant,
  size,
  color,
  children,
  type,
  disabled,
  onClick,
  ...restProps
}: ButtonProps) => {
  const sizeStyle = ButtonSizeType[size];

  return (
    <S.ButtonContainer
      type={type}
      color={color}
      size={sizeStyle}
      variant={variant}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </S.ButtonContainer>
  );
};

export default Button;
