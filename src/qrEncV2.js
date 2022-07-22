/*eslint no-unused-vars: ["error", {"args": "none"}]*/
/*eslint no-redeclare: "off"*/

'use strict';

const qrcodeGenerator = require("qrcode-generator");

const errorCorrectionPercents = {
	L: 0.07,
	M: 0.15,
	Q: 0.25,
	H: 0.3
};

function getPngDimensions(base64) {
	const body = base64.split('data:image/png;base64,')[1];

	const header = atob(body.slice(0, 50)).slice(16, 24)
	const uint8 = Uint8Array.from(header, c => c.charCodeAt(0))
	const dataView = new DataView(uint8.buffer)

	return {
		width: dataView.getInt32(0),
		height: dataView.getInt32(4)
	}
}

function sanitizeGradient(gradient) {
	const newGradient = { ...gradient };

	if (!newGradient.colorStops || !newGradient.colorStops.length) {
		throw "Field 'colorStops' is required in gradient";
	}

	if (newGradient.rotation) {
		newGradient.rotation = Number(newGradient.rotation);
	} else {
		newGradient.rotation = 0;
	}

	newGradient.colorStops = newGradient.colorStops.map((colorStop) => ({
		...colorStop,
		offset: Number(colorStop.offset)
	}));

	return newGradient;
}

function sanitizeOptions(options) {
	const newOptions = {
		qrOptions: {
			errorCorrectionLevel: 'H'
		},
		...options
	};

	newOptions.width = Number(newOptions.width);
	newOptions.height = Number(newOptions.height);
	newOptions.margin = Number(newOptions.margin);
	newOptions.imageOptions = {
		hideBackgroundDots: Boolean(newOptions.imageOptions?.hideBackgroundDots),
		imageSize: options.size,
		margin: 0,
		...newOptions.imageOptions,
	};

	if (newOptions.margin > Math.min(newOptions.width, newOptions.height)) {
		newOptions.margin = Math.min(newOptions.width, newOptions.height);
	}

	newOptions.dotsOptions = {
		...newOptions.dotsOptions
	};
	if (newOptions.dotsOptions.gradient) {
		newOptions.dotsOptions.gradient = sanitizeGradient(newOptions.dotsOptions.gradient);
	}

	if (newOptions.cornersSquareOptions) {
		newOptions.cornersSquareOptions = {
			...newOptions.cornersSquareOptions
		};
		if (newOptions.cornersSquareOptions.gradient) {
			newOptions.cornersSquareOptions.gradient = sanitizeGradient(newOptions.cornersSquareOptions.gradient);
		}
	}

	if (newOptions.cornersDotOptions) {
		newOptions.cornersDotOptions = {
			...newOptions.cornersDotOptions
		};
		if (newOptions.cornersDotOptions.gradient) {
			newOptions.cornersDotOptions.gradient = sanitizeGradient(newOptions.cornersDotOptions.gradient);
		}
	}

	if (newOptions.backgroundOptions) {
		newOptions.backgroundOptions = {
			...newOptions.backgroundOptions
		};
		if (newOptions.backgroundOptions.gradient) {
			newOptions.backgroundOptions.gradient = sanitizeGradient(newOptions.backgroundOptions.gradient);
		}
	}

	return newOptions;
}

const squareMask = [
	[1, 1, 1, 1, 1, 1, 1],
	[1, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 1],
	[1, 1, 1, 1, 1, 1, 1]
];

const dotMask = [
	[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 1, 1, 1, 0, 0],
	[0, 0, 1, 1, 1, 0, 0],
	[0, 0, 1, 1, 1, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0]
];

