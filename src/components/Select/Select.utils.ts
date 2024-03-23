import theme from "../../styles";

export type SelectSize = "sm" | "md" | "lg";
export type SelectVariant = "outlined" | "filled";
export type SelectColor = "serenity";

export interface SelectStyle {
  width: string;
  height: string;
  border: string;
  fontSize: string;
  selectColor: string;
  backgroundColor: string;
  hoverColor: string;
  disabledColor: string;
}

export const setSelectStyles = (
  size: SelectSize,
  variant: SelectVariant,
  color: SelectColor
): SelectStyle => {
  const selectSizeMap = {
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
  const selectColorMap = {
    serenity: {
      selectColor: theme.colors.serenity[60],
      backgroundColor: theme.colors.serenity[40],
      hoverColor: theme.colors.serenity[100],
      disabledColor: theme.colors.gray[40],
    },
  };

  const selectStyle = {
    outlined: {
      width: selectSizeMap[size].width,
      height: selectSizeMap[size].height,
      border: `1px solid ${selectColorMap[color].selectColor}`,
      fontSize: selectSizeMap[size].fontSize,
      selectColor: selectColorMap[color].selectColor,
      backgroundColor: "transparent",
      hoverColor: selectColorMap[color].hoverColor,
      disabledColor: selectColorMap[color].disabledColor,
    },
    filled: {
      width: selectSizeMap[size].width,
      height: selectSizeMap[size].height,
      border: "none",
      fontSize: selectSizeMap[size].fontSize,
      selectColor: selectColorMap[color].selectColor,
      backgroundColor: selectColorMap[color].backgroundColor,
      hoverColor: selectColorMap[color].hoverColor,
      disabledColor: selectColorMap[color].disabledColor,
    },
  };

  return selectStyle[variant];
};
