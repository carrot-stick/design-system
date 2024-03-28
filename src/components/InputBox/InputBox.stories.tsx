import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import InputBox from "./InputBox";
import { action } from "@storybook/addon-actions"

const meta :Meta<typeof InputBox>= {
  title: "Components/InputBox",
  component: InputBox,
  parameters: {
    layout: "centered",
  },
  args:{
    onSubmit: action("on-submit"),
  },
  argTypes:{
    size: {
      option: ["sm", "md", "lg"], 
      control: {type: "radio"}
    },
    disabled:{
      control: {type: "boolean"}
    }
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Size: Story = {
  args:{
    onSubmit: action("on-submit")
  },
  render: (args) => {
    return(
      <div style={{display: "flex", flexDirection: "column" ,gap: "50px"}}>
        <InputBox disabled={false} onSubmit={args.onSubmit} size="sm"></InputBox>
        <InputBox disabled={false} onSubmit={args.onSubmit} size="md"></InputBox>
        <InputBox disabled={false} onSubmit={args.onSubmit} size="lg"></InputBox>
      </div>
    )
  }
};

export const Disabled: Story = {
  args:{
    disabled: true
  },
  render: (args) => {
    return(
        <InputBox disabled={args.disabled} onSubmit={action("on-submit")} size="md"></InputBox>
    )
  }
};
