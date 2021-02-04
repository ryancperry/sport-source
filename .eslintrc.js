module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: false,
    codeFrame: false
  },
  plugins: ['react', 'prettier', 'react-hooks'],
  extends: ['airbnb', 'prettier', 'prettier/react'],
  globals: {
    document: true,
    window: true,
    process: false
  },
  env: {
    browser: true,
    node: true
  },
  rules: {
    'prefer-promise-reject-errors': ['off'],
    'jsx-a11y/anchor-is-valid': ['off'], // Next Link passes down href
    'react/jsx-filename-extension': ['off'],
    'react/jsx-closing-bracket-location': [1, 'tag-aligned'],
    'react/prop-types': ['off'],
    'react/react-in-jsx-scope': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-return-assign': ['off']
  }
};
