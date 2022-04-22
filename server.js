var express = require('express');
var cors = require('cors');
var multer  = require('multer');
var upload = multer(); // file kept in memory w/options omitted
require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// *** BEGIN MY CODE ***
// take uploaded file (name: upfile) and respond with name, type, and size (bytes)
app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  res.json(
    {
      name: req.file.originalname,
      type: req.file.mimetype,
      size: req.file.size
    }
  );
});
// *** END MY CODE ***

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
