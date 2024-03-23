import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Button";

const meta = {
  title: "Design-system/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    size: "large",
    backgroundColor: "#f7cac9",
    label: "Solid",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    backgroundColor: "#92a8d1",
    label: "Outline",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    backgroundColor: "#b5addd",
    label: "Ghost",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    backgroundColor: "#72d45233",
    label: "Link",
  },
};
