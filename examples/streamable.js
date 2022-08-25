var pdfmake = require('../js/index'); // only during development, otherwise use the following line
//var pdfmake = require('pdfmake');

var Roboto = require('../fonts/Roboto');
pdfmake.addFonts(Roboto);

// or you can define the font manually:
/*
pdfmake.addFonts({
  Roboto: {
    normal: '../fonts/Roboto/Roboto-Regular.ttf',
    bold: '../fonts/Roboto/Roboto-Medium.ttf',
    italics: '../fonts/Roboto/Roboto-Italic.ttf',
    bolditalics: '../fonts/Roboto/Roboto-MediumItalic.ttf'
  }
});
*/

var docDefinition = {
  content: [
    'First paragraph',
    { text: 'hello synchronous' },
  ]
};

var pdf = pdfmake.createPdf(docDefinition);

// var pdf = pdfmake.createStreamablePdf(docDefinition);
console.log(pdf);
pdf.addContent({ text: 'hello dynamic' });

pdf.write('pdfs/streamable.pdf').then(() => { }, err => {
  console.error(err, __dirname, process.cwd());
});
