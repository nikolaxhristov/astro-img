import type { AstroIntegration } from "astro";
import { deepmerge } from "deepmerge-ts";

import defaultOptions, { Options } from "./options/index.js";

export default (options: Options = {}): AstroIntegration => {
	const _options = deepmerge(defaultOptions(), options);

	_options.path = _options.path?.endsWith("/")
		? _options.path
		: `${_options.path}/`;

	return {
		name: "astro-img",
		hooks: {},
	};
};
