import { LitElement, html } from "@polymer/lit-element";

class VNavbar extends LitElement {
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
      // "none" | "contained"
    };
  }

  get classes() {
    const { color, spacing, variant } = this;

    return [
      "navbar",
      color && `navbar--${color}`,
      // spacing && `navbar--${spacing}`,
      variant && `navbar--${variant}`
    ]
      .filter(Boolean)
      .join(" ");
  }

  render() {
    return html`
      <style>
        :host {
          display: inline-block;
          width: 100%;
        }

        .navbar {
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;

          display: flex;
          flex-direction: row;
          align-items: center;
          width: 100%;
          height: 64px;
          min-height: 64px;

          box-sizing: border-box;
        }

        /* Colors */
        .navbar--default {
          background-color: #fff;
          color: var(--v-default-text);
        }

        .navbar--muted {
          background-color: var(--v-muted);
          color: var(--v-muted-text);
        }

        .navbar--primary {
          background-color: var(--v-primary);
          color: var(--v-primary-text);
        }

        .navbar--secondary {
          background-color: var(--v-secondary);
          color: var(--v-secondary-text);
        }

        /* Variants */
        .navbar--contained {
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.18);
        }
      </style>

      <div class=${this.classes}><slot></slot></div>
    `;
  }
}

customElements.define("v-navbar", VNavbar);
