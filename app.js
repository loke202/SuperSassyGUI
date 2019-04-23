const express = require('express'); // Express web server framework
const supersaas = require('supersaas-api-client');
const Client = supersaas.Client;

const app = express();

app.use(express.static(`${__dirname}/public`))

Client.configure({
  accountName: 'Loke',
  api_key: 'pRs3yLRqbkYwVx_7Gd5oTg',
  host: 'http://test',
  dryRun: true,
  verbose: true
})

app.listen(80);
