import type IMG from "./img";
export interface Options {
    [key: string]: any;
    /**
     * Astro build path.
     * @default "./dist/"
     */
    path?: string;
    /**
     * [sharp] options.
     */
    img?: boolean | IMG;
    /**
     * Logger level.
     * Default: 2
     */
    logger?: number;
}
declare const _default: () => Options;
export default _default;
