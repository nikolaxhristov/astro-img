# [astro-img] 🖼️

This **[Astro integration][astro-integration]** provides an image component.

## Installation

There are two ways to add integrations to your project. Let's try the most
convenient option first!

### `astro add` command

Astro includes a CLI tool for adding first party integrations: `astro add`. This
command will:

1. (Optionally) Install all necessary dependencies and peer dependencies
2. (Also optionally) Update your `astro.config.*` file to apply this integration

To install `astro-img`, run the following from your project directory and follow
the prompts:

```sh
# Using NPM
npx astro add astro-img
# Using Yarn
yarn astro add astro-img
# Using PNPM
pnpx astro add astro-img
```

### Install dependencies manually

First, install the `astro-img` integration like so:

```
npm install -D -E astro-img
```

Then, apply this integration to your `astro.config.*` file using the
`integrations` property:

**`astro.config.ts`**

```ts
import img from "astro-img";

export default {
	integrations: [img()],
}
```

## Getting started

You can override any of the default options from the configurations of:

-   [sharp](src/options/img.ts)

or disable them entirely:

```ts
import img from "astro-img";

export default {
	integrations: [
		img({
			img: false,
		}),
	],
}
```

If your path is different than `dist` be sure to update it accordingly:

```ts
import img from "astro-img";

export default {
	outDir: "./build",
	integrations: [
		img({
			path: "./build",
		}),
	],
}
```

Set logger to 0 if you do not want to see debug messages. Default is 2.

```ts
import img from "astro-img";

export default {
	integrations: [
		img({
			logger: 0,
		}),
	],
}
```

[astro-img]: https://npmjs.org/astro-img
[astro-integration]: https://docs.astro.build/en/guides/integrations-guide/

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a history of changes to this integration.

[![Lightrix logo](https://raw.githubusercontent.com/Lightrix/npm/main/.github/img/favicon.png "Built with Lightrix/npm")](https://github.com/Lightrix/npm)
