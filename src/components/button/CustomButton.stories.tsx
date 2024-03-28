import CustomButton from "./CustomButton";
import { Meta, StoryFn } from "@storybook/react";
import {fn} from "@storybook/test";

export default {
    title: "Components/CustomButton", // story 이름
    component: CustomButton,
    args: { onClick: fn(), disabled: false },
} as Meta<typeof CustomButton>;

const Template: StoryFn<typeof CustomButton> = (args) => (
    <CustomButton {...args} >Custom Button</CustomButton>
);

export const Default = Template.bind({});
Default.args = {
    label: "Default",
    size: "small",
    variant: "default",
    color: 'orange',
};

export const Outline = Template.bind({});
Outline.args = {
    label: "Outline",
    size: "medium",
    variant: "outline",
    color: "red",
}

export const Link = Template.bind({});
Link.args = {
    label: 'Link',
    size: "large",
    variant: "link",
    color: "blue",
}
