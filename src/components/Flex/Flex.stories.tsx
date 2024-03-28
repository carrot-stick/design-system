import { Meta, StoryFn } from '@storybook/react';
import Flex from './Flex';
import Box from '../Box/Box';

export default {
  title: 'Components/Flex', // story 이름
  component: Flex,
  args: { direction: 'row', align: 'start', justify: 'center', wrap: 'nowrap' },
} as Meta<typeof Vertical>;

const Template: StoryFn<typeof Flex> = args => (
  <Flex {...args}>{args.children}</Flex>
);

const BoxChild = () => {
  return (
    <>
      <Box size={200} bgColor={'red'} radius={10} />
      <Box size={180} bgColor={'orange'} radius={10} />
      <Box size={160} bgColor={'yellow'} radius={10} />
      <Box size={140} bgColor={'green'} radius={10} />
      <Box size={120} bgColor={'blue'} radius={10} />
    </>
  );
};

export const Vertical = Template.bind({});
Vertical.args = {
  direction: 'column',
  gap: 10,
  size: 800,
  children: BoxChild(),
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  gap: 20,
  size: 800,
  children: BoxChild(),
};
