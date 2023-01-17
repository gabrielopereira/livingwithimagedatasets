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

  console.log(req.body.generateNumber);

  const result = getPDF.createPDF(req.body.generateNumber, res);

});


app.listen(port, () => {
  console.log('Express server listening on port', port)
});
