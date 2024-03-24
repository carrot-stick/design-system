import { useContext, useEffect, useState } from "react";
import { SelectContext } from "./Select.context";

export const useSelect = ({ defaultValue }: { defaultValue?: string }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [option, setOption] = useState<string>("");

  useEffect(() => {
    if (defaultValue) {
      setOption(defaultValue);
    }
  }, [defaultValue]);

  return { isOpen, option, setIsOpen, setOption };
};

export const useSelectContext = () => {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error("컴포넌트에 필요한 컨텍스트가 없습니다.");
  }
  return context;
};
