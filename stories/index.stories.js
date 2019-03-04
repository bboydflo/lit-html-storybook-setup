import { storiesOf, html } from '@open-wc/demoing-storybook';

import '../src/my-button/my-button'
import '../src/spectrum-button'

storiesOf('Demo', module)
  .add(
    'Welcome',
    () => html`
    <div>
      <h1>Welcome to the Storybook Demo</h1>
      <my-button></my-button>
    </div>
    `,
  )
  .add(
    'Spectrum button',
    () => html`
      <spectrum-button></spectrum-button>
    `,
  )
