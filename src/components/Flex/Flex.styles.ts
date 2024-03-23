import styled from "styled-components";
import theme from "../../styles";

interface FlexContainerProps {
  direction: string;
  justify: string;
  align: string;
}

export const FlexContainer = styled.div<FlexContainerProps>`
  width: 380px;
  height: 380px;
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  padding: 24px;
  background-color: ${theme.colors.gray[20]};
`;

export const Element = styled.div`
  display: flex;
  flex-direction: coulmn;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  color: ${theme.colors.white1};
  background-color: ${theme.colors.serenity[60]};
`;
