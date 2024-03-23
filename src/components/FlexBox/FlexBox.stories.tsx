// Button.stories.tsx 파일
import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import FlexBox from "./FlexBox";
import { FlexBoxProps } from "./Flexbox.types";
import Element from "./Elemnt";

const meta: Meta<typeof FlexBox> = {
    title: "Components/FlexBox",
    component: FlexBox,
    parameters: {
      layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
      justify: {
        options: ["initial", "center","flex-start", "flex-end", "space-between", "space-around", "inherit"],
        control: { type: "radio"},
      },
      align: {
        options: ["initial", "center", "flex-start", "flex-end", "baseline", "stretch", "inherit"],
        control: { type: "radio"}
      },
      direction:{
          options: ["row", "row-reverse", "column", "column-reverse"],
          control: { type: "radio"}
      },
      wrap:{
        options: ["nowrap", "wrap", "wrap-reverse"],
        control: { type: "radio"}
      },
      gap: {
        control: { type: "range", min: 0, max: 50, step: 1 },
      }
    },
  }

export default meta

export const RowCenter: StoryObj<FlexBoxProps> = {
  args:{
    justify: "center",
    align: "center",
    direction: "row",
    wrap: "nowrap",
    gap: 0,
    children: (
       <Element></Element>
      )
    },
  render: (args) => {
    return(
      <FlexBox justify={args.justify} align={args.align} direction={args.direction} wrap={args.wrap} gap={args.gap}>
        {args.children}
      </FlexBox>
    )
  }
}

export const ColumnCenter: StoryObj<FlexBoxProps> = {
  args:{
    justify: "center",
    align: "center",
    direction: "column",
    wrap: "nowrap",
    gap: 0,
    children: (
        <Element></Element>
      )
    },
  render: (args) => {
    return(
      <FlexBox justify={args.justify} align={args.align} direction={args.direction} wrap={args.wrap} gap={args.gap}>
        {args.children}
      </FlexBox>
    )
  }
}

export const Between: StoryObj<FlexBoxProps> = {
  args:{
    justify: "space-between",
    align: "center",
    direction: "row",
    wrap: "nowrap",
    gap: 0,
    children: (
        <Element></Element>
      )
    },
  render: (args) => {
    return(
      <FlexBox justify={args.justify} align={args.align} direction={args.direction} wrap={args.wrap} gap={args.gap}>
        {args.children}
      </FlexBox>
    )
  }
}

export const Around: StoryObj<FlexBoxProps> = {
  args:{
    justify: "space-around",
    align: "center",
    direction: "row",
    wrap: "nowrap",
    gap: 0,
    children: (
        <Element></Element>
      )
    },
  render: (args) => {
    return(
      <FlexBox justify={args.justify} align={args.align} direction={args.direction} wrap={args.wrap} gap={args.gap}>
        {args.children}
      </FlexBox>
    )
  }
}

export const Wrap: StoryObj<FlexBoxProps> = {
  args:{
    justify: "initial",
    align: "initial",
    direction: "row",
    wrap: "wrap",
    gap: 0,
    children: (
      <>
        <Element></Element>
        <Element></Element>
      </>
      )
    },
  render: (args) => {
    return(
      <FlexBox justify={args.justify} align={args.align} direction={args.direction} wrap={args.wrap} gap={args.gap}>
        {args.children}
      </FlexBox>
    )
  }
}