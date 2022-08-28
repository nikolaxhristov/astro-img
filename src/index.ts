import type { AstroIntegration } from "astro";
import { deepmerge } from "deepmerge-ts";

import defaultOptions, { Options } from "./options/index.js";

/**
 * It takes in an object of options, and returns an object that Astro can use to create a plugin
 * @param {Options} integrationOptions - Options = {}
 * @returns A function that returns an object.
 */
export default function createPlugin(
	integrationOptions: Options = {}
): AstroIntegration {
	const _options = deepmerge(defaultOptions(), integrationOptions);

	_options.path = _options.path?.endsWith("/")
		? _options.path
		: `${_options.path}/`;

	return {
		name: "astro-img",
		hooks: {
			// TODO
		},
	};
}
