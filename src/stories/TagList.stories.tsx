import type { Meta, StoryObj } from "@storybook/react";
import TagList from "../components/TagList";

const meta : Meta = {
    title: 'TagList',
    component: TagList,
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default : Story = {
    args: {
        tagsList: [{id: "1", name: "Bug"},
            {id: "2634", name: "Feature"},
            {id: "3", name: "Request"},
            {id: "5", name: "Refactor"},
            {id: "124", name: "Equivocate"},
            {id: "564", name: "Garrulous"}],
        tagAction: function handleClick(...args : unknown[]) { console.log(args) }
    }
}

export const Empty : Story = {
    args: {
        tagsList: [],
        tagAction: function handleClick(...args : unknown[]) { console.log(args) }
    }
}

export const Error : Story = {
    args: {
        tagsList: undefined,
        tagAction: function handleClick(...args : unknown[]) { console.log(args) }
    }
}
