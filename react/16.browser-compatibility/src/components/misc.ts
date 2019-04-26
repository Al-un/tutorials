export interface Test {
  name: string;
  doc: string;
  caniuse: string;
}

export const tests: Test[] = [
  {
    name: "object-entries",
    doc:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries",
    caniuse: "https://caniuse.com/#feat=object-entries"
  },
  {
    name: "css-math",
    doc: "https://www.w3.org/TR/css-values-4/#math-function",
    caniuse: "https://caniuse.com/#feat=css-math-functions"
  },
  {
    name: "font-variant-numeric",
    doc: "https://www.w3.org/TR/css-fonts-3/#font-variant-numeric-prop",
    caniuse: "https://caniuse.com/#feat=font-variant-numeric"
  }
];
