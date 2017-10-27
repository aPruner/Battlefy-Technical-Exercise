// Followed guide: https://codeburst.io/quick-n-clean-way-to-deploy-vue-webpack-apps-on-heroku-b522d3904bc8
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname));
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);

const apiApp = express();

apiApp.get('/api/:summonerName', (req, res) => {
  const data = {
    "profileIconId": 509,
    "name": "SH0CK",
    "summonerLevel": 30,
    "accountId": 41215217,
    "id": 26522373,
    "revisionDate": 1508991321000
  };

  return res.send(data);
});

apiApp.listen(3001);
