import Input, { InputProps } from "./Input";
import { Meta, StoryObj } from "@storybook/react";
import { InputList } from "./Input.styles";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    size: {
      description: "`string` 타입의 Input `size` ",
      table: {
        type: {
          summary: null,
        },
      },
      control: { type: "radio" },
      options: ["sm", "md", "lg"],
    },
    variant: {
      type: "string",
      description: "`string` 타입의 Input `variant` ",
      table: {
        type: {
          summary: null,
        },
      },
      control: { type: "radio" },
      options: ["primary", "outline"],
    },
    color: {
      description: "`string` 타입의 Input `color`",
      table: {
        type: {
          summary: null,
        },
      },
      control: { type: "radio" },
      options: ["gray", "darkBlue", "white"],
    },
  },
};

export default meta;

export const ExampleInput: StoryObj<InputProps> = {
  args: {
    size: "md",
    variant: "primary",
    color: "gray",
    disabled: false,
  },
};

export const PrimaryInput: StoryObj<InputProps> = {
  args: {
    color: "gray",
  },
  render: (args) => {
    return (
      <InputList>
        <Input size="sm" variant="primary" color={args.color} />
        <Input size="md" variant="primary" color={args.color} />
        <Input size="lg" variant="primary" color={args.color} />
      </InputList>
    );
  },
};

export const OutlineInput: StoryObj<InputProps> = {
  args: {
    color: "gray",
  },
  render: (args) => {
    return (
      <InputList>
        <Input size="sm" variant="outline" color={args.color} />
        <Input size="md" variant="outline" color={args.color} />
        <Input size="lg" variant="outline" color={args.color} />
      </InputList>
    );
  },
};
