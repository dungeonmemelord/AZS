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
    Actor: true,
    ActorSheet: true,
    ActorSheet: true,
    Actors: true,
    CONFIG: true,
    ChatMessage: true,
    Dialog: true,
    Handlebars: true,
    ItemSheet: true,
    Items: true,
    Roll: true,
    game: true,
    loadTemplates: true,
    mergeObject: true,
  },
};
