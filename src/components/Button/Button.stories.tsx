import { Meta, StoryObj } from "@storybook/react";
import { Stack } from "./Button.styles";
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
      options: ["sm", "md", "lg"],
    },
    variant: {
      options: ["contained", "outlined", "text"],
    },
    color: {
      control: { type: "radio" },
      options: ["serenity", "roseQuartz", "gray"],
    },
  },
};

export default meta;

export const ContainedButton: StoryObj<ButtonProps> = {
  args: {
    color: "serenity",
  },
  render: (args) => {
    return (
      <>
        <Stack>
          <Button size="sm" variant="contained" color={args.color}>
            Button
          </Button>
          <Button size="md" variant="contained" color={args.color}>
            Button
          </Button>
          <Button size="lg" variant="contained" color={args.color}>
            Button
          </Button>
        </Stack>
      </>
    );
  },
};

export const OutlinedButton: StoryObj<ButtonProps> = {
  args: {

    color: "roseQuartz",
  },
  render: (args) => {
    return (
      <>
        <Stack>
          <Button size="sm" variant="outlined" color={args.color}>
            Button
          </Button>
          <Button size="md" variant="outlined" color={args.color}>
            Button
          </Button>
          <Button size="lg" variant="outlined" color={args.color}>
            Button
          </Button>
        </Stack>
      </>
    );
  },
};

export const TextButton: StoryObj<ButtonProps> = {
  args: {
    color: "gray",
  },
  render: (args) => {
    return (
      <>
        <Stack>
          <Button size="sm" variant="text" color={args.color}>
            Button
          </Button>
          <Button size="md" variant="text" color={args.color}>
            Button
          </Button>
          <Button size="lg" variant="text" color={args.color}>
            Button
          </Button>
        </Stack>
      </>
    );
  },
};
