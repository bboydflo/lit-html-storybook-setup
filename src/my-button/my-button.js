import { LitElement, html } from 'lit-element'
import styles from '!to-string-loader!css-loader!sass-loader!./my-button.scss'

export default class MyButton extends LitElement {
  render(){
    return html`
      <style>${styles}</style>
      <button class="my-button">Custom Button</button>
    `
  }
}

// Register the new element with the browser.
customElements.define('my-button', MyButton)
