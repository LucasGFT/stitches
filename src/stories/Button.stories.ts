import {type StoryObj } from '@storybook/react'
import Button from "../components/Button";
import EmailIcon from "../components/icons/EmailIcon";

export default {
    component: Button,
    title: 'Button',
}

type Story = StoryObj<typeof Button>;

export const IconRight: Story = {
    args: {
        bgColor: 'black',
        color: "white",
        iconRight: EmailIcon(),
        isDisabled: false,
        size: 'lg',
        text: 'Teste',
    }
}

export const IconLeft: Story = {
    args: {
        bgColor: 'black',
        color: "white",
        iconLeft: EmailIcon(),
        isDisabled: false,
        size: 'lg',
        text: 'Teste',
        iconRight: null,
    }
}

export const IconRightAndLeft: Story = {
    args: {
        bgColor: 'black',
        color: "white",
        iconRight: EmailIcon(),
        iconLeft: EmailIcon(),
        isDisabled: false,
        size: 'lg',
        text: 'Teste',
    }
}