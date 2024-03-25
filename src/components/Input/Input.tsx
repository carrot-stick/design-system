import * as SC from "./Input.styles";
import {
  setInputStyles,
  InputSize,
  InputVariant,
  InputColor,
  InputStyle,
} from "./Input.utils";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: InputSize;
  variant?: InputVariant;
  color?: InputColor;
}

const Input: React.FC<InputProps> = ({
  size = "md",
  variant = "outlined",
  color = "green",
  placeholder,
  ...props
}) => {
  const {
    width,
    height,
    border,
    fontSize,
    fontColor,
    inputColor,
    backgroundColor,
    hoverColor,
  }: InputStyle = setInputStyles(size, variant, color);
  return (
    <SC.StyledInput
      width={width}
      height={height}
      border={border}
      fontSize={fontSize}
      fontColor={fontColor}
      inputColor={inputColor}
      backgroundColor={backgroundColor}
      hoverColor={hoverColor}
      variant={variant}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Input;
