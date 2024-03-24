import * as S from "./Select.styles";
import { ReactNode } from "react";
import { useSelectContext } from "./Select.hooks";

export interface TriggerProps {
  children?: ReactNode;
}

const Trigger = ({ children }: TriggerProps) => {
  const { isOpen, option, setIsOpen } = useSelectContext();

  return (
    <S.TriggerButton
      id="trigger-button"
      type="button"
      aria-haspopup={isOpen}
      aria-expanded={isOpen}
      aria-controls="select-list"
      onClick={() => setIsOpen(!isOpen)}
      onBlur={() => setIsOpen(false)}
    >
      <S.SelectedOptionText>{option}</S.SelectedOptionText>
      <S.ArrowIconWrapper>
        {isOpen ? <S.ArrowUpIcon /> : <S.ArrowDownIcon />}
      </S.ArrowIconWrapper>
      {children}
    </S.TriggerButton>
  );
};

export default Trigger;
