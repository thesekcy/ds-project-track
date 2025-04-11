import type { Meta, StoryObj } from '@storybook/react';
import { TokenExample } from './TokenExample';

const meta = {
  title: '_Examples/TokenExample',
  component: TokenExample,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'error', 'info'],
      description: 'Variante de cor do componente'
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Tamanho do componente'
    },
    rounded: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', 'full'],
      description: 'Arredondamento das bordas'
    },
    children: {
      control: 'text',
      description: 'Conteúdo do componente'
    }
  },
} satisfies Meta<typeof TokenExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    rounded: 'md',
    children: 'Exemplo com tokens primários',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    size: 'medium',
    rounded: 'md',
    children: 'Exemplo com tokens de sucesso',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    size: 'medium',
    rounded: 'md',
    children: 'Exemplo com tokens de alerta',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    size: 'medium',
    rounded: 'md',
    children: 'Exemplo com tokens de erro',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    size: 'medium',
    rounded: 'md',
    children: 'Exemplo com tokens de informação',
  },
};

export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'small',
    rounded: 'md',
    children: 'Tamanho pequeno',
  },
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    rounded: 'md',
    children: 'Tamanho grande',
  },
};

export const RoundedFull: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    rounded: 'full',
    children: 'Bordas totalmente arredondadas',
  },
};