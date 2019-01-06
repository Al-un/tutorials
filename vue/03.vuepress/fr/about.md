# A propos

Ceci est une page **A propos**

## Style

Ce site de test aurait pu utiliser [Bootstrap-Vue](https://bootstrap-vue.js.org/doc)
pour la stylisation. Bootstrap-Vue serait alors ajouté à travers un _application enhancement_.

```js{4}
// .vuepress/enhanceApp.js

// https://vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

export default ({
  Vue, // Version de Vue utilisée par VuePress
  options, // Options pour l'instance Vue
  router, // Instance routeur
  siteData // métadonnées du site
}) => {
  Vue.use(BootstrapVue);
};
```

::: tip
Comme BootstrapVue includes les scripts nécessaires, il n'est pas nécessaire
d'importer _jQuery_ ni _Popper_.
:::

::: warning
Abandonné en faveur du thème par défaut de VuePress
:::
