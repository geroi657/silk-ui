import type { Meta, StoryObj } from "@storybook/react";
import Header from "../components/Header.tsx";

const meta : Meta = {
    title: 'Header',
    component: Header,
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default : Story = {
    args: {
        siteTitle: "Silk",
        loginName: "Log-in",
        registerName: "Register",
        loginModifier: true,
        isLoggedIn: false
    }
}

export const LoggedIn : Story = {
    args: {
        siteTitle: "Silk",
        loginName: "Log-in",
        registerName: "Register",
        loginModifier: true,
        isLoggedIn: true,
        title: "Penkin A."
    }
}