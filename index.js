const PDFDocument = require('pdfkit');
const fs = require('fs');
var numPages = 0;


function createPDF(numPages, res){
  let pdfDoc = new PDFDocument({size: 'A5'});

  writeStream = fs.createWriteStream('SampleDocument.pdf');
  pdfDoc.pipe(writeStream);

  pdfDoc.fontSize(8);


  for (let i = 0; i < numPages; i++) {

    var imgNumber = Math.floor(Math.random() * 8) + 1;

    if (imgNumber == 1){

      var img = Math.floor(Math.random() * 100) + 1;
      pdfDoc.image('datasets/1 - COIL-100/img' + img + '.png', {fit: [300, 300]});

      pdfDoc.moveDown(9)

      pdfDoc.font('Helvetica-Bold').text('Images to live with.', {align: 'right'})

      pdfDoc.font('Helvetica')
      pdfDoc.moveDown(0.5)

      pdfDoc.text('From the Columbia University Image Library COIL-100 dataset.', {align: 'right'})
    } else if (imgNumber == 2){

      var img = Math.floor(Math.random() * 11380) + 1;
      pdfDoc.image('datasets/2 - ImageNet/img' + img + '.jpg', {fit: [300, 300]});

      pdfDoc.moveDown(9)
      pdfDoc.font('Helvetica-Bold').text('Images to live with.', {align: 'right'})
      pdfDoc.font('Helvetica')
      pdfDoc.moveDown(0.5)

      pdfDoc.text('From the TinyImageNet dataset.', {align: 'right'})
    } else if (imgNumber == 3){

      var img = Math.floor(Math.random() * 75) + 1;
      pdfDoc.image('datasets/3 - Labelled Faces in the Wild (LFW) Dataset/img' + img + '.jpg', {fit: [300, 300]});

      pdfDoc.moveDown(9)
      pdfDoc.font('Helvetica-Bold').text('Images to live with.', {align: 'right'})
      pdfDoc.font('Helvetica')
      pdfDoc.moveDown(0.5)

      pdfDoc.text('From the Labelled Faces in the Wild (LFW) dataset.', {align: 'right'})
    } else if (imgNumber == 4){

      var img = Math.floor(Math.random() * 37) + 1;
      pdfDoc.image('datasets/4 - Leaf Dataset/img' + img + '.JPG', {fit: [300, 300]});

      pdfDoc.moveDown(9)
      pdfDoc.font('Helvetica-Bold').text('Images to live with.', {align: 'right'})
      pdfDoc.font('Helvetica')
      pdfDoc.moveDown(0.5)


      pdfDoc.text('From the Leaf dataset.', {align: 'right'})
    } else if (imgNumber == 5){

      var img = Math.floor(Math.random() * 180) + 1;
      pdfDoc.image('datasets/5 - Open Image/img' + img + '.jpg', {fit: [300, 300]});

      pdfDoc.moveDown(9)
      pdfDoc.font('Helvetica-Bold').text('Images to live with.', {align: 'right'})
      pdfDoc.font('Helvetica')
      pdfDoc.moveDown(0.5)

      pdfDoc.text('From the Open Image dataset.', {align: 'right'})
    } else if (imgNumber == 6){

      var img = Math.floor(Math.random() * 190) + 1;
      pdfDoc.image('datasets/6 - Stanford Dogs Datasets/img' + img + '.jpg', {fit: [300, 300]});

      pdfDoc.moveDown(9)
      pdfDoc.font('Helvetica-Bold').text('Images to live with.', {align: 'right'})
      pdfDoc.font('Helvetica')
      pdfDoc.moveDown(0.5)

      pdfDoc.text('From the Stanford Dogs dataset.', {align: 'right'})
    } else if (imgNumber == 7){

      var img = Math.floor(Math.random() * 365) + 1;
      pdfDoc.image('datasets/7 - Tencent/img' + img + '.jpg', {fit: [300, 300]});

      pdfDoc.moveDown(9)
      pdfDoc.font('Helvetica-Bold').text('Images to live with.', {align: 'right'})
      pdfDoc.font('Helvetica')
      pdfDoc.moveDown(0.5)

      pdfDoc.text('From the Tencent dataset.', {align: 'right'})
    } else if (imgNumber == 8){

      var img = Math.floor(Math.random() * 2100) + 1;
      pdfDoc.image('datasets/8 - VisualGenome/img' + img + '.jpg', {fit: [300, 300]});

      pdfDoc.moveDown(9)
      pdfDoc.font('Helvetica-Bold').text('Images to live with.', {align: 'right'})
      pdfDoc.font('Helvetica')
      pdfDoc.moveDown(0.5)

      pdfDoc.text('From the VisualGenome dataset.', {align: 'right'})
    };

    pdfDoc.moveDown(0.4)
    pdfDoc.text('Read the article on Photographies Journal.', {
     link: 'https://doi.org/10.1080/17540763.2023.2189285',
     underline: true,
     align: 'right'
    })
    pdfDoc.moveDown(0.4)
    pdfDoc.text("by Gabriel Pereira & Bruno Moreschi", {align: 'right'})
    pdfDoc.moveDown(0.4)
    pdfDoc.text("Page " + (i+1) + " of " + numPages, {align: 'right'})


    if ((numPages-i) == 1){

    } else {
      pdfDoc.addPage()
    }
  }

  pdfDoc.end();


  writeStream.on('finish', function () {

    res.download('./SampleDocument.pdf')

  });

}

module.exports = { createPDF };
