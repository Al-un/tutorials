import React from "react";

import "./CssMath.scss";

export default class CssMath extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <div>
        <h2>
          Math in CSS <code>calc()</code>
        </h2>
        <p>
          The next text is styled with clamp (
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/clamp">
            doc link
          </a>
          )
        </p>
        <pre>{`
.cssmath {
    background: #ddd;
    font-size: clamp(10px, 4em, 80px);
}
          `}</pre>

        <div className="cssmath">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          consectetur nisl eu eros iaculis convallis. Morbi finibus mi ante, ac
          imperdiet sapien iaculis sit amet. Cras congue neque tincidunt ex
          efficitur, nec cursus ipsum vestibulum. Donec vel nisl vel metus
          finibus tincidunt. Vestibulum pharetra dolor non ullamcorper dictum.
          Vivamus vel hendrerit erat. Ut a nulla lorem. Duis venenatis tortor
          vel interdum egestas. Mauris eleifend, velit eu efficitur tincidunt,
          risus mi sollicitudin eros, maximus ultricies purus tortor sed lectus.
          Mauris interdum nibh at sem facilisis, nec consequat libero porttitor.{" "}
        </div>
      </div>
    );
  }
}
