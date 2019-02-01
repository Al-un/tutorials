# Monorepo with Lerna

Based on https://itnext.io/guide-react-app-monorepo-with-lerna-d932afb2e875 and https://github.com/F1LT3R/monorepo-react

- `yarn add --dev lerna`
- `yarn add --dev @babel/cli @babel/core @babel/preset-env @babel/preset-react babel-core babel-plugin-transform-es2015-modules-commonjs`
- `yarn add --dev jest enzyme enzyme-adapter-react-16 babel-jest`
- `yarn add --dev react react-dom react-test-renderer`

Abandoned because of `babel-loader-lerna-cra`: it kind of _eject_ the project and 
does not work locally.