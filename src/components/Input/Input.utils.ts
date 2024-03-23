import theme from "../../styles";
import { InputSize, InputColor, InputVariant } from "./Input";

export const primaryColorMap = {
  gray: {
    background: theme.colors.sjGray[10],
    disabled: theme.colors.sjGray[20],
  },
  darkBlue: {
    background: theme.colors.sjDarkBlue[10],
    disabled: theme.colors.sjDarkBlue[20],
  },
  white: {
    background: theme.colors.sjWhite,
    disabled: theme.colors.sjGray[10],
  },
};

export const outlineColorMap = {
  gray: {
    background: theme.colors.sjGray[10],
    disabled: theme.colors.sjGray[20],
    border: theme.colors.sjBlack,
  },
  darkBlue: {
    background: theme.colors.sjDarkBlue[10],
    disabled: theme.colors.sjDarkBlue[20],
    border: theme.colors.sjBlack,
  },
  white: {
    background: theme.colors.sjWhite,
    disabled: theme.colors.sjGray[20],
    border: theme.colors.sjBlack,
  },
};

export const getInputStyleByColor = (color: InputColor) => {
  return {
    primary: {
      border: "none",
      backgroundColor: primaryColorMap[color].background,
      disabledColor: primaryColorMap[color].disabled,
    },
    outline: {
      border: `1px solid ${outlineColorMap[color].border}`,
      backgroundColor: outlineColorMap[color].background,
      disabledColor: outlineColorMap[color].disabled,
    },
  };
};

const inputSizeMap: {
  [key in InputSize]: { width: string; height: string; fontSize: string };
} = {
  sm: { width: "240px", height: "48px", fontSize: "14px" },
  md: { width: "260px", height: "56px", fontSize: "16px" },
  lg: { width: "280px", height: "64px", fontSize: "18px" },
};

export const getInputStyles = (
  size: InputSize,
  color: InputColor,
  variant: InputVariant,
  width?: string
) => {
  return {
    ...inputSizeMap[size],
    width: width || inputSizeMap[size].width,
    ...getInputStyleByColor(color)[variant],
  };
};
