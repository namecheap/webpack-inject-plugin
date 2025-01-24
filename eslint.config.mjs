import typescriptEslint from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import noExplicitTypeExports from 'eslint-plugin-no-explicit-type-exports';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import js from '@eslint/js';
import xo from 'eslint-config-xo';

export default [
  js.configs.recommended,
  ...xo,
  prettierConfig,
  {
    files: ['**/*.ts'],
    plugins: {
      '@typescript-eslint': typescriptEslint,
      prettier,
      'no-explicit-type-exports': noExplicitTypeExports,
    },

    languageOptions: {
      globals: {
        ...globals.node,
      },

      parser: tsParser,
      ecmaVersion: 5,
      sourceType: 'module',

      parserOptions: {
        project: './tsconfig.json',
      },
    },

    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },

    rules: {
      'no-explicit-type-exports/no-explicit-type-exports': 2,
      'no-unused-vars': ['off'],
      'no-undef': ['off'],
      'no-unused-expressions': ['off'],
    },
  },
];
