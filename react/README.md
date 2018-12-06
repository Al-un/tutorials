
# VS code configuration

 - https://medium.com/@sgroff04/configure-eslint-prettier-and-flow-in-vs-code-for-react-development-c9d95db07213

### Visual Studio extensions

 - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### CLI

 - [create-react-app](https://github.com/facebook/create-react-app)

 ### Website
 
 To deploy for the website:

 1. Ensure that homepage is set in `package.json`
 2. go to tutorial folder
 3. run `yarn build`. Output folder cannot be changed and is set to `build/`
 4. copy the `build/` content in the appropriate folder in `tutorial-website/src/deploy/react`