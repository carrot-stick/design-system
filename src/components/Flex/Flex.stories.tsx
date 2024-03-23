import { Meta, StoryObj } from "@storybook/react";
import { Element } from "./Flex.styles";
import Flex, { FlexProps } from "./Flex";

const meta: Meta<typeof Flex> = {
  title: "Design-system/Flex",
  component: Flex,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    direction: {
      control: { type: "radio" },
      options: ["row", "column"],
    },
    justify: {
      control: { type: "select" },
      options: [
        "flex-start",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
        "flex-end",
      ],
    },
    align: {
      control: { type: "select" },
      options: [
        "flex-start",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
        "flex-end",
      ],
    },
  },
};

export default meta;

export const RowFlexBox: StoryObj<FlexProps> = {
  args: {
    direction: "row",
    justify: "flex-start",
    align: "flex-start",
  },
  render: (args) => {
    return (
      <Flex
        direction={args.direction}
        justify={args.justify}
        align={args.align}
      >
        <Element>1</Element>
        <Element>2</Element>
        <Element>3</Element>
      </Flex>
    );
  },
};

export const ColumnFlexBox: StoryObj<FlexProps> = {
  args: {
    direction: "column",
    justify: "flex-start",
    align: "flex-start",
  },
  render: (args) => {
    return (
      <Flex
        direction={args.direction}
        justify={args.justify}
        align={args.align}
      >
        <Element>1</Element>
        <Element>2</Element>
        <Element>3</Element>
      </Flex>
    );
  },
};
