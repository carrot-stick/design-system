import React, { SelectHTMLAttributes, useState } from 'react';
import { neutral } from '../../styles/color';
import * as S from './Select.style';

export interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  placeholder?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'outline' | 'field' | 'flushed' | 'unStyled';
  borderColor?: string;
  optionList?: string[];
}

const Select = ({
  placeholder = 'Select Option',
  size = 'md',
  variant = 'outline',
  borderColor = neutral['200'],
  optionList = ['Option 1', 'Option 2', 'Option 3'],
  ...restProps
}: SelectProps) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <S.SelectContainer size={size} variant={variant} borderColor={borderColor}>
      <S.SelectWrapper
        name={restProps.name}
        value={selectedOption}
        onChange={handleSelectChange}
        size={size}
      >
        <option value="" selected hidden>
          {placeholder}
        </option>
        {optionList.map(option => (
          <option value={option}>{option}</option>
        ))}
      </S.SelectWrapper>
    </S.SelectContainer>
  );
};

export default Select;
