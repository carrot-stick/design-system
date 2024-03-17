import * as S from "./Button.styles";
import { ButtonHTMLAttributes } from "react";
import { setButtonStyles } from "./Button.utils";

export type ButtonSize = "sm" | "md" | "lg";

export type ButtonVariant = "primary" | "secondary" | "outline";

export type ButtonColor = "gray" | "green" | "darkBlue";

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  size?: ButtonSize;
  variant?: ButtonVariant;
  color?: ButtonColor;
  children: React.ReactNode;
}

const Button = ({
  children,
  size = "sm",
  variant = "primary",
  color = "gray",
  disabled = false,
  ...restProps
}: ButtonProps) => {
  const {
    width,
    height,
    border,
    backgroundColor,
    disabledColor,
    fontColor,
    hoverColor,
    fontSize,
  } = setButtonStyles(size, variant, color);

  return (
    <S.StyledButton
      width={width}
      height={height}
      border={border}
      backgroundColor={disabled ? disabledColor : backgroundColor}
      color={fontColor}
      hoverColor={hoverColor}
      fontSize={fontSize}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </S.StyledButton>
  );
};

export default Button;
