module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', "eslint:recommended", "turbo", "prettier"],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    "no-undef": 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/consistent-type-imports': 'warn',
  }
};
