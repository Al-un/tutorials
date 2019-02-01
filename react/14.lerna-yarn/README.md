## Init Lerna

- `yarn init`
- `yarn add --dev lerna`
- `npx lerna init --independent`
- Edit _lerna.json_:
  ```json
  {
    "packages": ["packages/*"],
    "version": "independent",
    "npmClient": "yarn",
    "useWorkspaces": true
  }
  ```
- Edit _package.json_:
  ```json
  {
    "workspaces": ["packages/*"]
  }
  ```

## Shared components

- Create _shared_ package and a _Header_ component. Sumarized in _src/index.js_
- `yarn add --dev react react-dom`
- Create `Header.js`
- in root _package.json_: `yarn add --dev -W @babel/core @babel/cli @babel/preset-env @babel/preset-react`
- Add _package/shared_ script:
  ```json
  {
    "scripts": {
      "build": "babel src -d dist --ignore \"src/**/*.spec.js\",\"src/**/*.stories.js\""
    }
  }
  ```
  Script should work and output stuff in `/shared/dist/`
- in root _package.json_: `yarn add --dev -W jest enzyme enzyme-adapter-react-16 babel-jest`
- Create `Header.spec.js`
- Add script in _packages/shared/_: `"test": "jest"` and
  ```json
  "jest": {
      "setupFiles": [
      "../../setupJest.js"
      ]
  }
  ```
- Add _root/setupJest.js_
  > Use _required_ old syntax to have it runnable without babel-ing
- _packages/shared/_ Test script should work
- Ensure that babel does not compile spec files nor stories files
- Ensure build are clean: in root \_package.json `yarn add --dev -W del-cli`
- Make build output discoverable: in _packages/shared/package.json_:
  ```json
  { "main": "dist/index.js" }
  ```

## Some app

- go to `/packages/` and `create-react-app sumapp`
- Add `Header` component:

  ```js
  import { Header } from 'shared';

  class App extends Component {
    render() {
      return (
        <div className="App">
          <Header>Some header</Header>
          <!-- some stuff here -->
        </div>
      );
    }
  }
  ```

- `yarn start`
- Enjoy

## Make it global

- Add the script from root _package.json_
