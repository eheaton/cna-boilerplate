module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    warnOnUnsupportedTypeScriptVersion: false,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'next',
    'next/core-web-vitals',
    'prettier',
  ],
  plugins: [ '@typescript-eslint', 'simple-import-sort' ],
  rules: {
    /**
     * General formatting
     */
    indent: [ 'error', 2, { SwitchCase: 1 }],
    quotes: [ 'error', 'single' ],
    radix: [ 'error', 'as-needed' ],
    semi: [ 'error', 'always' ],
    'space-infix-ops': [ 'error', { int32Hint: false }],
    'no-unreachable': 1,
    'no-multiple-empty-lines': [ 'error', { max: 1 }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [ 'error' ],
    'comma-dangle': [
      'error', {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],

    /**
     * React / JSX Specific
     */
    'jsx-quotes': [ 'error', 'prefer-double' ],
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],

    /**
     * Array formatting
     */
    'array-bracket-spacing': [
      'error', 'always', {
        objectsInArrays: false,
        arraysInArrays: false,
      },
    ],
    'array-bracket-newline': [ 'error', { minItems: 4, multiline: true }],

    /**
     * Object formatting
     */
    'quote-props': [ 'error', 'as-needed' ],
    'object-curly-spacing': [
      'error', 'always', {
        arraysInObjects: false,
        objectsInObjects: false,
      },
    ],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: { consistent: true, multiline: true },
        ObjectPattern: { consistent: true, multiline: true },
        ImportDeclaration: { multiline: true },
        ExportDeclaration: { multiline: true, minProperties: 3 },
      },
    ],

    /**
     * Import formatting
     */
    'sort-imports': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Packages. `react` related packages come first.
          [ '^react', '^@?\\w' ],
          // Internal packages (atomic components)
          [ '^@(components|atoms|molecules|organisms|modules)(/.*|$)' ],
          // Internal package (other)
          [ '^@(svg|config|utils|lib|root|pages|types)(/.*|$)' ],
          // Side effect imports.
          [ '^\\u0000' ],
          // Parent imports. Put `..` last.
          [ '^\\.\\.(?!/?$)', '^\\.\\./?$' ],
          // Other relative imports. Put same-folder imports and `.` last.
          [ '^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$' ],
          // Style imports.
          [ '^.+\\.s?css$' ],
        ],
      },
    ],
    'no-restricted-imports': [
      'error', {
        patterns: [ '../' ],
      },
    ],

    /**
     * Typescript options
     */
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
      },
    ],
  },
};
