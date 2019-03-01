import { html, render } from 'lit-html';
import styles from './my-button/my-button.scss';

class MyButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.update();
  }

  update() {
    render(this.renderShadowDom(), this.shadowRoot);
  }

  renderShadowDom() {
    return html`
      <style>
        ${styles}
      </style>
      ${
        html`
          <button class="my-button">Custom Button</button>
        `
      }
    `;
  }
}

window.customElements.define('my-button', MyButton);
