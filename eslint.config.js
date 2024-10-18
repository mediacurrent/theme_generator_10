import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';


export default [
  {files: ['**/*.{js,mjs,cjs,jsx}']},
  {
    languageOptions:

      {
        globals:
          {
            ...globals.browser,
            ...globals.node,
            ...globals.jquery,
            ...globals.mocha,
            Drupal: 'readonly',
            bootstrap: 'readonly',
            
          }
      }
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];
