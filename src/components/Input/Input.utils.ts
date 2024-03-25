import theme from "../../styles";

export type InputSize = "sm" | "md" | "lg";
export type InputVariant = "outlined" | "filled" | "unstyled";
export type InputColor = "serenity" | "green";

export interface InputStyle {
  width: string;
  height: string;
  border: string;
  fontSize: string;
  fontColor: string;
  inputColor: string;
  backgroundColor: string;
  hoverColor: string;
}

export const setInputStyles = (
  size: InputSize,
  variant: InputVariant,
  color: InputColor
): InputStyle => {
  const inputSizeMap = {
    sm: {
      width: theme.sizes.sm.width,
      height: theme.sizes.sm.height,
      fontSize: theme.sizes.sm.fontSize,
    },
    md: {
      width: theme.sizes.md.width,
      height: theme.sizes.md.height,
      fontSize: theme.sizes.md.fontSize,
    },
    lg: {
      width: theme.sizes.lg.width,
      height: theme.sizes.lg.height,
      fontSize: theme.sizes.lg.fontSize,
    },
  };

  const inputColorMap = {
    serenity: {
      fontColor: theme.colors.main_fontColor,
      inputColor: theme.colors.serenity[60],
      backgroundColor: theme.colors.serenity[40],
      hoverColor: theme.colors.serenity[100],
    },
    green: {
      fontColor: theme.colors.main_fontColor,
      inputColor: theme.colors.green[60],
      backgroundColor: theme.colors.green[40],
      hoverColor: theme.colors.green[100],
    },
  };

  const inputStyle = {
    outlined: {
      width: inputSizeMap[size].width,
      height: inputSizeMap[size].height,
      border: `1px solid ${inputColorMap[color].inputColor}`,
      fontSize: inputSizeMap[size].fontSize,
      fontColor: inputColorMap[color].fontColor,
      inputColor: inputColorMap[color].inputColor,
      backgroundColor: "transparent",
      hoverColor: inputColorMap[color].hoverColor,
    },
    filled: {
      width: inputSizeMap[size].width,
      height: inputSizeMap[size].height,
      border: "none",
      fontSize: inputSizeMap[size].fontSize,
      fontColor: inputColorMap[color].fontColor,
      inputColor: inputColorMap[color].inputColor,
      backgroundColor: inputColorMap[color].backgroundColor,
      hoverColor: inputColorMap[color].hoverColor,
    },
    unstyled: {
      width: inputSizeMap[size].width,
      height: inputSizeMap[size].height,
      border: "none",
      fontSize: inputSizeMap[size].fontSize,
      fontColor: inputColorMap[color].fontColor,
      inputColor: inputColorMap[color].inputColor,
      backgroundColor: "transparent",
      hoverColor: inputColorMap[color].hoverColor,
    },
  };

  return inputStyle[variant];
};
