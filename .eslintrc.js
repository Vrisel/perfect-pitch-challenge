module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: [
    '@nuxtjs',
    'eslint:recommended',
    'plugin:nuxt/recommended',
    'prettier',
  ],
  plugins: ['vue'],
  // add your custom rules here
  rules: {
    'no-console': 'off',
  },
};
