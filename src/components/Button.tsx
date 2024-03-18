import styled from "styled-components";

interface ButtonProps {
  size?: "small" | "medium" | "large";
  variant?: "solid" | "outline" | "ghost" | "link";
  backgroundColor?: string;
  label: string;
  onClick?: () => void;
}

export const Button = ({
  size = "medium",
  variant = "solid",
  backgroundColor,
  label,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      size={size}
      variant={variant}
      backgroundColor={backgroundColor}
      label={label}
      onClick={onClick}
      {...props}
    >
      <span className="label">{label}</span>
    </StyledButton>
  );
};

const StyledButton = styled.button<ButtonProps>`
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  font-size: ${({ size }) => {
    switch (size) {
      case "small":
        return "14px";
      case "medium":
        return "16px";
      case "large":
        return "18px";
    }
  }};
  padding: ${({ size }) => {
    switch (size) {
      case "small":
        return "10px 16px";
      case "medium":
        return "11px 20px";
      case "large":
        return "12px 24px";
    }
  }};
  background-color: ${({ variant, backgroundColor }) => {
    switch (variant) {
      case "ghost":
        return "transparent";
      default:
        return backgroundColor;
    }
  }};
  transition: background-color 0.5s;
  &:hover {
    background-color: ${({ variant, backgroundColor }) => {
      switch (variant) {
        case "ghost":
          return `${backgroundColor}50`;
        default:
          return backgroundColor;
      }
    }};
  }
  box-shadow: ${({ variant }) => {
    switch (variant) {
      case "outline":
        return "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset";
      default:
        return "none";
    }
  }};

  .label {
    &:hover {
      border-bottom: ${({ variant }) => {
        switch (variant) {
          case "link":
            return "1px solid #000000";
          default:
            return "none";
        }
      }};
    }
  }
`;
