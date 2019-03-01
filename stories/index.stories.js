import { storiesOf, html } from '@open-wc/storybook';

// import '../src/my-button/my-button'
import '../src/hello-component'

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
