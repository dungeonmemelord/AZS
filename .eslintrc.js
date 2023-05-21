module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jquery: true,
  },
  extends: ['standard', 'prettier'],
  overrides: [
    {
      files: ['**/*.test.js'],
      env: {
        jest: true,
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
    'no-trailing-spaces': 'error',
    'object-curly-spacing': ['error', 'always'],
    semi: ['error', 'always'],
    'semi-style': ['error', 'last'],
    'max-len': [
      'error',
      {
        code: 120,
        tabWidth: 2,
        ignoreComments: true, //"comments": 80
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'prefer-const': 'error',
  },
  globals: {
    Dialog: true,
    Roll: true,
    ChatMessage: true,
    ActorSheet: true,
    mergeObject: true,
    CONFIG: true,
    game: true,
    ItemSheet: true,
    Actor: true,
  },
};
