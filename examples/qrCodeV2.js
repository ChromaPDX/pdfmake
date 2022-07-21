var path = require("path");

function mp(relFontPath) {
  return path.resolve(__dirname, relFontPath)
}

var fonts = {
  Roboto: {
    normal: mp('./fonts/Roboto-Regular.ttf'),
    bold: mp('./fonts/Roboto-Medium.ttf'),
    italics: mp('./fonts/Roboto-Italic.ttf'),
    bolditalics: mp('./fonts/Roboto-MediumItalic.ttf')
  }
};

var PdfPrinter = require('../src/printer');
var printer = new PdfPrinter(fonts);
var fs = require('fs');

var greeting = 'Can you see me';

var docDefinition = {
  pageMargins: [10, 10, 10, 10],
  content: [
    { qrV2: greeting },
  ]
};

var pdfDoc = printer.createPdfKitDocument(docDefinition);
pdfDoc.pipe(fs.createWriteStream(mp('./pdfs/qrCodeV2.pdf')));
pdfDoc.end();
