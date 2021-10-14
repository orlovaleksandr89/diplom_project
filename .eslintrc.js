module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    indent: [0, 2, { SwitchCase: 2 }],
    semi: ['error', 'never'],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'space-before-function-paren': ['error', 'never'],
    'multiline-ternary': ['error', 'always-multiline'],
    'dot-notation': 'error',
    camelcase: 'error'
  }
}
