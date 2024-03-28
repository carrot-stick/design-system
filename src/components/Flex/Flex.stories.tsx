import Flex, { FlexProps } from "./Flex";
import { Meta, StoryObj } from "@storybook/react";
import { StotyItem } from "./Flex.styles";

const meta: Meta<FlexProps> = {
  title: "Components/Flex",
  component: Flex,
  tags: ["autodocs"],
  argTypes: {
    width: {
      description: "`string` 타입의  `width` ",
      table: {
        type: {
          summary: null,
        },
      },
    },
    height: {
      description: "`string` 타입의 `height` ",
      table: {
        type: {
          summary: null,
        },
      },
    },
    direction: {
      description: "`flex-direction` 속성값 ",
      table: {
        type: {
          summary: null,
        },
      },
    },
    alignItems: {
      description: "`align-items` 속성값 ",
      table: {
        type: {
          summary: null,
        },
      },
    },
    justifyContent: {
      description: "`justify-content` 속성값 ",
      table: {
        type: {
          summary: null,
        },
      },
    },
  },
};

export default meta;

export const ExampleFlex: StoryObj<FlexProps> = {
  args: {
    width: "100%",
    height: "200px",
    direction: "row",
    alignItems: "stretch",
    justifyContent: "flex-start",
    gap: 20,
  },

  render: (args) => {
    return (
      <Flex {...args}>
        <StotyItem />
        <StotyItem />
        <StotyItem />
      </Flex>
    );
  },
};
