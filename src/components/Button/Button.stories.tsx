import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ButtonProps } from "./Button.types";
import Button from "./Button";
import { ButtonList } from "./Button.styles";
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof Button> = {
    title: "Components/Button",
    component: Button,
    args:{
      onClick: action("on-click")
    },
    parameters: {
      layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
      size: {
        options: ["sm", "md", "lg"],
        control: { type: "radio" },
      },
      variant: {
        options: ["solid" , "outline"],
        control: { type: "radio" },
      },
      children:{
        control:{type: "text"}
      },
      disabled:{
        control: {type: "boolean"}
      },
      color:{
        control: {type: "color"}
      }
    },
  }

export default meta;

export const  ReferenceButton:  StoryObj<ButtonProps> = {
  args:{
    children: "버튼",
    size: "md",
    variant: "solid",
    color: "red",
  }
}

export const Solid: StoryObj<ButtonProps> = {
  args: {
    color: "red",
    variant: "solid",
    onClick: action("on-click")
  },
  render: (args) => {
    return(
      <ButtonList>
        <Button disabled={false} onClick={args.onClick} size="sm" variant={args.variant} color={args.color}>버튼</Button>
        <Button disabled={false} onClick={args.onClick} size="md" variant={args.variant} color={args.color}>버튼</Button>
        <Button disabled={false} onClick={args.onClick} size="lg" variant={args.variant} color={args.color}>버튼</Button>
      </ButtonList>
    )
  }
}
  
export const Outline: StoryObj<ButtonProps> = {
  args: {
    color: "red",
    variant: "outline",
    onClick: action("on-click")
  },
  render: (args) => {
    return(
      <ButtonList>
        <Button  disabled={false} onClick={args.onClick} size="sm" variant={args.variant} color={args.color}>버튼</Button>
        <Button  disabled={false} onClick={args.onClick} size="md" variant={args.variant} color={args.color}>버튼</Button>
        <Button  disabled={false} onClick={args.onClick} size="lg" variant={args.variant} color={args.color}>버튼</Button>
      </ButtonList>
    )
  }
}

export const Disabled: StoryObj<ButtonProps> = {
  args:{
    disabled: true,
    color: "red"
  },
  render: (args) => {
    return(
      <Button disabled={args.disabled} onClick={action("on-click")} size="sm" variant="solid" color={args.color}>버튼</Button>
    )
  }
}