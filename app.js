const express = require('express'); // Express web server framework
var supersaas = require('supersaas-api-client');
var Client = supersaas.Client;

Client.configure({
  accountName: 'Loke',
  api_key: 'pRs3yLRqbkYwVx_7Gd5oTg',
  host: 'http://test',
  dryRun: true,
  verbose: true
})

app.listen(80);