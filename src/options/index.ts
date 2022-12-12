import type IMG from "./img";

export interface Options {
	// rome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;

	path?: string;

	img?: boolean | IMG;

	logger?: number;
}

export default (): Options => ({
	path: "./dist/",
	img: {
		avif: {
			chromaSubsampling: "4:4:4",
			// rome-ignore lint/nursery/noPrecisionLoss:
			effort: 9,
		},
		gif: {
			// rome-ignore lint/nursery/noPrecisionLoss:
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
			// rome-ignore lint/nursery/noPrecisionLoss:
			compressionLevel: 9,
			palette: true,
		},
		raw: {},
		tiff: {
			compression: "lzw",
		},
		webp: {
			// rome-ignore lint/nursery/noPrecisionLoss:
			effort: 6,
		},
	},
	// rome-ignore lint/nursery/noPrecisionLoss:
	logger: 2,
});
