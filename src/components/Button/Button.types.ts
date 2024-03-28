import { ButtonHTMLAttributes } from "react";

export interface ButtonStyledProps {
    size: "sm" | "md" | "lg";
    variant: "solid" | "outline" | "dotted";
    color: Pick<ButtonHTMLAttributes<HTMLButtonElement>, "color"> | string;
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    disabled: boolean
}

export interface ButtonProps
  extends ButtonStyledProps {
  children?: React.ReactNode;
}