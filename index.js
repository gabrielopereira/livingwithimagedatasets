const PDFDocument = require('pdfkit');
const fs = require('fs');
var numPages = 0;


function createPDF(numPages){
  let pdfDoc = new PDFDocument({size: 'A5'});

  pdfDoc.pipe(fs.createWriteStream('SampleDocument.pdf'));

  for (let i = 0; i < numPages; i++) {
    pdfDoc.text('Learning from living in large-scale image datasets')
    pdfDoc.moveDown(0.5)
    pdfDoc.text('Read the full article on Photographies')
    pdfDoc.moveDown(0.5)
    pdfDoc.text((i+1) + " out of " + numPages)
    pdfDoc.moveDown(0.5)
    pdfDoc.image('images/n02002724_' + Math.floor(Math.random() * 399) + '.JPEG', {width: 300, height: 300});
    if ((numPages-i) == 1){

    } else {
      pdfDoc.addPage()
    }
  }

  pdfDoc.end();

}

module.exports = { createPDF };
