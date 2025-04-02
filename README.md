# Design System

Um design system moderno construído com React, TypeScript e Tailwind CSS. Este pacote fornece componentes reutilizáveis e estilizados para ajudar a construir interfaces consistentes e acessíveis.

## Componentes

Atualmente, o design system inclui os seguintes componentes:

- **Button**: Componente de botão com diferentes variantes, tamanhos e estados.
- **Card**: Componente de cartão para exibir conteúdo em um formato contido.

## Instalação

Para instalar o design system em seu projeto, execute:

```bash
npm install ds-project-track
# ou
yarn add ds-project-track
```

## Uso

Importe os componentes e os estilos em seu projeto React:

```jsx
// Importe os componentes
import { Button, Card } from 'ds-project-track';
// Importe os estilos CSS (importante!)
import 'ds-project-track/dist/assets/index.css';

function App() {
  return (
    <div>
      <Card title="Exemplo de Card">
        <p>Conteúdo do card</p>
        <Button variant="primary">Clique aqui</Button>
      </Card>
    </div>
  );
}
```

## Configuração do Tailwind CSS

Este design system utiliza Tailwind CSS. Para garantir que as cores e estilos funcionem corretamente, adicione a seguinte configuração ao seu arquivo `tailwind.config.js` no projeto que está consumindo este design system:

```js
/** @type {import('tailwindcss').Config} */
export default {
  // ... suas configurações existentes
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        secondary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
      },
    },
  },
}
```

### Importante

Para que os estilos do Tailwind CSS funcionem corretamente, você precisa:

1. Importar o arquivo CSS do design system conforme mostrado acima
2. Adicionar as configurações de cores ao seu arquivo `tailwind.config.js`
3. Garantir que o Tailwind CSS esteja configurado no seu projeto
```

## Publicação no npm

### Preparação para publicação

1. Atualize o arquivo `package.json` para tornar o pacote publicável:

```json
{
  "name": "ds-project-track",
  "version": "0.1.0",
  "private": false,
  "type": "module",
  "main": "dist/index.js",
  "module": "dist/index.js",
  "types": "dist/index.d.ts",
  "files": [
    "dist"
  ],
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "prepublishOnly": "npm run build"
  },
  // ... outras configurações
}
```

2. Crie um arquivo `src/index.ts` para exportar todos os componentes:

```typescript
export * from './components/Button';
export * from './components/Card';
// Exporte outros componentes conforme necessário
```

3. Configure o `vite.config.ts` para construir o pacote corretamente:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'DSProjectTrack',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})
```

### Publicação manual

1. Faça login na sua conta npm:

```bash
npm login
```

2. Publique o pacote:

```bash
npm publish
```

### Atualização de versão

Para atualizar a versão do pacote, siga estas etapas:

1. Atualize o código conforme necessário.

2. Atualize a versão usando um dos comandos abaixo:

```bash
# Para atualizações de patch (correções de bugs)
npm version patch

# Para atualizações menores (novos recursos compatíveis)
npm version minor

# Para atualizações maiores (mudanças que quebram compatibilidade)
npm version major
```

3. Publique a nova versão:

```bash
npm publish
```

## Workflow do GitHub para Publicação Automática

Você pode configurar um workflow do GitHub Actions para publicar automaticamente o pacote no npm quando uma nova tag for criada.

Crie um arquivo `.github/workflows/publish.yml` com o seguinte conteúdo:

```yaml
name: Publish to npm

on:
  push:
    tags:
      - 'v*'

jobs:
  build-and-publish:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          registry-url: 'https://registry.npmjs.org/'

      - name: Install dependencies
        run: npm ci

      - name: Lint
        run: npm run lint

      - name: Build
        run: npm run build

      - name: Publish to npm
        run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

Para usar este workflow:

1. Crie um token de acesso no npm:
   - Acesse sua conta npm
   - Vá para "Access Tokens"
   - Crie um novo token com permissões de publicação

2. Adicione o token como um segredo no seu repositório GitHub:
   - Vá para as configurações do repositório
   - Acesse "Secrets and variables" > "Actions"
   - Adicione um novo segredo chamado `NPM_TOKEN` com o valor do token gerado

3. Para publicar uma nova versão:
   - Atualize a versão no `package.json`
   - Crie e envie uma tag com o formato `v*` (ex: `v0.1.0`)
   ```bash
   git tag v0.1.0
   git push origin v0.1.0
   ```

## Desenvolvimento

Para iniciar o ambiente de desenvolvimento:

```bash
npm run dev
```

Isto iniciará um servidor de desenvolvimento Vite que exibe os componentes do design system para teste e desenvolvimento.
