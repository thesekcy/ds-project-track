import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts';
import { peerDependencies } from './package.json'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
    }),
    tailwindcss(),
    dts({
      tsconfigPath: './tsconfig.app.json',
      insertTypesEntry: true,
      exclude: ["**/*.stories.ts", "**/*.test.tsx"]
    }),
  ],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'ds-project-track',
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => `ds-project-track.${format}.js`
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)],
      output: {
        globals: { react: 'React', 'react-dom': 'ReactDOM' },
      }
    }
  }
})
