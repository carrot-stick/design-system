import * as SC from "./Button.styles";
import {
  setButtonStyles,
  ButtonSize,
  ButtonVariant,
  ButtonColor,
} from "./Button.utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  variant?: ButtonVariant;
  color?: ButtonColor;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  size = "md",
  variant = "contained",
  color = "serenity",
  children,
  ...props
}) => {
  const { width, height, border, fontSize, fontColor, backgroundColor, hoverColor } =
    setButtonStyles(size, variant, color);

  return (
    <SC.StyledButton
      width={width}
      height={height}
      border={border}
      fontSize={fontSize}
      fontColor={fontColor}
      backgroundColor={backgroundColor}
      hoverColor={hoverColor}
      {...props}
    >
      {children}
    </SC.StyledButton>
  );
};

export default Button;
