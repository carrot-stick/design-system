import { sizeTokens } from "./InputBox.tokens";
import { InputBoxProps } from "./InputBox.types";

export const getSize = (size: InputBoxProps["size"]) => sizeTokens[size] || null;