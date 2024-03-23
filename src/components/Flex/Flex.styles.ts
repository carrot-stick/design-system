import styled from "styled-components";
import theme from "../../styles";
import { FlexDirection, FlexAlignItems, FlexJustifyContent } from "./Flex";

interface StyledFlexProps {
  width: string;
  height: string;
  direction: FlexDirection;
  alignItems: FlexAlignItems;
  justifyContent: FlexJustifyContent;
  gap: number;
}

export const StyledFlex = styled.div<StyledFlexProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  gap: ${({ gap }) => gap}px;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

export const StotyItem = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${theme.colors.sjGray[70]};
`;
