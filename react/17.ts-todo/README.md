# TS-todo

A TODO application written in React+TypeScripe

## Code control

Linting done by eslint as ts-lint is deprecated as of early 2019. Formatting
is handled by prettier. Both tools have their configuration files, respectively
`.eslintrc` and `.prettierrc`

As TypeScript is used, `@typescript-eslint/parser` must be used.

While eslint stuff come with `react-scripts`, prettier things must be added:
`yarn add --dev prettier eslint-config-prettier eslint-plugin-prettier`

Docs:

- [ESLint configuration](https://eslint.org/docs/user-guide/configuring)
- [ESLint `react-app` config](https://github.com/facebook/create-react-app/tree/master/packages/eslint-config-react-app)
- [Prettier configuration](https://prettier.io/docs/en/configuration.html)
- [Prettier ESLint integrations](https://prettier.io/docs/en/related-projects.html#eslint-integrations)

| Config                                  | Link                 |
| --------------------------------------- | -------------------- |
| `eslint:recommended`                    | [Rules][3]           |
| `plugin:@typescript-eslint/recommended` | [Supported rules][1] |
| `plugin:react/recommended`              | [Github][2]          |

[1]: https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules
[2]: https://github.com/yannickcr/eslint-plugin-react#configuration
[3]: https://eslint.org/docs/rules/
