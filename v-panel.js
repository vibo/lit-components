import { LitElement, html } from "@polymer/lit-element";

class VPanel extends LitElement {
  constructor() {
    super();

    this.color = "default";
    this.spacing = "medium";
    this.variant = "none";
  }

  static get properties() {
    return {
      color: String,
      // "default" | "inherit" | "muted" | "primary" | "secondary"
      spacing: String,
      // "none" | "small" | "medium" | "large"
      variant: String
      // "none" | "contained"
    };
  }

  get classes() {
    const { color, spacing, variant } = this;

    return [
      "panel",
      color && `panel--${color}`,
      spacing && `panel--${spacing}`,
      variant && `panel--${variant}`
    ]
      .filter(Boolean)
      .join(" ");
  }

  render() {
    return html`
      <style>
        :host {
          display: inline-block;
        }

        .panel {
          display: block;

          box-sizing: border-box;

          border-radius: var(--v-panel-border-radius, 2px);
        }

        /* Colors */
        .panel--default {
          background-color: #fff;
          color: var(--v-default-text);
        }

        .panel--muted {
          background-color: var(--v-muted);
          color: var(--v-muted-text);
        }

        .panel--primary {
          background-color: var(--v-primary);
          color: var(--v-primary-text);
        }

        .panel--secondary {
          background-color: var(--v-secondary);
          color: var(--v-secondary-text);
        }

        /* Spacing */
        .panel--small {
          padding: 0.625em 1em;
        }

        .panel--medium {
          padding: 1.25em 1.5em;
        }

        .panel--large {
          padding: 2em 2.5em;
        }

        /* Variants */
        .panel--contained {
          box-shadow: 0 1.5px 2px rgba(0, 0, 0, 0.16);
        }
      </style>

      <div class=${this.classes}><slot></slot></div>
    `;
  }
}

customElements.define("v-panel", VPanel);
