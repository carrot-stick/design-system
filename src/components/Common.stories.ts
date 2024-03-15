import type { Meta, StoryObj } from "@storybook/react";
import { CommonButton } from "./Common";

const meta: Meta = {
  title: "Design-system/Buttons",
  component: CommonButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // argTypes: {
  //   colorScheme: { control: "colorScheme" },
  // },
} satisfies Meta<typeof CommonButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    size: "lg",
    variant: "solid",
    colorScheme: "red",
    label: "Red",
  },
};

export const Outline: Story = {
  args: {
    size: "md",
    variant: "outline",
    colorScheme: "yellow",
    label: "Yellow",
  },
};

export const Ghost: Story = {
  args: {
    size: "md",
    variant: "ghost",
    colorScheme: "purple",
    label: "Purple",
  },
};

export const Link: Story = {
  args: {
    size: "md",
    variant: "link",
    colorScheme: "teal",
    label: "Teal",
  },
};
