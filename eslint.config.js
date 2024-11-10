import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import prettierConfig from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: { globals: globals.browser },
    rules: {
      'no-var': 'warn',
      'no-multiple-empty-lines': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      eqeqeq: 'warn',
      'dot-notation': 'warn',
      'no-unused-vars': 'warn',
      'react/destructuring-assignment': 'warn',
      'react/jsx-pascal-case': 'warn',
      'react/no-direct-mutation-state': 'warn',
      'react/jsx-no-useless-fragment': 'warn',
      'react/no-unused-state': 'warn',
      'react/jsx-key': 'warn',
      'react/self-closing-comp': 'warn',
      'react/jsx-curly-brace-presence': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto'
        }
      ]
    }
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  prettierConfig
];
