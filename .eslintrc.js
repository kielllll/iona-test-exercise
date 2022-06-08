module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    semi: [0, 'always'],
    'react/jsx-filename-extension': [0, 'always'],
    'object-curly-newline': [0, 'always'],
    'react/react-in-jsx-scope': [0, 'always'],
    'comma-dangle': [0, 'always'],
    'import/prefer-default-export': [0, 'always'],
    'linebreak-style': [0, 'always'],
    'arrow-body-style': [0, 'always'],
    'react/function-component-definition': [0, 'always'],
    'react/forbid-prop-types': [0, 'always'],
    'arrow-parens': [0, 'always'],
    'react/jsx-props-no-spreading': [0, 'always'],
    'operator-linebreak': [0, 'always'],
    'react/require-default-props': [0, 'always'],
    'no-alert': [0, 'always']
  },
}
