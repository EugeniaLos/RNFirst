module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'simple-import-sort',
    'eslint-plugin-no-inline-styles',
  ],
  rules: {
    'simple-import-sort/sort': 'error',
    'no-inline-styles/no-inline-styles': 'error',
    'react/destructuring-assignment': 'off',
  },
};
