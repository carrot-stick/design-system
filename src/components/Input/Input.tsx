import * as S from "./Input.styles";
import { InputHTMLAttributes, forwardRef } from "react";
import { getInputStyles } from "./Input.utils";

export type InputSize = "sm" | "md" | "lg";

export type InputColor = "gray" | "darkBlue" | "white";

export type InputVariant = "primary" | "outline";

export interface InputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "size" | "color" | "width" | "height"
  > {
  size?: InputSize;
  variant?: InputVariant;
  color?: InputColor;
  width?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { size = "md", color = "gray", variant = "primary", width, ...restProps },
    ref
  ) => {
    const inputStyles = getInputStyles(size, color, variant, width);

    return <S.StyledInput ref={ref} {...inputStyles} {...restProps} />;
  }
);

Input.displayName = "Input";

export default Input;
