# Overview

This is a repo to demonstrate the CSS duplication issue. I introduced Stencil to an existing app and web components built with shadow DOM didn't work well with the testing setup. As a result we've been building web components with scoped CSS instead of shadow DOM. Since scoped CSS allows global styles to "leak in" to the component, we also added stencil's `src/components` directory to tailwind's `content` configuration to make sure that any tailwind utility we included in the global stylesheet.

We're dealing with more complex components now and wanted to be able to use tailwind's `@apply` directive in a component's CSS file, so we added the `stencil-tailwind-plugin`. This worked, but it doesn't _just_ expand the `@apply` directive, it also gives us all the utilities that are used in the component's tsx file, but we already had these in the global stylesheet.

## Setup

This repo is a monorepo with two packages:

- A `component-library` package using Stencil. It builds a web component without shadow DOM and uses some tailwind utilities in the tsx as well as the `@apply` directive in the CSS
- A `site` package that is an 11ty static site generator. The static templates also use tailwind and the package uses `component-library` as a dependency

1. `yarn install`
1. `cd packages/component-library && yarn build`
1. `cd packages/site && yarn start`

Go to `localhost:8080` in your browser and open the inspector. You'll see that `@apply` has worked. If you look at the styles on the `<span>` inside of `<my-component>` you'll also see two definitions of the `font-bold` class - one in the global stylesheet and one on component's definition.
