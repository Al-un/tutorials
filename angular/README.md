# angular-tutorial

Angular tutorials. Host multiple projects. Also include some toying with VueJS and ReactJS

## Build

```
ng build --prod --base-href=https://al-un.github.io/tutorials/angular/{folder name} --deploy-url=https://al-un.github.io/tutorials/angular/{folder name}  --output-path=dist/
```

Example

```
ng build --prod --base-href=https://al-un.github.io/tutorials/deploy/angular/joke-caching --deploy-url=https://al-un.github.io/tutorials/deploy/angular/joke-caching --output-path=dist/
```

- `--output-path` because from Angular 6+, output is `dist/{folder name}` instead of `dist/`
- `--base-href` for routing
- `--deploy-url` for assets

Long version for tutorial website:
```
ng build --prod --base-href=https://al-un.github.io/tutorials/deploy/angular/tour-of-heroes --deploy-url=https://al-un.github.io/tutorials/deploy/angular/tour-of-heroes --output-path=../../tutorial-website/src/deploy/angular/tour-of-heroes
```