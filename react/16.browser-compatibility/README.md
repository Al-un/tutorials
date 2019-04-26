# Browser compatibility

Basically relying on <https://www.npmjs.com/package/browserslist>. The goal
is to ensure that our builds is compatible with the chosen list of browsers

Default _browsersList_ is:

```json
{
  "browserslist": {
    "production": [">0.2%", "not dead", "not op_mini all"],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version",
    ]
  }
}
```

<https://slides.com/ai/browserslist>