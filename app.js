const express = require('express')
const app = express()
const fs = require('fs');
const getPDF = require('./index.js');
const bodyParser = require('body-parser');

const port = process.env.PORT || 8080;


app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send('index.html')
})

// POST request for creating Genre.
app.post('/generate', function(req, res, next) {

  async function generatePDF() {

    // generate our PDFDocument
    console.log(req.body.generateNumber);
    let result = await getPDF.createPDF(req.body.generateNumber);

    var filename = "ImagesToLiveWith.pdf";
    var stream = await fs.createReadStream(filename);
    // Be careful of special characters
    filename = encodeURIComponent(filename);
    // Ideally this should strip them

    res.setHeader('Content-disposition', 'attachment; filename="' + filename + '"');
    res.setHeader('Content-type', 'application/pdf');

    stream.on('open', function () {
       // This just pipes the read stream to the response object (which goes to the client)
       stream.pipe(res);
     });

     // This catches any errors that happen while creating the readable stream (usually invalid names)
     stream.on('error', function(err) {
       res.end(err);
     });

  }

  generatePDF();

});


app.listen(port, () => {
  console.log('Express server listening on port', port)
});
