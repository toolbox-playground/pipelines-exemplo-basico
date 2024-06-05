let express = require('express');
let path = require('path');
let fs = require('fs');
let bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/profile', function (req, res) {
  let img = fs.readFileSync(path.join(__dirname, "img/toolbox-playground.png"));
  res.writeHead(200, {'Content-Type': 'image/jpg' });
  res.end(img, 'binary');
});

app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, "index.html"));
});


app.listen(8080, function () {
  console.log("Let's get some fun on port 8080!");
});
