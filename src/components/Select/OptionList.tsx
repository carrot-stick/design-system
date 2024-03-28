import * as S from "./Select.styles";
import { ReactNode } from "react";
import { useSelectContext } from "./Select.hooks";

export interface OptionListProps {
  children?: ReactNode;
}

const OptionList = ({ children }: OptionListProps) => {
  const { isOpen } = useSelectContext();

  return isOpen ? (
    <S.Dropdown
      aria-labelledby="listbox-option"
      id="select-list"
      role="listbox"
    >
      {children}
    </S.Dropdown>
  ) : null;
};

export default OptionList;
