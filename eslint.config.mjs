import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js'
import hooksPlugin from 'eslint-plugin-react-hooks'
import eslintPluginPrettierRecomended from 'eslint-plugin-prettier/recommended'

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
  eslintPluginPrettierRecomended,

  {
    plugins: {
      'react-hooks': hooksPlugin
    },
    rules: hooksPlugin.configs.recommended.rules
  },

  {
    rules: {
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off'
    }
  },
  {
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
]
