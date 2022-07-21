/*eslint no-unused-vars: ["error", {"args": "none"}]*/
/*eslint no-redeclare: "off"*/

'use strict';

function buildQrV2(data, options) {

	const size = options.size;
	// var canvas = [];
	// var background = options.background || '#fff';
	// var foreground = options.foreground || '#000';
	// //var margin = options.margin || 4;
	// var matrix = generateFrame(data, options);
	// var n = matrix.length;
	// var modSize = Math.floor(options.fit ? options.fit / n : 5);
	// var size = n * modSize;

	// canvas.push({
	// 	type: 'rect',
	// 	x: 0, y: 0, w: size, h: size, lineWidth: 0, color: background
	// });

	// for (var i = 0; i < n; ++i) {
	// 	for (var j = 0; j < n; ++j) {
	// 		if (matrix[i][j]) {
	// 			canvas.push({
	// 				type: 'rect',
	// 				x: modSize * j,
	// 				y: modSize * i,
	// 				w: modSize,
	// 				h: modSize,
	// 				lineWidth: 0,
	// 				color: foreground
	// 			});
	// 		}
	// 	}
	// }

	return {
		svg: `
<svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 100 100">
<circle cx="50" cy="50" r="44" fill="none" stroke="#000" stroke-width="10"/>
<path d="M76,57A27,27 0 1 1 76,44h-13A15,15 0 1 0 63,57Z"/>
</svg>
		`,
		size
	};

}

function measure(node) {
	var cd = buildQrV2(node.qrV2, node);
	node.svg = node._svg = cd.svg;
	node._width = node._height = node._minWidth = node._maxWidth = node._minHeight = node._maxHeight = cd.size;
	return node;
}

module.exports = {
	measure: measure
};