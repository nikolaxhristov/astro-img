import type IMG from "../options/img.js";
import type { Sharp } from "sharp";
import type { optionCallbacksFile } from "files-pipeline/dist/options/index.js";
export interface sharpBuffer extends Sharp {
    [key: string]: any;
}
export interface currentSharp extends Omit<optionCallbacksFile, "buffer"> {
    buffer: sharpBuffer;
}
declare const _default: (options: IMG, current: currentSharp) => Promise<any>;
export default _default;
