import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./card";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["docsPage"],
  argTypes: {
    title: {
      control: { type: "text" },
    },
    description: {
      control: { type: "text" },
    },
    imageUrl: {
      control: { type: "text" },
    },
    imageAlt: {
      control: { type: "text" },
    },
    variant: {
      control: { type: "select" },
      options: ["default", "outlined", "elevated"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    tags: {
      control: { type: "object" },
    },
    actionButtonText: {
      control: { type: "text" },
    },
    onActionClick: { action: "clicked" },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BasicCard: Story = {
  args: {
    title: "Card Title",
    description: "This is a basic card with default settings",
    imageUrl: "https://v1.tailwindcss.com/img/card-top.jpg",
    imageAlt: "Sunset in the mountains",
  },
};

export const OutlinedCard: Story = {
  args: {
    title: "Outlined Card",
    description: "This card uses the outlined variant style",
    imageUrl: "https://v1.tailwindcss.com/img/card-top.jpg",
    imageAlt: "Sunset in the mountains",
    variant: "outlined",
  },
};

export const ElevatedCard: Story = {
  args: {
    title: "Elevated Card",
    description: "This card uses the elevated variant with enhanced shadow",
    imageUrl: "https://v1.tailwindcss.com/img/card-top.jpg",
    imageAlt: "Sunset in the mountains",
    variant: "elevated",
  },
};

export const SmallCard: Story = {
  args: {
    title: "Small Card",
    description: "This is a small sized card",
    size: "small",
  },
};

export const LargeCard: Story = {
  args: {
    title: "Large Card",
    description: "This is a large sized card with more content space",
    size: "large",
  },
};

export const CardWithTags: Story = {
  args: {
    title: "Card With Tags",
    description: "This card displays tags at the bottom",
    tags: ["photography", "nature", "mountains"],
  },
};

export const CardWithAction: Story = {
  args: {
    title: "Card With Action",
    description: "This card has an action button",
    actionButtonText: "Learn More",
  },
};

export const CompleteCard: Story = {
  args: {
    title: "Complete Card Example",
    description: "This card demonstrates all available features",
    imageUrl: "https://v1.tailwindcss.com/img/card-top.jpg",
    imageAlt: "Sunset in the mountains",
    variant: "elevated",
    size: "large",
    tags: ["featured", "complete", "example"],
    actionButtonText: "View Details",
  },
};