import type { Meta, StoryObj } from "@storybook/react";
import SideMenu from "../components/SideMenu.tsx";

const meta : Meta = {
    title: 'SideMenu',
    component: SideMenu,
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default : Story = {
    args: {
        SideMenuItems: [
            {
                id: "46",
                name: "X-Project",
                description: "You don't need to know about this"
            },
            {
                id: "75",
                name: "Y-Game",
                description: "Are you still here?"
            },
            {
                id: "89",
                name: "Z-Website",
                description: "Do not read this, I'm serious"
            },
        ]
    }
}

export const Overflow : Story = {
    args: {
        SideMenuItems: [
            {
                id: "46",
                name: "X-Project",
                description: "You don't need to know about this"
            },
            {
                id: "75",
                name: "Y-Game",
                description: "Are you still here?"
            },
            {
                id: "89",
                name: "Z-Website Z-Website Z-Website",
                description: "Do not read this, I'm serious Do not read this, I'm serious Do not read this, I'm serious"
            },
            {
                id: "46",
                name: "X-Project",
                description: "You don't need to know about this"
            },
            {
                id: "75",
                name: "Y-Game",
                description: "Are you still here?"
            },
            {
                id: "89",
                name: "Z-Website",
                description: "Do not read this, I'm serious"
            },
            {
                id: "46",
                name: "X-Project",
                description: "You don't need to know about this"
            },
            {
                id: "75",
                name: "Y-Game",
                description: "Are you still here?"
            },
            {
                id: "89",
                name: "Z-Website",
                description: "Do not read this, I'm serious"
            },
        ]
    }
}