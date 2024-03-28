import styled, { css } from 'styled-components';
import { FlexProps } from './Flex';

const setJustifyContent = (justify: string) => {
  switch (justify) {
    case 'between':
      return 'space-between';
    case 'around':
      return 'space-around';
    case 'evenly':
      return 'space-evenly';
    default:
      return justify;
  }
};

export const FlexContainer = styled.div<FlexProps>`
  display: flex;
  align-items: ${props => props.align};
  flex-direction: ${props => props.direction};
  justify-content: ${props => setJustifyContent(props.justify)};
  flex-wrap: ${props => props.wrap};
  gap: ${props => props.gap}px;

  /* width 또는 height 조건부 설정 */
  ${props =>
    props.size &&
    css`
      ${props.direction.includes('column')
        ? 'height'
        : 'width'}: ${props.size}px;
    `}
`;
