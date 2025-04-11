import type { Meta, StoryObj } from "@storybook/react";
import { Logo } from "./logo";

const meta = {
  title: "Components/Logo",
  component: Logo,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#FFFFFF" },
        { name: "dark", value: "#12182B" },
      ],
    },
  },
  argTypes: {
    theme: {
      control: "radio",
      options: ["light", "dark"],
      description: "Tema do logo",
    },
    variant: {
      control: "radio",
      options: ["typed", "icon", "full"],
      description: "Variante do logo",
    },
    className: {
      control: "text",
      description: "Classes CSS adicionais",
    },
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Variante padrão do logo completo com tema claro.
 */
export const FullLight: Story = {
  args: {
    variant: "full",
    theme: "light",
    width: 180,
    height: 56,
  },
  parameters: {
    backgrounds: { default: "light" },
  },
};

/**
 * Variante do logo completo com tema escuro.
 */
export const FullDark: Story = {
  args: {
    variant: "full",
    theme: "dark",
    width: 180,
    height: 56,
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

/**
 * Variante do logo apenas com texto e tema claro.
 */
export const TypedLight: Story = {
  args: {
    variant: "typed",
    theme: "light",
    width: 99,
    height: 35,
  },
  parameters: {
    backgrounds: { default: "light" },
  },
};

/**
 * Variante do logo apenas com texto e tema escuro.
 */
export const TypedDark: Story = {
  args: {
    variant: "typed",
    theme: "dark",
    width: 99,
    height: 35,
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

/**
 * Variante do logo apenas com ícone.
 * O ícone não possui variação de tema, mantendo sempre a mesma cor.
 */
export const IconOnly: Story = {
  args: {
    variant: "icon",
    theme: "light",
    width: 40,
    height: 56,
  },
};

/**
 * Exemplo de logo com tamanho pequeno.
 */
export const Small: Story = {
  args: {
    variant: "full",
    theme: "light",
    width: 90,
    height: 28,
  },
};

/**
 * Exemplo de logo com tamanho grande.
 */
export const Large: Story = {
  args: {
    variant: "full",
    theme: "light",
    width: 360,
    height: 112,
  },
};

/**
 * Exemplo de logo com classe CSS personalizada.
 */
export const WithCustomClass: Story = {
  args: {
    variant: "icon",
    theme: "light",
    width: 100,
    height: 100,
    className: "p-6 border rounded-full bg-dark",
  },
};

