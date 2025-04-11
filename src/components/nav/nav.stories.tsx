import type { Meta, StoryObj } from "@storybook/react";
import { Nav } from "./nav";

const meta = {
  title: "Components/Nav",
  component: Nav,
  tags: ["docsPage"],
  parameters: {
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#E8EAEC" },
      ],
    },
  },
  argTypes: {},
} satisfies Meta<typeof Nav>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BasicNav: Story = {
  render: () => <div className="px-16 py-8"><Nav /></div>,
  args: {
   
  },
};

