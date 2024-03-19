import theme from "../../styles";
import { ButtonColor, ButtonSize, ButtonVariant } from "./Button";

const buttonSizeMap: {
  [key in ButtonSize]: { width: string; height: string; fontSize: string };
} = {
  sm: { width: "60px", height: "40px", fontSize: "14px" },
  md: { width: "100px", height: "50px", fontSize: "16px" },
  lg: { width: "140px", height: "60px", fontSize: "18px" },
};

const buttonColorMap: {
  [key in ButtonColor]: {
    buttonColor: string;
    disabledColor: string;
    hoverColor: string;
  };
} = {
  gray: {
    hoverColor: theme.colors.sjGray[20],
    buttonColor: theme.colors.sjGray[30],
    disabledColor: theme.colors.sjGray[40],
  },
  green: {
    hoverColor: theme.colors.sjGreen[20],
    buttonColor: theme.colors.sjGreen[30],
    disabledColor: theme.colors.sjGreen[40],
  },
  darkBlue: {
    hoverColor: theme.colors.sjDarkBlue[20],
    buttonColor: theme.colors.sjDarkBlue[30],
    disabledColor: theme.colors.sjDarkBlue[40],
  },
};

const secondaryColorMap: { [key in ButtonColor]: string } = {
  gray: theme.colors.sjGray[10],
  green: theme.colors.sjGreen[10],
  darkBlue: theme.colors.sjDarkBlue[10],
};

const getButtonStyleByVariant = (color: ButtonColor) => {
  return {
    primary: {
      border: "none",
      backgroundColor: buttonColorMap[color].buttonColor,
      fontColor: theme.colors.sjWhite,
      disabledColor: buttonColorMap[color].disabledColor,
      hoverColor: buttonColorMap[color].hoverColor,
    },
    secondary: {
      border: `1px solid ${buttonColorMap[color].buttonColor}`,
      backgroundColor: secondaryColorMap[color],
      fontColor: theme.colors.sjBlack,
      disabledColor: buttonColorMap[color].disabledColor,
      hoverColor: buttonColorMap[color].hoverColor,
    },
    outline: {
      border: `3px solid ${buttonColorMap[color].buttonColor}`,
      backgroundColor: "transparent",
      fontColor: theme.colors.sjBlack,
      disabledColor: buttonColorMap[color].disabledColor,
      hoverColor: buttonColorMap[color].hoverColor,
    },
  };
};

export const setButtonStyles = (
  size: ButtonSize,
  variant: ButtonVariant,
  color: ButtonColor
) => {
  return {
    width: buttonSizeMap[size].width,
    height: buttonSizeMap[size].height,
    fontSize: buttonSizeMap[size].fontSize,
    ...getButtonStyleByVariant(color)[variant],
  };
};
