import theme from "../../styles";

export type ButtonSize = "sm" | "md" | "lg";
export type ButtonVariant = "contained" | "outlined" | "text";
export type ButtonColor = "serenity" | "roseQuartz" | "gray";

interface ButtonStyle {
  height: string;
  width: string;
  border: string;
  fontSize: string;
  fontColor: string;
  backgroundColor: string;
  hoverColor: string;
}

export const setButtonStyles = (
  size: ButtonSize,
  variant: ButtonVariant,
  color: ButtonColor
): ButtonStyle => {
  const buttonSizeMap = {
    sm: {
      width: theme.sizes.button.sm.width,
      height: theme.sizes.button.sm.height,
      fontSize: theme.sizes.button.sm.fontSize,
    },
    md: {
      width: theme.sizes.button.md.width,
      height: theme.sizes.button.md.height,
      fontSize: theme.sizes.button.md.fontSize,
    },
    lg: {
      width: theme.sizes.button.lg.width,
      height: theme.sizes.button.lg.height,
      fontSize: theme.sizes.button.lg.fontSize,
    },
  };

  const buttonColorMap = {
    serenity: {
      buttonColor: theme.colors.serenity[60],
      hoverColor: theme.colors.serenity[100],
      fontColor: theme.colors.white1,
    },
    roseQuartz: {
      buttonColor: theme.colors.roseQuartz[60],
      hoverColor: theme.colors.roseQuartz[100],
      fontColor: theme.colors.black1,
    },
    gray: {
      buttonColor: theme.colors.gray[60],
      hoverColor: theme.colors.gray[100],
      fontColor: theme.colors.black1,
    },
  };

  const buttonStyle = {
    contained: {
      width: buttonSizeMap[size].width,
      height: buttonSizeMap[size].height,
      fontSize: buttonSizeMap[size].fontSize,
      border: "none",
      fontColor: buttonColorMap[color].fontColor,
      backgroundColor: buttonColorMap[color].buttonColor,
      hoverColor: buttonColorMap[color].hoverColor,
    },
    outlined: {
      width: buttonSizeMap[size].width,
      height: buttonSizeMap[size].height,
      fontSize: buttonSizeMap[size].fontSize,
      border: `1px solid ${buttonColorMap[color].buttonColor}`,
      fontColor: buttonColorMap[color].fontColor,
      backgroundColor: "transparent",
      hoverColor: buttonColorMap[color].hoverColor,
    },
    text: {
      width: buttonSizeMap[size].width,
      height: buttonSizeMap[size].height,
      fontSize: buttonSizeMap[size].fontSize,
      border: "none",
      fontColor: buttonColorMap[color].fontColor,
      backgroundColor: "transparent",
      hoverColor: buttonColorMap[color].hoverColor,
    },
  };

  return buttonStyle[variant];
};
