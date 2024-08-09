import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  { files: ['src/**/*.ts'] },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
    ],
  },
  {
    rules: {
      'no-unused-vars': 'error',
      'no-unused-expressions': 'error',
      'no-console': 'warn',
      'prefer-const': 'error',
      'no-undef': 'error',
    },
  },
  {
    ignores: ['node_modules/*', 'dist/*'],
  },
];
