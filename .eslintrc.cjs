module.exports = {
  env: {
    node: true,
    es2021: true,
    jest: true,
  },
  extends: ['xo'],
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['**/dist/**/*.js'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    indent: ['Error', 2],
    'object-curly-spacing': ['Error', 'always'],
    'new-cap': ['error', { capIsNewExceptions: ['express.Router'] }],
    'operator-linebreak': ['error', 'after'],
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  ],
};
