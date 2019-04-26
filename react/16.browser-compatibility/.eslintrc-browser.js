/**
 * https://medium.com/@dors718/linting-your-react-typescript-project-with-eslint-and-prettier-2423170c3d42
 */

module.exports = {
  extends: [
    "plugin:compat/recommended" // https://github.com/amilajack/eslint-plugin-compat
  ],

  env: {
    browser: true // https://github.com/amilajack/eslint-plugin-compat
  }
};
