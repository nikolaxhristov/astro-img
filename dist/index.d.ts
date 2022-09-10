import type { AstroIntegration } from "astro";
import { Options } from "./options/index.js";
export default function createPlugin(integrationOptions?: Options): AstroIntegration;
