import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { iconMap } from "./index";

// Componente para exibir todos os ícones
const IconsShowcase = () => {
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);

  const handleCopyIconName = (iconName: string) => {
    navigator.clipboard.writeText(iconName);
    setCopiedIcon(iconName);

    // Limpa a mensagem após 2 segundos
    setTimeout(() => {
      setCopiedIcon(null);
    }, 2000);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Ícones Disponíveis</h1>
      <p className="mb-6">
        Clique em um ícone para copiar seu nome para a área de transferência.
      </p>

      {copiedIcon && (
        <div className="bg-green-100  -green-400 text-green-700 px-4 py-2 rounded mb-4">
          <p>
            <strong>{copiedIcon}</strong> copiado para a área de transferência!
          </p>
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Object.keys(iconMap).map((iconName) => {
          const IconComponent = iconMap[iconName];
          return (
            <div
              key={iconName}
              className="flex flex-col items-center justify-center p-4  rounded-md hover:bg-gray-50 cursor-pointer transition-colors"
              onClick={() => handleCopyIconName(iconName)}
              title={`Clique para copiar: ${iconName}`}
            >
              <IconComponent size={32} strokeWidth={1.5} />
              <span className="mt-2 text-sm text-gray-700">{iconName}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const meta = {
  title: "Components/Icons",
  component: IconsShowcase,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: { type: "number" },
      description: "Tamanho do ícone em pixels",
      defaultValue: 24,
      table: {
        type: { summary: "number" },
        defaultValue: { summary: 24 },
      },
    },
    color: {
      control: { type: "color" },
      description: "Cor do ícone",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "currentColor" },
      },
    },
    strokeWidth: {
      control: { type: "number", min: 0.5, max: 4, step: 0.1 },
      description: "Espessura principal do traço do ícone",
      defaultValue: 1.5,
      table: {
        type: { summary: "number" },
        defaultValue: { summary: 1.5 },
      },
    },
    strokeWidth2: {
      control: { type: "number", min: 0.5, max: 4, step: 0.1 },
      description:
        "Espessura secundária do traço (para ícones com múltiplos traços)",
      table: {
        type: { summary: "number" },
      },
    },
    strokeWidth3: {
      control: { type: "number", min: 0.5, max: 4, step: 0.1 },
      description:
        "Espessura terciária do traço (para ícones com múltiplos traços)",
      table: {
        type: { summary: "number" },
      },
    },
    props: {
      description: "Propriedades adicionais do SVG",
      table: {
        type: { summary: "React.SVGProps<SVGSVGElement>" },
      },
    },
  },
} satisfies Meta<typeof IconsShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Exibe todos os ícones disponíveis no sistema.
 * Clique em um ícone para copiar seu nome para a área de transferência.
 */
export const AllIcons: Story = {};

/**
 * Exemplo de um ícone individual com propriedades personalizáveis.
 * Use este exemplo para testar diferentes configurações de um ícone específico.
 */
export const IconExample: Story = {
  args: {
    size: 24,
    strokeWidth: 1.5,
    color: "#000000",
  },
  render: (args) => {
    const IconComponent = iconMap.ConfigIcon;
    return (
      <div className="p-4 flex flex-col items-center gap-6">
        <h2 className="text-xl font-bold">
          Exemplo de Personalização de Ícone
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Ajuste as propriedades no painel de controle abaixo para ver como elas
          afetam o ícone.
        </p>

        <div className=" p-8 rounded-lg flex justify-center items-center bg-gray-50">
          <IconComponent {...args} />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Este exemplo permite testar as diferentes propriedades disponíveis para os ícones, como tamanho, cor e espessura do traço.",
      },
    },
  },
};

/**
 * Demonstração de diferentes configurações de ícones lado a lado.
 */
export const IconVariations: Story = {
  render: () => {
    const IconComponent = iconMap.ConfigIcon;
    return (
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Variações de Ícones</h2>
        <p className="text-sm text-gray-600 mb-6">
          Exemplos de diferentes configurações de propriedades aplicadas ao
          mesmo ícone.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className=" p-4 rounded-lg flex flex-col items-center gap-2">
            <IconComponent size={24} strokeWidth={1.5} color="dark" />
            <span className="text-xs text-gray-500">Padrão</span>
          </div>

          <div className=" p-4 rounded-lg flex flex-col items-center gap-2">
            <IconComponent size={32} strokeWidth={1.5} color="dark" />
            <span className="text-xs text-gray-500">Tamanho: 32px</span>
          </div>

          <div className=" p-4 rounded-lg flex flex-col items-center gap-2">
            <IconComponent size={24} strokeWidth={2.5} color="dark" />
            <span className="text-xs text-gray-500">Traço: 2.5</span>
          </div>

          <div className=" p-4 rounded-lg flex flex-col items-center gap-2">
            <IconComponent size={24} strokeWidth={1.5} color="blue" />
            <span className="text-xs text-gray-500">Cor: Azul</span>
          </div>

          <div className=" p-4 rounded-lg flex flex-col items-center gap-2">
            <IconComponent size={24} strokeWidth={1} color="red" />
            <span className="text-xs text-gray-500">Vermelho, Traço: 1</span>
          </div>

          <div className=" p-4 rounded-lg flex flex-col items-center gap-2">
            <IconComponent size={48} strokeWidth={1.5} color="green" />
            <span className="text-xs text-gray-500">Verde, Tamanho: 48px</span>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Esta demonstração mostra o mesmo ícone com diferentes configurações de tamanho, cor e espessura de traço.",
      },
    },
  },
};
