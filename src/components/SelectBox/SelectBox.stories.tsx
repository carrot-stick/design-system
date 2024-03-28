import type { Meta, StoryObj } from "@storybook/react";
import SelectBox from "./SelectBox";
import { action } from "@storybook/addon-actions"

const meta :Meta<typeof SelectBox>= {
  title: "Components/SelectBox",
  component: SelectBox,
  args:{
    onChange: action("on-change")
  },
  argTypes: {
    visible: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
    size: {
      control: { type: "number"}
    },
    disabled:{
      control: {type: "boolean"}
    },
  },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Select: Story = {
  render: () => {
    return(
      <div style={{display: "flex", flexDirection: "column", gap: "30px"}}>
        <SelectBox disabled={false} onChange={action("on-change")} multiple={false} visible="sm" size={0}/>
        <SelectBox disabled={false} onChange={action("on-change")} multiple={false} visible="md" size={0}/>
        <SelectBox disabled={false} onChange={action("on-change")} multiple={false} visible="lg" size={0}/>
      </div>
    )
  }
}

export const Length: Story = {
  args:{
    size: 3,
  },
  render: (args) => {
      return(
        <SelectBox disabled={false} onChange={action("on-change")} multiple={false} visible="lg" size={args.size}/>
      )
  }
}

export const Multiple: Story = {
  args:{
    visible: "md",
    size: 0
  },
  render: (args) => {
    return(
      <SelectBox disabled={false} onChange={action("on-change")} multiple={true} visible={args.visible} size={args.size} />
    )
  }
}

export const Disabled: Story = {
  args:{
    disabled: true
  },
  render: (args) => {
    return(
      <div style={{display: "flex", flexDirection: "column", gap: "30px"}}>
          <SelectBox disabled={args.disabled} onChange={action("on-change")} multiple={false} visible="md" size={0}/>
          <SelectBox disabled={args.disabled} onChange={action("on-change")} multiple={false} visible="md" size={3}/>
      </div>
    )
  }
}