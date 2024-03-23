import { ButtonStyledProps } from "./Button.types";
import { sizeTokens, borderTokens, paddingTokens } from "./Button.tokens";

  
  export const getSize = (size: ButtonStyledProps["size"]) => sizeTokens[size] || null;
  export const getPadding = (size: ButtonStyledProps["size"]) => paddingTokens[size] || null;
  export const getBorder = (variant: ButtonStyledProps["variant"]) => borderTokens[variant] || null;
  