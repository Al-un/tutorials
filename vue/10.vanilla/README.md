# Vanilla Vue.js

Testing Vue.js with CDN approach

## Test

Testing Vue.js requires little twerkings. First run the test:

```sh
npm install
npm run test
```

Without Babel, plain JavaScript must be used:

- `buttons.js` must `module.export = {}`
- test files must use `require` instead of `import`