import * as S from "./Select.styles";
import { ReactNode } from "react";
import { useSelectContext } from "./Select.hooks";

export interface OptionProps {
  children?: ReactNode;
  value: string;
}

const Option = ({ children, value }: OptionProps) => {
  const { setIsOpen, setOption, onSelect } = useSelectContext();

  const handleOption = () => {
    setOption(value);
    onSelect(value);
    setIsOpen(false);
  };

  return <S.OptionItem onMouseDown={handleOption}>{children}</S.OptionItem>;
};

export default Option;
