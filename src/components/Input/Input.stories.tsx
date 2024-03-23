import { Meta, StoryObj } from "@storybook/react";
import { Stack } from "./Input.styles";
import Input, { InputProps } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Design-system/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
    },
    variant: {
      options: ["outlined", "filled", "unstyled"],
    },
    color: {
      control: { type: "radio" },
      options: ["serenity", "green"],
    },
  },
};

export default meta;

export const OutlinedInput: StoryObj<InputProps> = {
  args: {
    color: "serenity",
  },
  render: (args) => {
    return (
      <>
        <Stack>
          <Input
            size="sm"
            variant="outlined"
            color={args.color}
            placeholder="outlined input"
          />
          <Input
            size="md"
            variant="outlined"
            color={args.color}
            placeholder="outlined input"
          ></Input>
          <Input
            size="lg"
            variant="outlined"
            color={args.color}
            placeholder="outlined input"
          ></Input>
        </Stack>
      </>
    );
  },
};

export const FilledInput: StoryObj<InputProps> = {
  args: {
    color: "green",
  },
  render: (args) => {
    return (
      <>
        <Stack>
          <Input
            size="sm"
            variant="filled"
            color={args.color}
            placeholder="filled input"
          ></Input>
          <Input
            size="md"
            variant="filled"
            color={args.color}
            placeholder="filled input"
          ></Input>
          <Input
            size="lg"
            variant="filled"
            color={args.color}
            placeholder="filled input"
          ></Input>
        </Stack>
      </>
    );
  },
};

export const UnstyledInput: StoryObj<InputProps> = {
  args: {
    color: "serenity",
  },
  render: (args) => {
    return (
      <>
        <Stack>
          <Input
            size="sm"
            variant="unstyled"
            color={args.color}
            placeholder="unstyled input"
          ></Input>
          <Input
            size="md"
            variant="unstyled"
            color={args.color}
            placeholder="unstyled input"
          ></Input>
          <Input
            size="lg"
            variant="unstyled"
            color={args.color}
            placeholder="unstyled input"
          ></Input>
        </Stack>
      </>
    );
  },
};
