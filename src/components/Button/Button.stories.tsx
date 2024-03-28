import Button from './Button';
import { Meta, StoryFn } from '@storybook/react';
import { fn } from '@storybook/test';

export default {
  title: 'Components/Button', // story 이름
  component: Button,
  args: { type: 'button', onClick: fn(), disabled: false },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = args => (
  <Button {...args}>{args.children}</Button>
);

export const Solid = Template.bind({});
Solid.args = {
  children: 'Solid',
  size: 'small',
  variant: 'solid',
  color: 'orange',
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Outline',
  size: 'medium',
  variant: 'outline',
  color: 'red',
};

export const Link = Template.bind({});
Link.args = {
  children: 'Link',
  size: 'large',
  variant: 'link',
  color: 'blue',
};
