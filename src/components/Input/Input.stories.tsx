import { Meta, StoryFn } from '@storybook/react';
import Input, { InputProps } from './Input';
import { neutral, red } from '../../styles/color';
import { ItemList } from '../../styles/common.style';

export default {
  title: 'Components/Input',
  component: Input,
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
        options: ['available', 'readOnly', 'disabled', 'invalid'],
      },
    },
  },
} as Meta;

const Template: StoryFn<typeof Input> = args => <Input {...args}></Input>;

export const Basic = Template.bind({});
Basic.args = {
  placeholder: 'Basic placeholder',
  size: 'md',
  variant: 'outline',
  state: 'available',
  borderColor: `${neutral['200']}`,
};

export const BySize: StoryFn<InputProps> = args => (
  <ItemList>
    <Input {...args} placeholder={'Small size placeholder'} size="sm" />
    <Input {...args} placeholder={'Medium size placeholder'} size="md" />
    <Input {...args} placeholder={'Large size placeholder'} size="lg" />
  </ItemList>
);

export const ByVariant: StoryFn<InputProps> = args => (
  <ItemList>
    <Input {...args} placeholder={'Outline style placeholder'} />
    <Input
      {...args}
      placeholder={'Field style placeholder'}
      variant={'field'}
    />
    <Input
      {...args}
      placeholder={'Flushed style placeholder'}
      variant={'flushed'}
    />
    <Input
      {...args}
      placeholder={'UnStyled placeholder'}
      variant={'unStyled'}
    />
  </ItemList>
);

export const ByState: StoryFn<InputProps> = args => (
  <ItemList>
    <Input {...args} placeholder={'Available state placeholder'} />
    <Input
      {...args}
      placeholder={'Disabled state placeholder'}
      state={'disabled'}
    />
    <Input
      {...args}
      placeholder={'ReadOnly state placeholder'}
      state={'readOnly'}
    />
    <Input
      {...args}
      placeholder={'Invalid state placeholder'}
      state={'invalid'}
    />
  </ItemList>
);

export const ByFocusAndErrorBorderColor: StoryFn<InputProps> = args => (
  <ItemList>
    <Input
      {...args}
      placeholder={'Focus placeholder'}
      focusBorderColor={'orange'}
    />
    <Input
      {...args}
      placeholder={'Focus placeholder'}
      focusBorderColor={'green'}
    />
    <Input
      {...args}
      placeholder={'Error placeholder'}
      state={'invalid'}
      errorBorderColor={red['200']}
    />
    <Input
      {...args}
      placeholder={'Error placeholder'}
      state={'invalid'}
      errorBorderColor={red['600']}
    />
  </ItemList>
);
