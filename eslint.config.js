import js from '@eslint/js';

export default [
  // Use ESLint recommended
  js.configs.recommended,
  {
    rules: {
      'max-nested-callbacks': ['error', 3],
      'no-return-await': 'error',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }]
    }
  }
];