const document = {
	createElementNS(namespaceURI, qualifiedName) {
		return {
			chldrn: [],
			trbts: {},
			namespaceURI,
			qualifiedName,
			setAttribute: function (attribute, value) {
				this.trbts = {
					[attribute]: value,
					...this.trbts
				}
			},
			appendChild: function (child) {
				this.chldrn = [
					...this.chldrn,
					child,
				]
			},
			outterHTML: function () {
				return `<${this.qualifiedName} ${Object.keys(this.trbts).reduce((prvs, cvl) => {
					return `${prvs} ${cvl}=\"${this.trbts[cvl]}\"`
				}, '')} > ${this.chldrn.reduce((prvsChild, currentchild) => {
					return `${prvsChild} ${currentchild.outterHTML()}`
				}, '')} </${this.qualifiedName}>`;
			}
		}
	}
};

const dotTypes = {
	dots: "dots",
	rounded: "rounded",
	classy: "classy",
	classyRounded: "classy-rounded",
	square: "square",
	extraRounded: "extra-rounded"
};

class QRDot {
	constructor({ svg, type }) {
		this._svg = svg;
		this._type = type;
	}

	draw(x, y, size, getNeighbor) {

		const type = this._type;
		let drawFunction;

		switch (type) {
			case dotTypes.dots:
				drawFunction = this._drawDot;
				break;
			case dotTypes.classy:
				drawFunction = this._drawClassy;
				break;
			case dotTypes.classyRounded:
				drawFunction = this._drawClassyRounded;
				break;
			case dotTypes.rounded:
				drawFunction = this._drawRounded;
				break;
			case dotTypes.extraRounded:
				drawFunction = this._drawExtraRounded;
				break;
			case dotTypes.square:
			default:
				drawFunction = this._drawSquare;
		}

		drawFunction.call(this, { x, y, size, getNeighbor });
	}

	_rotateFigure({ x, y, size, rotation = 0, draw }) {
		const cx = x + size / 2;
		const cy = y + size / 2;

		draw();
		this._element?.setAttribute("transform", `rotate(${(180 * rotation) / Math.PI},${cx},${cy})`);
	}

	_basicDot(args) {
		const { size, x, y } = args;

		this._rotateFigure({
			...args,
			draw: () => {
				this._element = document.createElementNS("http://www.w3.org/2000/svg", "circle");
				this._element.setAttribute("cx", String(x + size / 2));
				this._element.setAttribute("cy", String(y + size / 2));
				this._element.setAttribute("r", String(size / 2));
			}
		});
	}

	_basicSquare(args) {
		const { size, x, y } = args;

		this._rotateFigure({
			...args,
			draw: () => {
				this._element = document.createElementNS("http://www.w3.org/2000/svg", "rect");
				this._element.setAttribute("x", String(x));
				this._element.setAttribute("y", String(y));
				this._element.setAttribute("width", String(size));
				this._element.setAttribute("height", String(size));
			}
		});
	}

	//if rotation === 0 - right side is rounded
	_basicSideRounded(args) {
		const { size, x, y } = args;

		this._rotateFigure({
			...args,
			draw: () => {
				this._element = document.createElementNS("http://www.w3.org/2000/svg", "path");
				this._element.setAttribute(
					"d",
					`M ${x} ${y}` + //go to top left position
					`v ${size}` + //draw line to left bottom corner
					`h ${size / 2}` + //draw line to left bottom corner + half of size right
					`a ${size / 2} ${size / 2}, 0, 0, 0, 0 ${-size}` // draw rounded corner
				);
			}
		});
	}

	//if rotation === 0 - top right corner is rounded
	_basicCornerRounded(args) {
		const { size, x, y } = args;

		this._rotateFigure({
			...args,
			draw: () => {
				this._element = document.createElementNS("http://www.w3.org/2000/svg", "path");
				this._element.setAttribute(
					"d",
					`M ${x} ${y}` + //go to top left position
					`v ${size}` + //draw line to left bottom corner
					`h ${size}` + //draw line to right bottom corner
					`v ${-size / 2}` + //draw line to right bottom corner + half of size top
					`a ${size / 2} ${size / 2}, 0, 0, 0, ${-size / 2} ${-size / 2}` // draw rounded corner
				);
			}
		});
	}

	//if rotation === 0 - top right corner is rounded
	_basicCornerExtraRounded(args) {
		const { size, x, y } = args;

		this._rotateFigure({
			...args,
			draw: () => {
				this._element = document.createElementNS("http://www.w3.org/2000/svg", "path");
				this._element.setAttribute(
					"d",
					`M ${x} ${y}` + //go to top left position
					`v ${size}` + //draw line to left bottom corner
					`h ${size}` + //draw line to right bottom corner
					`a ${size} ${size}, 0, 0, 0, ${-size} ${-size}` // draw rounded top right corner
				);
			}
		});
	}

	//if rotation === 0 - left bottom and right top corners are rounded
	_basicCornersRounded(args) {
		const { size, x, y } = args;

		this._rotateFigure({
			...args,
			draw: () => {
				this._element = document.createElementNS("http://www.w3.org/2000/svg", "path");
				this._element.setAttribute(
					"d",
					`M ${x} ${y}` + //go to left top position
					`v ${size / 2}` + //draw line to left top corner + half of size bottom
					`a ${size / 2} ${size / 2}, 0, 0, 0, ${size / 2} ${size / 2}` + // draw rounded left bottom corner
					`h ${size / 2}` + //draw line to right bottom corner
					`v ${-size / 2}` + //draw line to right bottom corner + half of size top
					`a ${size / 2} ${size / 2}, 0, 0, 0, ${-size / 2} ${-size / 2}` // draw rounded right top corner
				);
			}
		});
	}

	_drawDot({ x, y, size }) {
		this._basicDot({ x, y, size, rotation: 0 });
	}

	_drawSquare({ x, y, size }) {
		this._basicSquare({ x, y, size, rotation: 0 });
	}

	_drawRounded({ x, y, size, getNeighbor }) {
		const leftNeighbor = getNeighbor ? +getNeighbor(-1, 0) : 0;
		const rightNeighbor = getNeighbor ? +getNeighbor(1, 0) : 0;
		const topNeighbor = getNeighbor ? +getNeighbor(0, -1) : 0;
		const bottomNeighbor = getNeighbor ? +getNeighbor(0, 1) : 0;

		const neighborsCount = leftNeighbor + rightNeighbor + topNeighbor + bottomNeighbor;

		if (neighborsCount === 0) {
			this._basicDot({ x, y, size, rotation: 0 });
			return;
		}

		if (neighborsCount > 2 || (leftNeighbor && rightNeighbor) || (topNeighbor && bottomNeighbor)) {
			this._basicSquare({ x, y, size, rotation: 0 });
			return;
		}

		if (neighborsCount === 2) {
			let rotation = 0;

			if (leftNeighbor && topNeighbor) {
				rotation = Math.PI / 2;
			} else if (topNeighbor && rightNeighbor) {
				rotation = Math.PI;
			} else if (rightNeighbor && bottomNeighbor) {
				rotation = -Math.PI / 2;
			}

			this._basicCornerRounded({ x, y, size, rotation });
			return;
		}

		if (neighborsCount === 1) {
			let rotation = 0;

			if (topNeighbor) {
				rotation = Math.PI / 2;
			} else if (rightNeighbor) {
				rotation = Math.PI;
			} else if (bottomNeighbor) {
				rotation = -Math.PI / 2;
			}

			this._basicSideRounded({ x, y, size, rotation });
			return;
		}
	}

	_drawExtraRounded({ x, y, size, getNeighbor }) {
		const leftNeighbor = getNeighbor ? +getNeighbor(-1, 0) : 0;
		const rightNeighbor = getNeighbor ? +getNeighbor(1, 0) : 0;
		const topNeighbor = getNeighbor ? +getNeighbor(0, -1) : 0;
		const bottomNeighbor = getNeighbor ? +getNeighbor(0, 1) : 0;

		const neighborsCount = leftNeighbor + rightNeighbor + topNeighbor + bottomNeighbor;

		if (neighborsCount === 0) {
			this._basicDot({ x, y, size, rotation: 0 });
			return;
		}

		if (neighborsCount > 2 || (leftNeighbor && rightNeighbor) || (topNeighbor && bottomNeighbor)) {
			this._basicSquare({ x, y, size, rotation: 0 });
			return;
		}

		if (neighborsCount === 2) {
			let rotation = 0;

			if (leftNeighbor && topNeighbor) {
				rotation = Math.PI / 2;
			} else if (topNeighbor && rightNeighbor) {
				rotation = Math.PI;
			} else if (rightNeighbor && bottomNeighbor) {
				rotation = -Math.PI / 2;
			}

			this._basicCornerExtraRounded({ x, y, size, rotation });
			return;
		}

		if (neighborsCount === 1) {
			let rotation = 0;

			if (topNeighbor) {
				rotation = Math.PI / 2;
			} else if (rightNeighbor) {
				rotation = Math.PI;
			} else if (bottomNeighbor) {
				rotation = -Math.PI / 2;
			}

			this._basicSideRounded({ x, y, size, rotation });
			return;
		}
	}

	_drawClassy({ x, y, size, getNeighbor }) {
		const leftNeighbor = getNeighbor ? +getNeighbor(-1, 0) : 0;
		const rightNeighbor = getNeighbor ? +getNeighbor(1, 0) : 0;
		const topNeighbor = getNeighbor ? +getNeighbor(0, -1) : 0;
		const bottomNeighbor = getNeighbor ? +getNeighbor(0, 1) : 0;

		const neighborsCount = leftNeighbor + rightNeighbor + topNeighbor + bottomNeighbor;

		if (neighborsCount === 0) {
			this._basicCornersRounded({ x, y, size, rotation: Math.PI / 2 });
			return;
		}

		if (!leftNeighbor && !topNeighbor) {
			this._basicCornerRounded({ x, y, size, rotation: -Math.PI / 2 });
			return;
		}

		if (!rightNeighbor && !bottomNeighbor) {
			this._basicCornerRounded({ x, y, size, rotation: Math.PI / 2 });
			return;
		}

		this._basicSquare({ x, y, size, rotation: 0 });
	}

	_drawClassyRounded({ x, y, size, getNeighbor }) {
		const leftNeighbor = getNeighbor ? +getNeighbor(-1, 0) : 0;
		const rightNeighbor = getNeighbor ? +getNeighbor(1, 0) : 0;
		const topNeighbor = getNeighbor ? +getNeighbor(0, -1) : 0;
		const bottomNeighbor = getNeighbor ? +getNeighbor(0, 1) : 0;

		const neighborsCount = leftNeighbor + rightNeighbor + topNeighbor + bottomNeighbor;

		if (neighborsCount === 0) {
			this._basicCornersRounded({ x, y, size, rotation: Math.PI / 2 });
			return;
		}

		if (!leftNeighbor && !topNeighbor) {
			this._basicCornerExtraRounded({ x, y, size, rotation: -Math.PI / 2 });
			return;
		}

		if (!rightNeighbor && !bottomNeighbor) {
			this._basicCornerExtraRounded({ x, y, size, rotation: Math.PI / 2 });
			return;
		}

		this._basicSquare({ x, y, size, rotation: 0 });
	}
}

function calculateImageSize({
	originalHeight,
	originalWidth,
	maxHiddenDots,
	maxHiddenAxisDots,
	dotSize
}) {
	const hideDots = { x: 0, y: 0 };
	const imageSize = { x: 0, y: 0 };

	if (originalHeight <= 0 || originalWidth <= 0 || maxHiddenDots <= 0 || dotSize <= 0) {
		return {
			height: 0,
			width: 0,
			hideYDots: 0,
			hideXDots: 0
		};
	}

	const k = originalHeight / originalWidth;

	//Getting the maximum possible axis hidden dots
	hideDots.x = Math.floor(Math.sqrt(maxHiddenDots / k));
	//The count of hidden dot's can't be less than 1
	if (hideDots.x <= 0) hideDots.x = 1;
	//Check the limit of the maximum allowed axis hidden dots
	if (maxHiddenAxisDots && maxHiddenAxisDots < hideDots.x) hideDots.x = maxHiddenAxisDots;
	//The count of dots should be odd
	if (hideDots.x % 2 === 0) hideDots.x--;
	imageSize.x = hideDots.x * dotSize;
	//Calculate opposite axis hidden dots based on axis value.
	//The value will be odd.
	//We use ceil to prevent dots covering by the image.
	hideDots.y = 1 + 2 * Math.ceil((hideDots.x * k - 1) / 2);
	imageSize.y = Math.round(imageSize.x * k);
	//If the result dots count is bigger than max - then decrease size and calculate again
	if (hideDots.y * hideDots.x > maxHiddenDots || (maxHiddenAxisDots && maxHiddenAxisDots < hideDots.y)) {
		if (maxHiddenAxisDots && maxHiddenAxisDots < hideDots.y) {
			hideDots.y = maxHiddenAxisDots;
			if (hideDots.y % 2 === 0) hideDots.x--;
		} else {
			hideDots.y -= 2;
		}
		imageSize.y = hideDots.y * dotSize;
		hideDots.x = 1 + 2 * Math.ceil((hideDots.y / k - 1) / 2);
		imageSize.x = Math.round(imageSize.y / k);
	}

	return {
		height: imageSize.y,
		width: imageSize.x,
		hideYDots: hideDots.y,
		hideXDots: hideDots.x
	};
}

function buildQrV2(qrV2, options = {}, images) {
	return new Promise((res, rej) => {

		const size = options.size;

		var typeNumber = 4;
		var errorCorrectionLevel = 'L';
		var qr = qrcodeGenerator(typeNumber, errorCorrectionLevel);
		qr.addData(qrV2);
		qr.make();

		const count = qr.getModuleCount();

		const element = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		element.setAttribute("width", String(options.size));
		element.setAttribute("height", String(options.size));
		const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
		const dotsClipPath = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
		const gradientOptions = options.backgroundOptions && options.backgroundOptions.gradient;
		const color = options.backgroundOptions && options.backgroundOptions.color;
		const minSize = options.size - options.margin * 2;
		const dotSize = Math.floor(minSize / count);
		const cornersSquareSize = dotSize * 7;
		const cornersDotSize = dotSize * 3;
		const xBeginning = Math.floor((options.size - count * dotSize) / 2);
		const yBeginning = Math.floor((options.size - count * dotSize) / 2);

		function _createColor({
			options,
			color,
			additionalRotation,
			x,
			y,
			height,
			width,
			name
		}) {

			const size = width > height ? width : height;
			const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
			rect.setAttribute("x", String(x));
			rect.setAttribute("y", String(y));
			rect.setAttribute("height", String(height));
			rect.setAttribute("width", String(width));
			rect.setAttribute("clip-path", `url('#clip-path-${name}')`);

			if (options) {
				let gradient;
				if (options.type === gradientTypes.radial) {
					gradient = document.createElementNS("http://www.w3.org/2000/svg", "radialGradient");
					gradient.setAttribute("id", name);
					gradient.setAttribute("gradientUnits", "userSpaceOnUse");
					gradient.setAttribute("fx", String(x + width / 2));
					gradient.setAttribute("fy", String(y + height / 2));
					gradient.setAttribute("cx", String(x + width / 2));
					gradient.setAttribute("cy", String(y + height / 2));
					gradient.setAttribute("r", String(size / 2));
				} else {
					const rotation = ((options.rotation || 0) + additionalRotation) % (2 * Math.PI);
					const positiveRotation = (rotation + 2 * Math.PI) % (2 * Math.PI);
					let x0 = x + width / 2;
					let y0 = y + height / 2;
					let x1 = x + width / 2;
					let y1 = y + height / 2;

					if (
						(positiveRotation >= 0 && positiveRotation <= 0.25 * Math.PI) ||
						(positiveRotation > 1.75 * Math.PI && positiveRotation <= 2 * Math.PI)
					) {
						x0 = x0 - width / 2;
						y0 = y0 - (height / 2) * Math.tan(rotation);
						x1 = x1 + width / 2;
						y1 = y1 + (height / 2) * Math.tan(rotation);
					} else if (positiveRotation > 0.25 * Math.PI && positiveRotation <= 0.75 * Math.PI) {
						y0 = y0 - height / 2;
						x0 = x0 - width / 2 / Math.tan(rotation);
						y1 = y1 + height / 2;
						x1 = x1 + width / 2 / Math.tan(rotation);
					} else if (positiveRotation > 0.75 * Math.PI && positiveRotation <= 1.25 * Math.PI) {
						x0 = x0 + width / 2;
						y0 = y0 + (height / 2) * Math.tan(rotation);
						x1 = x1 - width / 2;
						y1 = y1 - (height / 2) * Math.tan(rotation);
					} else if (positiveRotation > 1.25 * Math.PI && positiveRotation <= 1.75 * Math.PI) {
						y0 = y0 + height / 2;
						x0 = x0 + width / 2 / Math.tan(rotation);
						y1 = y1 - height / 2;
						x1 = x1 - width / 2 / Math.tan(rotation);
					}

					gradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
					gradient.setAttribute("id", name);
					gradient.setAttribute("gradientUnits", "userSpaceOnUse");
					gradient.setAttribute("x1", String(Math.round(x0)));
					gradient.setAttribute("y1", String(Math.round(y0)));
					gradient.setAttribute("x2", String(Math.round(x1)));
					gradient.setAttribute("y2", String(Math.round(y1)));
				}

				options.colorStops.forEach(({ offset, color }) => {
					const stop = document.createElementNS("http://www.w3.org/2000/svg", "stop");
					stop.setAttribute("offset", `${100 * offset}%`);
					stop.setAttribute("stop-color", color);
					gradient.appendChild(stop);
				});

				rect.setAttribute("fill", `url('#${name}')`);
				defs.appendChild(gradient);
			} else if (color) {
				rect.setAttribute("fill", color);
			}

			element.appendChild(rect);
		}

		function drawDots(filter) {

			const xBeginning = Math.floor((options.size - count * dotSize) / 2);
			const yBeginning = Math.floor((options.size - count * dotSize) / 2);
			const dot = new QRDot({ svg: element, type: options.dotsOptions?.type });

			dotsClipPath.setAttribute("id", "clip-path-dot-color");
			defs.appendChild(dotsClipPath);

			_createColor({
				options: options.dotsOptions?.gradient,
				color: options.dotsOptions?.color,
				additionalRotation: 0,
				x: xBeginning,
				y: yBeginning,
				height: count * dotSize,
				width: count * dotSize,
				name: "dot-color"
			});

			for (let i = 0; i < count; i++) {
				for (let j = 0; j < count; j++) {
					if (filter && !filter(i, j)) {
						continue;
					}
					if (!qr.isDark(i, j)) {
						continue;
					}

					dot.draw(
						xBeginning + i * dotSize,
						yBeginning + j * dotSize,
						dotSize,
						(xOffset, yOffset) => {
							if (i + xOffset < 0 || j + yOffset < 0 || i + xOffset >= count || j + yOffset >= count) return false;
							if (filter && !filter(i + xOffset, j + yOffset)) return false;
							return !!qr && qr.isDark(i + xOffset, j + yOffset);
						}
					);

					if (dot._element && dotsClipPath) {
						dotsClipPath.appendChild(dot._element);
					}
				}
			}
		}

		let drawImageSize = {
			hideXDots: 0,
			hideYDots: 0,
			width: 0,
			height: 0
		};

		if (options.img) {
			const { imageOptions, qrOptions } = options;
			const coverLevel = imageOptions.imageSize * errorCorrectionPercents[qrOptions.errorCorrectionLevel];
			const maxHiddenDots = Math.floor(coverLevel * count * count);

			const dimensions = getPngDimensions(images[options.img]);

			drawImageSize = calculateImageSize({
				originalWidth: dimensions.width,
				originalHeight: dimensions.height,
				maxHiddenDots,
				maxHiddenAxisDots: count - 14,
				dotSize
			});
		}

		if (gradientOptions || color) {
			this._createColor({
				options: gradientOptions,
				color: color,
				additionalRotation: 0,
				x: 0,
				y: 0,
				height: options.size,
				width: options.size,
				name: "background-color"
			});
		}

		drawDots((i, j) => {
			if (options.imageOptions?.hideBackgroundDots) {
				if (
					i >= (count - drawImageSize.hideXDots) / 2 &&
					i < (count + drawImageSize.hideXDots) / 2 &&
					j >= (count - drawImageSize.hideYDots) / 2 &&
					j < (count + drawImageSize.hideYDots) / 2
				) {
					return false;
				}
			}

			if (squareMask[i]?.[j] || squareMask[i - count + 7]?.[j] || squareMask[i]?.[j - count + 7]) {
				return false;
			}

			if (dotMask[i]?.[j] || dotMask[i - count + 7]?.[j] || dotMask[i]?.[j - count + 7]) {
				return false;
			}

			return true;
		});

		[
			[0, 0, 0],
			[1, 0, Math.PI / 2],
			[0, 1, -Math.PI / 2]
		].forEach(([column, row, rotation]) => {
			const x = xBeginning + column * dotSize * (count - 7);
			const y = yBeginning + row * dotSize * (count - 7);
			let cornersSquareClipPath = dotsClipPath;
			let cornersDotClipPath = dotsClipPath;

			if (options.cornersSquareOptions?.gradient || options.cornersSquareOptions?.color) {

				cornersSquareClipPath = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
				cornersSquareClipPath.setAttribute("id", `clip-path-corners-square-color-${column}-${row}`);
				defs.appendChild(cornersSquareClipPath);
				cornersSquareClipPath = cornersDotClipPath = cornersSquareClipPath;

				this._createColor({
					options: options.cornersSquareOptions?.gradient,
					color: options.cornersSquareOptions?.color,
					additionalRotation: rotation,
					x,
					y,
					height: cornersSquareSize,
					width: cornersSquareSize,
					name: `corners-square-color-${column}-${row}`
				});
			}

			if (options.cornersSquareOptions?.type) {

				const cornersSquare = new QRCornerSquare({ svg: this._element, type: options.cornersSquareOptions.type });

				cornersSquare.draw(x, y, cornersSquareSize, rotation);

				if (cornersSquare._element && cornersSquareClipPath) {
					cornersSquareClipPath.appendChild(cornersSquare._element);
				}
			} else {

				const dot = new QRDot({ svg: element, type: options.dotsOptions?.type });

				for (let i = 0; i < squareMask.length; i++) {
					for (let j = 0; j < squareMask[i].length; j++) {
						if (!squareMask[i]?.[j]) {
							continue;
						}

						dot.draw(
							x + i * dotSize,
							y + j * dotSize,
							dotSize,
							(xOffset, yOffset) => !!squareMask[i + xOffset]?.[j + yOffset]
						);

						if (dot._element && cornersSquareClipPath) {
							cornersSquareClipPath.appendChild(dot._element);
						}
					}
				}

				defs.appendChild(cornersDotClipPath)
			}

			if (options.cornersDotOptions?.gradient || options.cornersDotOptions?.color) {
				cornersDotClipPath = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
				cornersDotClipPath.setAttribute("id", `clip-path-corners-dot-color-${column}-${row}`);

				this._cornersDotClipPath = cornersDotClipPath;

				this._createColor({
					options: options.cornersDotOptions?.gradient,
					color: options.cornersDotOptions?.color,
					additionalRotation: rotation,
					x: x + dotSize * 2,
					y: y + dotSize * 2,
					height: cornersDotSize,
					width: cornersDotSize,
					name: `corners-dot-color-${column}-${row}`
				});

				defs.appendChild(cornersDotClipPath);
			}

			if (options.cornersDotOptions?.type) {
				const cornersDot = new QRCornerDot({ svg: this._element, type: options.cornersDotOptions.type });

				cornersDot.draw(x + dotSize * 2, y + dotSize * 2, cornersDotSize, rotation);

				if (cornersDot._element && cornersDotClipPath) {
					cornersDotClipPath.appendChild(cornersDot._element);
				}
			} else {
				const dot = new QRDot({ svg: element, type: options.dotsOptions?.type });

				for (let i = 0; i < dotMask.length; i++) {
					for (let j = 0; j < dotMask[i].length; j++) {
						if (!dotMask[i]?.[j]) {
							continue;
						}

						dot.draw(
							x + i * dotSize,
							y + j * dotSize,
							dotSize,
							(xOffset, yOffset) => !!dotMask[i + xOffset]?.[j + yOffset]
						);

						if (dot._element && cornersDotClipPath) {
							cornersDotClipPath.appendChild(dot._element);
						}
					}
				}
			}

			// defs.appendChild(cornersDotClipPath)

		});

		if (options.img) {
			const xBeginning = Math.floor((options.size - count * dotSize) / 2);
			const yBeginning = Math.floor((options.size - count * dotSize) / 2);
			const dx = xBeginning + options.imageOptions.margin + (count * dotSize - drawImageSize.width) / 2;
			const dy = yBeginning + options.imageOptions.margin + (count * dotSize - drawImageSize.height) / 2;
			const dw = drawImageSize.width - options.imageOptions.margin * 2;
			const dh = drawImageSize.height - options.imageOptions.margin * 2;
			const image = document.createElementNS("http://www.w3.org/2000/svg", "image");
			image.setAttribute("href", options.img || "");
			image.setAttribute("x", String(dx));
			image.setAttribute("y", String(dy));
			image.setAttribute("width", `${dw}px`);
			image.setAttribute("height", `${dh}px`);
			element.appendChild(image);
		}
		element.appendChild(defs)
		const svg = element.outterHTML();
		res({ svg, size });
	})
}

async function measure(node, images) {
	var cd = await buildQrV2(node.qrV2, sanitizeOptions(node), images);
	node.svg = node._svg = cd.svg;
	node._width = node._height = node._minWidth = node._maxWidth = node._minHeight = node._maxHeight = cd.size;
	return node;
}

module.exports = {
	measure: measure
};