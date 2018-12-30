import { LitElement, html } from "@polymer/lit-element";

class VTypography extends LitElement {
  constructor() {
    super();

    this.color = "default";
    // this.spacing = "medium";
    this.variant = "none";
  }

  static get properties() {
    return {
      color: String,
      // "default" | "inherit" | "muted" | "primary" | "secondary"
      // spacing: String,
      // "none" | "small" | "medium" | "large"
      variant: String
      // "span" | "p" | "h1" | "h2" | "h3"
    };
  }

  get classes() {
    const { color, spacing, variant } = this;

    return ["typography", color && `typography--${color}`]
      .filter(Boolean)
      .join(" ");
  }

  get element() {
    switch (this.variant) {
      case "span":
        return html`
          <span><slot></slot></span>
        `;
      case "p":
        return html`
          <p><slot></slot></p>
        `;
      case "h1":
        return html`
          <h1><slot></slot></h1>
        `;
      case "h2":
        return html`
          <h2><slot></slot></h2>
        `;
      case "h3":
        return html`
          <h3><slot></slot></h3>
        `;
    }
  }

  render() {
    return html`
      <style>
        :host {
          display: inline-block;
        }

        .typography {
          display: inline-block;
          box-sizing: border-box;
        }

        /* Colors */
        .typography--default {
          background-color: #fff;
          color: var(--v-default-text);
        }

        .typography--muted {
          background-color: var(--v-muted);
          color: var(--v-muted-text);
        }

        .typography--primary {
          background-color: var(--v-primary);
          color: var(--v-primary-text);
        }

        .typography--secondary {
          background-color: var(--v-secondary);
          color: var(--v-secondary-text);
        }

        /* Variants */
        span {
          font-size: inherit;
          line-height: 1.375em;
        }

        p {
          font-size: inherit;
          line-height: 1.375em;
        }

        h1 {
          margin-bottom: 0.9em;
          font-size: 3.375em;
          line-height: 4.375em;
          font-weight: 700;
          color: var(--v-primary);
        }
      </style>

      ${this.element}
    `;
  }
}

customElements.define("v-typography", VTypography);
