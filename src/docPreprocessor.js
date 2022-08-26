'use strict';

var isString = require('./helpers').isString;
var isNumber = require('./helpers').isNumber;
var isBoolean = require('./helpers').isBoolean;
var isArray = require('./helpers').isArray;
var isUndefined = require('./helpers').isUndefined;
var fontStringify = require('./helpers').fontStringify;

function DocPreprocessor() {

}

DocPreprocessor.prototype.preprocessDocument = async function (docStructure) {
	this.parentNode = null;
	this.tocs = [];
	this.nodeReferences = [];
	return await await this.preprocessNode(docStructure);
};

DocPreprocessor.prototype.preprocessNode = async function (node, order = 1) {
	// expand shortcuts and casting values
	if (isArray(node)) {
		node = { stack: node };
	} else if (isString(node)) {
		node = { text: node };
	} else if (isNumber(node) || isBoolean(node)) {
		node = { text: node.toString() };
	} else if (node === undefined || node === null) {
		node = { text: '' };
	} else if (Object.keys(node).length === 0) { // empty object
		node = { text: '' };
	} else if ('text' in node && (node.text === undefined || node.text === null)) {
		node.text = '';
	}

	node.order = order;

	if (node.columns) {
		return await this.preprocessColumns(node);
	} else if (node.stack) {
		return await this.preprocessVerticalContainer(node);
	} else if (node.ul) {
		return await this.preprocessList(node);
	} else if (node.ol) {
		return await this.preprocessList(node);
	} else if (node.table) {
		return await this.preprocessTable(node);
	} else if (node.text !== undefined) {
		return await this.preprocessText(node);
	} else if (node.toc) {
		return await this.preprocessToc(node);
	} else if (node.image) {
		return await this.preprocessImage(node);
	} else if (node.svg) {
		return await this.preprocessSVG(node);
	} else if (node.canvas) {
		return await this.preprocessCanvas(node);
	} else if (node.qr) {
		return await this.preprocessQr(node);
	} else if (node.qrV2) {
		return await this.preprocessQr(node);
	} else if (node.pageReference || node.textReference) {
		return await this.preprocessText(node);
	} else {
		throw 'Unrecognized document structure: ' + JSON.stringify(node, fontStringify);
	}
};

DocPreprocessor.prototype.preprocessColumns = async function (node) {
	var columns = node.columns;

	for (var i = 0, l = columns.length; i < l; i++) {
		columns[i] = await await this.preprocessNode(columns[i], i);
	}

	return node;
};

DocPreprocessor.prototype.preprocessVerticalContainer = async function (node) {
	var items = node.stack;

	for (var i = 0, l = items.length; i < l; i++) {
		items[i] = await await this.preprocessNode(items[i], i);
	}

	return node;
};

DocPreprocessor.prototype.preprocessList = async function (node) {
	var items = node.ul || node.ol;

	for (var i = 0, l = items.length; i < l; i++) {
		items[i] = await this.preprocessNode(items[i], i);
	}

	return node;
};

DocPreprocessor.prototype.preprocessTable = async function (node) {
	var col, row, cols, rows;

	for (col = 0, cols = node.table.body[0].length; col < cols; col++) {
		for (row = 0, rows = node.table.body.length; row < rows; row++) {
			var rowData = node.table.body[row];
			var data = rowData[col];
			if (data !== undefined) {
				if (data === null) { // transform to object
					data = '';
				}
				if (!data._span) {
					rowData[col] = await this.preprocessNode(data, (col * node.table.body[0].length) + row);
				}
			}
		}
	}

	return node;
};

DocPreprocessor.prototype.preprocessText = async function (node) {
	if (node.tocItem) {
		if (!isArray(node.tocItem)) {
			node.tocItem = [node.tocItem];
		}

		for (var i = 0, l = node.tocItem.length; i < l; i++) {
			if (!isString(node.tocItem[i])) {
				node.tocItem[i] = '_default_';
			}

			var tocItemId = node.tocItem[i];

			if (!this.tocs[tocItemId]) {
				this.tocs[tocItemId] = { toc: { _items: [], _pseudo: true } };
			}

			if (!node.id) {
				node.id = 'toc-' + tocItemId + '-' + this.tocs[tocItemId].toc._items.length;
			}

			var tocItemRef = {
				_nodeRef: this._getNodeForNodeRef(node),
				_textNodeRef: node
			};
			this.tocs[tocItemId].toc._items.push(tocItemRef);
		}
	}

	if (node.id) {
		if (this.nodeReferences[node.id]) {
			if (!this.nodeReferences[node.id]._pseudo) {
				throw "Node id '" + node.id + "' already exists";
			}

			this.nodeReferences[node.id]._nodeRef = this._getNodeForNodeRef(node);
			this.nodeReferences[node.id]._textNodeRef = node;
			this.nodeReferences[node.id]._pseudo = false;
		} else {
			this.nodeReferences[node.id] = {
				_nodeRef: this._getNodeForNodeRef(node),
				_textNodeRef: node
			};
		}
	}

	if (node.pageReference) {
		if (!this.nodeReferences[node.pageReference]) {
			this.nodeReferences[node.pageReference] = {
				_nodeRef: {},
				_textNodeRef: {},
				_pseudo: true
			};
		}
		node.text = '00000';
		node.linkToDestination = node.pageReference;
		node._pageRef = this.nodeReferences[node.pageReference];
	}

	if (node.textReference) {
		if (!this.nodeReferences[node.textReference]) {
			this.nodeReferences[node.textReference] = { _nodeRef: {}, _pseudo: true };
		}

		node.text = '';
		node.linkToDestination = node.textReference;
		node._textRef = this.nodeReferences[node.textReference];
	}

	if (node.text && node.text.text) {
		node.text = [await this.preprocessNode(node.text)];
	} else if (isArray(node.text)) {
		var isSetParentNode = false;
		if (this.parentNode === null) {
			this.parentNode = node;
			isSetParentNode = true;
		}

		for (var i = 0, l = node.text.length; i < l; i++) {
			node.text[i] = await this.preprocessNode(node.text[i]);
		}

		if (isSetParentNode) {
			this.parentNode = null;
		}
	}

	return node;
};

DocPreprocessor.prototype.preprocessToc = async function (node) {
	if (!node.toc.id) {
		node.toc.id = '_default_';
	}

	node.toc.title = node.toc.title ? await this.preprocessNode(node.toc.title) : null;
	node.toc._items = [];

	if (this.tocs[node.toc.id]) {
		if (!this.tocs[node.toc.id].toc._pseudo) {
			throw "TOC '" + node.toc.id + "' already exists";
		}

		node.toc._items = this.tocs[node.toc.id].toc._items;
	}

	this.tocs[node.toc.id] = node;

	return node;
};

DocPreprocessor.prototype.preprocessImage = async function (node) {
	if (!isUndefined(node.image.type) && !isUndefined(node.image.data) && (node.image.type === 'Buffer') && isArray(node.image.data)) {
		node.image = Buffer.from(node.image.data);
	}
	return node;
};

DocPreprocessor.prototype.preprocessSVG = async function (node) {
	return node;
};

DocPreprocessor.prototype.preprocessCanvas = async function (node) {
	return node;
};

DocPreprocessor.prototype.preprocessQr = async function (node) {
	return node;
};

DocPreprocessor.prototype._getNodeForNodeRef = async function (node) {
	if (this.parentNode) {
		return this.parentNode;
	}

	return node;
}

module.exports = DocPreprocessor;
