# Web Components, Storybook and Spectrum CSS setup

The goal of this repository is to create a simple setup and workflow to transform `spectrum-css` components into web-components to be demoed with *storybook.js*

## Getting started

*Prerequisites*: This repo has a dependency another repo: [spectrum-css](https://github.com/adobe/spectrum-css). `gulp-cli` has to be installed globally in order for `spectrum-css` to be built. This might change in the future depending on `spectrum-css` build system.

Read more about [spectrum-css](https://github.com/adobe/spectrum-css)

```sh
git clone --recurse-submodules https://github.com/bboydflo/lit-html-storybook-setup
cd lit-html-storybook-setup
cd src/spectrum-css
npm i # install spectrum-css dependencies
gulp # build spectrum-css components
cd .. # go back to the root of this project
npm i # install project dependencies
npm run storybook # start storybook
```

## Todo

- [ ] update readme.md
- [ ] add new spectrum component workflow
