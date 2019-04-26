import React from "react";

import "./CssFontVariant.scss";

export default class CssFontVariant extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <div>
        <h2>
          Math in CSS <code>calc()</code>
        </h2>
        <p>
          The next text is styled with font-variant-numeric (
          <a href="https://css-tricks.com/almanac/properties/f/font-variant-numeric/">
            tuto
          </a>
          )
        </p>
        <pre>{`
.oldstyle {
    background: #ddd;
    font-variant-numeric: oldstyle-nums;
}  
.ordinal {
    font-variant-numeric: ordinal;
}
          `}</pre>

        <div className="oldstyle">1234567890</div>
        <p className="ordinal">1st, 2nd, 3rd, 4th, 5th</p>
      </div>
    );
  }
}
