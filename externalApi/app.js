const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const db = require('./db');
const clientData = require('./clientDb')

app.use(cors());


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

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);