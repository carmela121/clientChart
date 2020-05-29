const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const cors = require('cors');
const clientData = require('./clientData')
app.use(express.static(path.join(__dirname, 'build')));

app.use(cors());

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/client', (req, res) => {
  res.send(clientData)
});


app.get("/client/:year", (req, res) => {
  const search = (year, clientData) => {

    for (var i = 0; i < clientData.length; i++) {
      if (clientData[i].year === year) {
        res.send(clientData[i]);
      }

    }
  }

  search(req.params.year, clientData)
})


app.listen(process.env.PORT || 8080);