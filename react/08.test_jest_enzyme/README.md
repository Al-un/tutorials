Tutorial:
- https://www.codementor.io/vijayst/unit-testing-react-components-jest-or-enzyme-du1087lh8

Notes:

- need to add
    ```json
    {
        "presets": ["env", "react"]
    }
    ```
    in *.babelrc* otherwise jest cannot build React component. "env" is used 
    instead of "es2015". Error is
    ```
    Test suite failed to run

    Jest encountered an unexpected token

    This usually means that you are trying to import a file which Jest cannot parse, e.g. it's not plain JavaScript.

    By default, if Jest sees a Babel config, it will use that to transform your files, ignoring "node_modules".
    ```
- Error is:
    ```
    Enzyme Internal Error: Enzyme expects an adapter to be configured, but found none.
    To configure an adapter, you should call `Enzyme.configure({ adapter: new Adapter() })`
    before using any of Enzyme's top level APIs, where `Adapter` is the adapter
    corresponding to the library currently being tested. For example:
    ```
    Fix::
    - https://github.com/Microsoft/TypeScript-React-Starter/issues/131
    - https://stackoverflow.com/a/52692578/4906586
    By doing:
    - `yarn add --dev enzyme-adapter-react-16`
    - create a jest setup file and add it to package.json 