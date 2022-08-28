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

export default (): Options => {
	return {
		path: "./dist/",
		img: {
			avif: {
				chromaSubsampling: "4:4:4",
				effort: 9,
			},
			gif: {
				effort: 10,
			},
			heif: {
				chromaSubsampling: "4:4:4",
			},
			jpeg: {
				chromaSubsampling: "4:4:4",
				mozjpeg: true,
				trellisQuantisation: true,
				overshootDeringing: true,
				optimiseScans: true,
			},
			png: {
				compressionLevel: 9,
				palette: true,
			},
			raw: {},
			tiff: {
				compression: "lzw",
			},
			webp: {
				effort: 6,
			},
		},
		logger: 2,
	};
};
