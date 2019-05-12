const express = require('express'); // Express web server framework
const cors = require('cors');
const supersaas = require('supersaas-api-client');
const Client = supersaas.Client;
const schedule = 'stadsarkiv'
const scheduleId = 419334

const app = express();

app.use(express.static(`${__dirname}/public`))

app.use(express.json());

app.use(cors());

Client.configure({
  accountName: 'Loke',
  api_key: 'pRs3yLRqbkYwVx_7Gd5oTg',
  dryRun: false,
  verbose: false
})

app.get('/free', (req, res) => {
  const resource = req.resource;

  Client.Instance.appointments.available(scheduleId, '2019-5-11 00:00:00', resource, function(err, data) { 
    console.log(data); //=> ["Appointment", ...]
  });
});

app.post('/tos', (req, res) => {
  console.log(req.body);
  res.send('got it');
});

app.get('/sass', (req, res) => {
  console.log('hi');
  $.get('https://www.supersaas.dk/schedule/Loke/stadsarkiv', function(data) {
    console.log(data);
  });
});

app.listen(80);
