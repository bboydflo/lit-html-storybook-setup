import { html, render } from 'lit-html';

import pageStyles from '!to-string-loader!css-loader!./spectrum-css/dist/components/page/index.css'
import lightColorStops from '!to-string-loader!css-loader!./spectrum-css/dist/components/page/multiStops/light.css'
import typographyStyles from '!to-string-loader!css-loader!./spectrum-css/dist/components/typography/index.css'
import lightTypographyColorStops from '!to-string-loader!css-loader!./spectrum-css/dist/components/typography/multiStops/light.css'

import buttonStyles from '!to-string-loader!css-loader!./spectrum-css/dist/components/button/index.css'
import lightButtonStyles from '!to-string-loader!css-loader!./spectrum-css/dist/components/button/multiStops/light.css'

class SpectrumButton extends HTMLElement {
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
        ${pageStyles}
        ${lightColorStops}
        ${typographyStyles}
        ${lightTypographyColorStops}

        ${buttonStyles}
        ${lightButtonStyles}
      </style>
      ${
        html`
          <button class="spectrum-Button spectrum-Button--primary">
            <span class="spectrum-Button-label">Button</span>
          </button>
        `
      }
    `;
  }
}

window.customElements.define('spectrum-button', SpectrumButton);
