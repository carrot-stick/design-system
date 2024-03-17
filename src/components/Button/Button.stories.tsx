import { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from "./Button";
import { ButtonList } from "./Button.styles";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    size: {
      description: "`string` 타입의 버튼 `size` ",
    },
    variant: {
      description: "`string` 타입의 버튼 `variant` ",
    },
    color: {
      description: "`string` 타입의 버튼 `color`",
      control: { type: "radio" },
      options: ["gray", "green", "darkBlue"],
    },
  },
};

export default meta;

export const ExampleButton: StoryObj<ButtonProps> = {
  args: {
    children: "Button",
    size: "md",
    variant: "primary",
    color: "gray",
    disabled: false,
  },
};

export const PrimaryButtons: StoryObj<ButtonProps> = {
  args: {
    color: "gray",
  },
  render: (args) => {
    return (
      <>
        <ButtonList>
          <Button size="sm" variant="primary" color={args.color}>
            Button
          </Button>
          <Button size="md" variant="primary" color={args.color}>
            Button
          </Button>
          <Button size="lg" variant="primary" color={args.color}>
            Button
          </Button>
        </ButtonList>
      </>
    );
  },
};

export const SecondaryButtons: StoryObj<ButtonProps> = {
  args: {
    color: "gray",
  },
  render: (args) => {
    return (
      <>
        <ButtonList>
          <Button size="sm" variant="secondary" color={args.color}>
            Button
          </Button>
          <Button size="md" variant="secondary" color={args.color}>
            Button
          </Button>
          <Button size="lg" variant="secondary" color={args.color}>
            Button
          </Button>
        </ButtonList>
      </>
    );
  },
};

export const OutlineButtons: StoryObj<ButtonProps> = {
  args: {
    color: "gray",
  },
  render: (args) => {
    return (
      <>
        <ButtonList>
          <Button size="sm" variant="outline" color={args.color}>
            Button
          </Button>
          <Button size="md" variant="outline" color={args.color}>
            Button
          </Button>
          <Button size="lg" variant="outline" color={args.color}>
            Button
          </Button>
        </ButtonList>
      </>
    );
  },
};
