# Storybook & React

From <https://www.learnstorybook.com/react/en/get-started/>.

## Steps

```sh
create-react-app storybook-react
cd storybook-react
yarn add --dev @storybook/react
yarn add --dev @babel/core
yarn add --dev babel-loader
```

- Create react app:
  ```sh
  create-react-app storybook-react
  cd storybook-react
  ```
- Add storybook:
  ```sh
  yarn add --dev @storybook/react
  yarn add --dev @storybook/addon-actions
  yarn add --dev @babel/core
  yarn add --dev babel-loader
  ```
- Create `.storybook/config.js`:

  ```js
  import { configure } from '@storybook/react';

  function loadStories() {
    require('stories_path_here');
    // You can require as many stories as you need.
  }

  configure(loadStories, module);
  ```
