import theme from "../../styles/index";

export type ButtonSize = "sm" | "md" | "lg";
export type ButtonVariant = "contained" | "outlined" | "text";
export type ButtonColor = "serenity" | "roseQuartz" | "gray";

interface ButtonStyle {
  padding: string;
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
    sm: { padding: "12px 24px", fontSize: "14px" },
    md: { padding: "13px 26px", fontSize: "16px" },
    lg: { padding: "14px 28px", fontSize: "18px" },
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
      padding: buttonSizeMap[size].padding,
      fontSize: buttonSizeMap[size].fontSize,
      border: "none",
      fontColor: buttonColorMap[color].fontColor,
      backgroundColor: buttonColorMap[color].buttonColor,
      hoverColor: buttonColorMap[color].hoverColor,
    },
    outlined: {
      padding: buttonSizeMap[size].padding,
      fontSize: buttonSizeMap[size].fontSize,
      border: `1px solid ${buttonColorMap[color].buttonColor}`,
      fontColor: buttonColorMap[color].fontColor,
      backgroundColor: "transparent",
      hoverColor: buttonColorMap[color].hoverColor,
    },
    text: {
      padding: buttonSizeMap[size].padding,
      fontSize: buttonSizeMap[size].fontSize,
      border: "none",
      fontColor: buttonColorMap[color].fontColor,
      backgroundColor: "transparent",
      hoverColor: buttonColorMap[color].hoverColor,
    },
  };

  return buttonStyle[variant];
};
