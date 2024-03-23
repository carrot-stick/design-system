import { ComponentPropsWithoutRef, Ref, forwardRef } from "react";
import { StyledFlex } from "./Flex.styles";

export type FlexDirection = "column" | "row";

export type FlexAlignItems =
  | "stretch"
  | "center"
  | "flex-start"
  | "flex-end"
  | "baseline";

export type FlexJustifyContent =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around";

export type FlexProps = ComponentPropsWithoutRef<"div"> & {
  width?: string;
  height?: string;
  direction?: FlexDirection;
  alignItems?: FlexAlignItems;
  justifyContent?: FlexJustifyContent;
  gap?: number;
};

const Flex = forwardRef<HTMLDivElement>(
  (
    {
      children,
      width = "auto",
      height = "auto",
      direction = "row",
      alignItems = "stretch",
      justifyContent = "flex-start",
      gap = 0,
      ...restProps
    }: FlexProps,
    ref: Ref<HTMLDivElement>
  ) => {
    return (
      <StyledFlex
        ref={ref}
        width={width}
        height={height}
        direction={direction}
        alignItems={alignItems}
        justifyContent={justifyContent}
        gap={gap}
        {...restProps}
      >
        {children}
      </StyledFlex>
    );
  }
);

Flex.displayName = "Flex";

export default Flex;
