import React from 'react';
import * as S from './Flex.style';

export interface FlexProps {
  size?: number;
  align: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
  direction: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justify: 'start' | 'center' | 'end' | 'between' | 'around';
  wrap: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap: number;
  children: React.ReactNode;
}

const Flex = ({
  size,
  align,
  direction,
  justify,
  wrap,
  gap,
  children,
}: FlexProps) => {
  return (
    <S.FlexContainer
      size={size}
      align={align}
      direction={direction}
      justify={justify}
      wrap={wrap}
      gap={gap}
    >
      {children}
    </S.FlexContainer>
  );
};

export default Flex;
