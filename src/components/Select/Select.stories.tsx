import Select, { SelectProps } from "./Select";
import { Meta, StoryObj } from "@storybook/react";
import { StoryBookFlex } from "./Select.styles";
import { useState } from "react";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (Story, context) => {
      const [value, setValue] = useState<string>("");
      const onSelect = (value: string) => {
        setValue(value);
      };

      const { args } = context;
      args.onSelect = onSelect;

      return (
        <StoryBookFlex>
          <label>선택한 옵션: {value}</label>
          {<Story onSelect={onSelect} />}
        </StoryBookFlex>
      );
    },
  ],
};

export default meta;

export const ExampleSelect: StoryObj<SelectProps> = {
  args: {},
  render: (args) => {
    return (
      <Select {...args}>
        <Select.Trigger />
        <Select.OptionList>
          <Select.Option value="React">React</Select.Option>
          <Select.Option value="Next.js">Next.js</Select.Option>
          <Select.Option value="TypeScript">TypeScript</Select.Option>
        </Select.OptionList>
      </Select>
    );
  },
};
