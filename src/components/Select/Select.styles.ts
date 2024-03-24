import styled from "styled-components";
import theme from "../../styles";
import ArrowUpSvg from "../../assets/ico_arrow_up.svg?react";
import ArrowDownSvg from "../../assets/ico_arrow_down.svg?react";

export const StoryBookFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 40px;
  height: 300px;
  background: ${theme.colors.sjGray[10]};
`;

export const Container = styled.div<{ width: string; height: string }>`
  position: relative;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

export const TriggerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  background-color: ${theme.colors.sjWhite};
  border: 2px solid ${theme.colors.sjBlack};
  border-radius: 10px;
  font-size: 16px;
`;

export const SelectedOptionText = styled.span`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const ArrowIconWrapper = styled.i`
  height: 24px;
`;
export const ArrowUpIcon = styled(ArrowUpSvg)``;
export const ArrowDownIcon = styled(ArrowDownSvg)``;

export const Dropdown = styled.ul`
  display: flex;
  list-style: none;
  position: absolute;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-height: 220px;
  padding: 10px 0;
  margin: 0;
  margin-top: 6px;
  border-radius: 10px;
  background-color: ${theme.colors.sjWhite};
  box-shadow: 0px 10px 20px 0px rgba(38, 50, 56, 0.08);
  overflow: hidden;
  overflow-y: auto;
  z-index: 1;
`;

export const OptionItem = styled.li`
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.sjGray[20]};
  }
`;
