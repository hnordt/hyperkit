import { renderToStaticMarkup } from "preact-render-to-string";

declare global {
  namespace preact.JSX {
    interface IntrinsicElements {
      "hk-hello": preact.HTMLAttributes<HTMLElement>;
    }
  }
}

customElements.define(
  "hk-hello",
  class extends HTMLElement {
    connectedCallback() {
      this.innerHTML = renderToStaticMarkup(<h1>Hello from Hyperkit!</h1>);
    }
  },
);
