import Trigger from "./Trigger";
import OptionList from "./OptionList";
import Option from "./Option";
import * as S from "./Select.styles";
import { ReactNode } from "react";
import { SelectContext } from "./Select.context";
import { useSelect } from "./Select.hooks";

export interface SelectProps {
  children: ReactNode;
  defaultValue?: string;
  onSelect: (props: string) => void;
}

const Select = ({ children, defaultValue, onSelect }: SelectProps) => {
  const { isOpen, option, setIsOpen, setOption } = useSelect({ defaultValue });

  return (
    <SelectContext.Provider
      value={{ isOpen, option, setOption, setIsOpen, onSelect }}
    >
      <S.Container width="280px" height="56px">
        {children}
      </S.Container>
    </SelectContext.Provider>
  );
};

export default Select;

Select.Trigger = Trigger;
Select.OptionList = OptionList;
Select.Option = Option;
