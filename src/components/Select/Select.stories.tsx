import { Meta, StoryObj } from "@storybook/react";
import { Stack } from "./Select.styles";
import Select, { SelectProps } from "./Select";

const meta: Meta<typeof Select> = {
  title: "Design-system/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
    },
    variant: {
      options: ["outlined", "filled"],
    },
  },
};

export default meta;

export const OutlinedSelect: StoryObj<SelectProps> = {
  args: {
    variant: "outlined",
  },
  render: (args) => {
    return (
      <>
        <Stack>
          <Select size="sm" variant={args.variant} disabled></Select>
          <Select size="md" variant={args.variant}></Select>
          <Select size="lg" variant={args.variant}></Select>
        </Stack>
      </>
    );
  },
};

export const FilledSelect: StoryObj<SelectProps> = {
  args: {
    variant: "filled",
  },
  render: (args) => {
    return (
      <>
        <Stack>
          <Select size="sm" variant={args.variant}></Select>
          <Select size="md" variant={args.variant}></Select>
          <Select size="lg" variant={args.variant}></Select>
        </Stack>
      </>
    );
  },
};
