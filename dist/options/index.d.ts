import type IMG from "./img";
export interface Options {
    [key: string]: any;
    path?: string;
    img?: boolean | IMG;
    logger?: number;
}
declare const _default: () => Options;
export default _default;
