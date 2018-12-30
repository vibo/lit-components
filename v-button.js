import { LitElement, html, property } from "@polymer/lit-element";

class VButton extends LitElement {
  constructor() {
    super();

    this.color = "default";
    this.disabled = false;
    this.size = "medium";
    this.variant = "contained";
  }

  static get properties() {
    return {
      color: String,
      // "default" | "inherit" | "primary" | "secondary"
      disabled: Boolean,
      size: String,
      // "small" | "medium" | "large"
      variant: String
      // "text" | "contained" | "outlined"
    };
  }

  get classes() {
    const { color, size, variant } = this;

    return [
      "button",
      color && `button--${color}`,
      size && `button--${size}`,
      variant && `button--${variant}`
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

        .button {
          border: none;
          outline: none;

          cursor: pointer;
          font-family: inherit;

          border-radius: var(--v-button-border-radius, 3.5em);

          box-sizing: border-box;

          transition: background-color 0.115s ease-out;
        }

        /* Colors */
        .button--default {
          background-color: var(--v-default, #d3d4d7);
          color: var(--v-default-text, rgba(0, 0, 0, 0.67));
        }

        .button--primary {
          background-color: var(--v-primary, #0000a0);
          color: var(--v-primary-text, #fff);
        }

        .button--primary:hover {
          background-color: var(--v-primary-light, #0000d4);
        }

        .button--primary:active {
          background-color: var(--v-primary-lightest, #0000ee);
        }

        .button--secondary {
          background-color: var(--v-secondary, #40bfa3);
          color: var(--v-secondary-text, #0000a0);
        }

        .button--secondary:hover {
          background-color: var(--v-secondary-lightest, #44ccae);
        }

        .button--secondary:active {
          background-color: var(--v-secondary-light, #48d9b9);
        }

        .button--secondary.button--outlined:hover,
        .button--secondary.button--text:hover {
          background-color: #cde4de;
        }

        .button--secondary.button--outlined:active,
        .button--secondary.button--text:active {
          background-color: #b0ddd4;
        }

        /* Sizes */
        .button--small {
          padding: 0 1em;
          height: 2.25em;
          min-width: 4em;

          font-size: 0.8em;
          font-weight: 600;
        }

        .button--medium {
          padding: 0 1.25em;
          height: 2.5em;
          min-width: 5em;

          font-size: 1em;
          font-weight: 600;
        }

        .button--large {
          padding: 0 1.5em;
          height: 3em;
          min-width: 6em;

          font-size: 1.2em;
          font-weight: 700;
        }

        /* Variants */
        .button--outlined,
        .button--text {
          background-color: transparent;
        }

        .button--contained {
          box-shadow: 0 1.5px 2px rgba(0, 0, 0, 0.16);
        }

        .button--outlined.button--default {
          color: var(--v-default-text, rgba(0, 0, 0, 0.67));
          border: 1px solid var(--v-default-text, rgba(0, 0, 0, 0.67));
        }

        .button--outlined.button--primary {
          color: var(--v-primary-text, #0000a0);
          border: 1px solid var(--v-primary-text, #0000a0);
        }

        .button--outlined.button--secondary {
          color: var(--v-secondary-text, #40bfa3);
          border: 1px solid var(--v-secondary-text, #40bfa3);
        }

        .button--text.button--default {
          color: var(--v-default-text, rgba(0, 0, 0, 0.67));
        }

        .button--text.button--primary {
          color: var(--v-primary-text, #0000a0);
        }

        .button--text.button--secondary {
          color: var(--v-secondary-text, #40bfa3);
        }

        .button:disabled {
          cursor: unset;

          background-color: var(--v-muted, #dddedf);
          color: var(--v-muted-text, rgba(0, 0, 0, 0.36));

          box-shadow: none;
        }

        .button:disabled.button--outlined,
        .button:disabled.button--text {
          background-color: transparent;
        }

        .button:disabled.button--outlined {
          background-color: transparent;

          border: 1px solid var(--v-muted-text, rgba(0, 0, 0, 0.36));
          color: var(--v-muted-text, rgba(0, 0, 0, 0.36));
        }

        .button:disabled.button--text {
          color: var(--v-muted-text, rgba(0, 0, 0, 0.36));
        }
      </style>

      <button class=${this.classes} ?disabled=${this.disabled}>
        <slot></slot>
      </button>
    `;
  }
}

customElements.define("v-button", VButton);
