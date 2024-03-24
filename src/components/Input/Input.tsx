import { InputHTMLAttributes } from 'react';
import * as S from './Input.style';
import { neutral, purple, red } from '../../styles/color';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'outline' | 'field' | 'flushed' | 'unStyled';
  state?: 'available' | 'disabled' | 'readOnly' | 'invalid';
  borderColor?: string;
  focusBorderColor?: string;
  errorBorderColor?: string;
}

const Input = ({
  size = 'md',
  variant = 'outline',
  state = 'available',
  borderColor = neutral['200'],
  focusBorderColor = purple['500'],
  errorBorderColor = red['500'],
  ...restProps
}: InputProps) => {
  const isDisabled = state === 'disabled';
  const isReadOnly = state === 'readOnly';
  const isInvalid = state === 'invalid';

  const setBorderColor = (isInvalid: boolean) => {
    return isInvalid ? errorBorderColor : borderColor;
  };

  return (
    <S.InputContainer
      type={restProps.type}
      placeholder={restProps.placeholder}
      size={size}
      variant={variant}
      borderColor={setBorderColor(isInvalid)}
      focusBorderColor={focusBorderColor}
      error={isInvalid}
      disabled={isDisabled}
      readOnly={isReadOnly}
    />
  );
};

export default Input;
