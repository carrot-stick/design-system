import { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Design-system/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["sm", "md", "lg"],
    },
    variant: {
      control: { type: "select" },
      options: ["contained", "outlined", "text"],
    },
    color: {
      control: { type: "radio" },
      options: ["serenity", "roseQuartz", "gray"],
    },
  },
};

export default meta;

export const TestButton: StoryObj<ButtonProps> = {
  args: {
    children: "click",
    size: "md",
    variant: "contained",
    color: "serenity",
  },
};

export const ContainedButton: StoryObj<ButtonProps> = {
  args: {
    children: "click",
    size: "md",
    variant: "contained",
    color: "serenity",
  },
};

export const OutlinedButton: StoryObj<ButtonProps> = {
  args: {
    children: "click",
    size: "md",
    variant: "outlined",
    color: "roseQuartz",
  },
};

export const TextButton: StoryObj<ButtonProps> = {
  args: {
    children: "click",
    size: "md",
    variant: "text",
    color: "gray",
  },
};
