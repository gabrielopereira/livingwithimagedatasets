const PDFDocument = require('pdfkit');
const fs = require('fs');
var numPages = 0;


function createPDF(numPages){
  let pdfDoc = new PDFDocument({size: 'A5'});

  pdfDoc.pipe(fs.createWriteStream('SampleDocument.pdf'));
  pdfDoc.font('Helvetica')
  pdfDoc.fontSize(8);


  for (let i = 0; i < numPages; i++) {

    pdfDoc.image('tinyIMG/tiny_' + Math.floor(Math.random() * 100000) + '.JPEG', {width: 300, height: 300});

    pdfDoc.moveDown(12)
    pdfDoc.text('Images to live with.', {align: 'right'})
    pdfDoc.moveDown(0.5)
    pdfDoc.text('Read the article on Photographies Journal.', {
     link: 'http://ADDLINK',
     underline: true,
     align: 'right'
    })
    pdfDoc.moveDown(0.5)
    pdfDoc.text("Page " + (i+1) + " of " + numPages, {align: 'right'})


    if ((numPages-i) == 1){

    } else {
      pdfDoc.addPage()
    }
  }

  pdfDoc.end();

}

module.exports = { createPDF };
