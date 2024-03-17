// Button.stories.tsx 파일

import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
      size: {
        options: ['sm', 'md', 'lg'],
        control: { type: 'text' },
      },
      variant: {
        options: ["solid" , "outline", "dotted"],
        control: { type: 'radio' },
      },
      cursor:{
        options: ["pointer" , "wait" , "not-allowed"],
        control: {type: 'radio'}
      }
    },
  } as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args}>버튼</Button>;


export const Primary = Template.bind({});
Primary.args = {
  size: 'sm',
  variant: 'outline',
  color: 'red'
};
  


export const Secondary = Template.bind({});
Secondary.args = {
    size: "lg",
    variant: "solid",
    color: "blue"
}