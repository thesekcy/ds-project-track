# Sistema de Tokens do Design System

## Visão Geral

Este sistema de tokens foi implementado utilizando o novo padrão do Tailwind 4.x, que substitui o arquivo `tailwind.config.js` por variáveis CSS personalizadas definidas com a diretiva `@theme`.

## Estrutura de Arquivos

```
src/tokens/
├── animations.css   # Tokens de animações e transições
├── borders.css      # Tokens de bordas e sombras
├── colors.css       # Tokens de cores
├── index.css        # Arquivo completo com todos os tokens
├── spacing.css      # Tokens de espaçamento e layout
├── tokens.css       # Arquivo principal que importa todos os tokens
└── typography.css   # Tokens de tipografia
```

## Como Utilizar

### Em Componentes React

Os tokens estão disponíveis como variáveis CSS e podem ser acessados diretamente nas classes do Tailwind:

```jsx
// Exemplo de uso com classes do Tailwind
<div className="bg-primary-500 text-neutral-50 p-4 rounded-lg shadow-md">
  Conteúdo usando tokens do design system
</div>

// Exemplo de uso com valores arbitrários
<div className="bg-[var(--color-primary-500)] text-[var(--color-neutral-50)] p-[var(--spacing-4)] rounded-[var(--rounded-lg)]">
  Conteúdo usando tokens do design system com valores arbitrários
</div>
```

### Em CSS Personalizado

Você também pode usar os tokens em CSS personalizado:

```css
@layer components {
  .custom-card {
    background-color: var(--color-neutral-50);
    border-radius: var(--rounded-lg);
    padding: var(--spacing-6);
    box-shadow: var(--shadow-xl);
    font-family: var(--font-body);
  }
}
```

## Extensão do Sistema

Para adicionar novos tokens, você pode editar os arquivos existentes ou criar novos arquivos de tokens e importá-los no arquivo `tokens.css`.

## Referência

Para mais informações sobre o novo padrão do Tailwind 4.x, consulte a documentação oficial em [tailwindcss.com](https://tailwindcss.com).