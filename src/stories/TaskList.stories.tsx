import type { Meta, StoryObj } from "@storybook/react";
import TaskList from "../components/TaskList";

const meta : Meta = {
    title: 'TaskList',
    component: TaskList,
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default : Story = {
    args: {
        TaskListItems: [
            {
                id: "1",
                name: "Fix a bug",
                description: "Bug on the client-side",
                tags: [
                    {
                        id: "1",
                        name: "Bug",
                    }
                ],
                responsible: "Penkin A."
            },
            {
                id: "2",
                name: "Add a feature",
                description: "No comment",
                tags: [
                    {
                        id: "435",
                        name: "Request",
                    },
                    {
                        id: "5732",
                        name: "Feature",
                    }
                ],
                responsible: "Bergen M."
            },
        ],
        ListName: "In work"
    }
}

export const Overflow : Story = {
    args: {
        TaskListItems: [
            {
                id: "1",
                name: "Fix a bug",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel tortor sed augue tristique aliquam sed vel nunc. Ut pretium urna eu ultricies fringilla. Vivamus suscipit, justo at tincidunt ullamcorper, est sapien dictum ex, eu bibendum lacus dolor quis nunc. Duis elementum arcu lacinia urna bibendum condimentum. Maecenas sodales eros sit amet odio rutrum, et pellentesque mi eleifend. Proin metus urna, dapibus vel justo ut, tincidunt ultrices ipsum. Vivamus tincidunt orci sapien, eget hendrerit justo pulvinar ut. Aenean lobortis finibus accumsan. Nulla aliquam sodales consectetur.",
                tags: [
                    {
                        id: "1",
                        name: "Bug",
                    },
                ],
                responsible: "Penkin A."
            },
            {
                id: "2",
                name: "Add a feature",
                description: "No comment",
                tags: [
                    {
                        id: "435",
                        name: "Request",
                    },
                    {
                        id: "5732",
                        name: "Feature",
                    }
                ],
                responsible: "Bergen M."
            },
        ],
        ListName: "Done"
    }
}

export const Scroll : Story = {
    args: {
        TaskListItems: [
            {
                id: "2",
                name: "Fix a bug",
                description: "Bug on the client-side",
                tags: [
                    {
                        id: "1",
                        name: "Bug",
                    }
                ],
                responsible: "Penkin A."
            },
            {
                id: "65",
                name: "Review code",
                description: "Review code of new interns",
                tags: [
                    {
                        id: "643",
                        name: "Team",
                    }
                ],
                responsible: "Frolov S."
            },
            {
                id: "8435",
                name: "Refactor old codebase",
                description: "Refactor",
                tags: [
                    {
                        id: "6",
                        name: "Refactor",
                    }
                ],
                responsible: "Melen D."
            },
            {
                id: "75",
                name: "Fix memory leaks",
                description: "Backend",
                tags: [
                    {
                        id: "9",
                        name: "Backend",
                    },
                    {
                        id: "56",
                        name: "Optimization",
                    }
                ],
                responsible: "Kefirov S."
            },
            {
                id: "6432",
                name: "Rework app architecture",
                description: "TL;DR",
                tags: [
                    {
                        id: "435",
                        name: "Request",
                    },
                    {
                        id: "6432",
                        name: "Backend",
                    },
                    {
                        id: "927",
                        name: "Global",
                    },
                    {
                        id: "32857",
                        name: "Urgent",
                    }
                ],
                responsible: "Astafiev A."
            },
        ],
        ListName: "Registered"
    }
}