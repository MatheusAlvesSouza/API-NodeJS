//importando o modulo express
const express = require('express');

//modulo para pegar dados via post
const bodyParser = require('body-parser');

//porta
const PORTA = 2018;

//var app a ser exportada para server.js
var app = module.exports = express();

//subindo o servidor
app.listen(PORTA , function(){
  console.log("Servidor executando na porta " + PORTA);
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); // Seta como o corpo da pagina um json

app.use( function(req, res, next){

  res.setHeader('Access-Control-Allow-Origin', '*'); // Autoriza a todos tipos de dispositivos usarem a API
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');//Tipo de requisições permitidas
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
  next();

});
