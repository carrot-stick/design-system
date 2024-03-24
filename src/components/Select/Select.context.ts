import { Dispatch, SetStateAction, createContext } from "react";

export interface SelectContextTypes {
  isOpen: boolean;
  option: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setOption: Dispatch<SetStateAction<string>>;
  onSelect: (value: string) => void;
}

export const SelectContext = createContext<SelectContextTypes | null>(null);
