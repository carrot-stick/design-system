import * as SC from "./Select.styles";
import {
  setSelectStyles,
  SelectSize,
  SelectVariant,
  SelectColor,
  SelectStyle,
} from "./Select.utils";

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  size?: SelectSize;
  variant?: SelectVariant;
  color?: SelectColor;
}

const Select: React.FC<SelectProps> = ({
  size = "md",
  variant = "filled",
  color = "serenity",
  disabled = false,
  ...props
}) => {
  const {
    width,
    height,
    border,
    fontSize,
    selectColor,
    backgroundColor,
    hoverColor,
    disabledColor,
  }: SelectStyle = setSelectStyles(size, variant, color);
  return (
    <SC.StyledSelect
      width={width}
      height={height}
      border={border}
      fontSize={fontSize}
      selectColor={selectColor}
      backgroundColor={backgroundColor}
      hoverColor={hoverColor}
      disabledColor={disabledColor}
      disabled={disabled}
      variant={variant}
      {...props}
    >
      <option value="">Select option</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </SC.StyledSelect>
  );
};

export default Select;
