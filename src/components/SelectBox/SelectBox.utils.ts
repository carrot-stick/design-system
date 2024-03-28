import { visibleTokens } from "./SelectBox.tokens";
import { SelectBoxProps } from "./SelectBox.types";

export const getVisible = (visible: SelectBoxProps["visible"]) => visibleTokens[visible] || null;