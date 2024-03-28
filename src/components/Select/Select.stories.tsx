import { Meta, StoryFn } from '@storybook/react';
import { neutral } from '../../styles/color';
import { ItemList } from '../../styles/common.style';
import Select, { SelectProps } from './Select';

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: ['sm', 'md', 'lg'],
      },
    },
    variant: {
      control: {
        type: 'radio',
        options: ['outline', 'field', 'flushed', 'unStyled'],
      },
    },
    state: {
      control: {
        type: 'radio',
        options: ['available', 'disabled', 'invalid'],
      },
    },
  },
} as Meta;

const Template: StoryFn<typeof Select> = args => <Select {...args}></Select>;

export const Basic = Template.bind({});
Basic.args = {
  size: 'md',
  variant: 'outline',
  borderColor: `${neutral['200']}`,
};

export const BySize: StoryFn<SelectProps> = args => (
  <ItemList>
    <Select size="sm" />
    <Select size="md" />
    <Select size="lg" />
  </ItemList>
);

export const ByVariant: StoryFn<SelectProps> = args => (
  <ItemList>
    <Select />
    <Select variant={'field'} />
    <Select variant={'flushed'} />
    <Select variant={'unStyled'} />
  </ItemList>
);
