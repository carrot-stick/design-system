import * as SC from "./Flex.styles";
import {
  FlexDirection,
  FlexJustifyContent,
  FlexAlignItems,
} from "./Flex.utils";

export interface FlexProps {
  direction?: FlexDirection;
  justify?: FlexJustifyContent;
  align?: FlexAlignItems;
  children?: React.ReactNode;
}

const Flex: React.FC<FlexProps> = ({
  direction = "row",
  justify = "center",
  align = "center",
  children,
  ...props
}) => {
  return (
    <SC.FlexContainer
      direction={direction}
      justify={justify}
      align={align}
      {...props}
    >
      {children}
    </SC.FlexContainer>
  );
};

export default Flex;
