/*
  Autor : Matheus Alves
  Data de modificação : 29/05/2018
  Descrição : Arquivo de rotas para as Passagens
  Tabela : tbl_passagem
*/

const router =  require('express').Router(); // Chama router do express
const passagemController = require('../controllers/passagemController.js'); //Estancia metodos da controller usuario

router.post('/PorUser' , function( req , res ){

  let id = req.body.id;
  let ativo = req.body.ativo;

  passagemController.listarPorUser( id , ativo , res )

});

router.post('/Comprar' , function( req , res ){

  let post = req.body;

  let acento =  post.acento;
  let idCliente = post.idCliente;
  let idPontoParada = post.idPontoParada;
  let idViagem = post.idViagem;

  let passagem =
  {
    "acento" : acento ,
    "idCliente" : idCliente,
    "idPontos_viagem" : idPontoParada,
    "idViagem" : idViagem,
    "ativo" : 1
  };

  passagemController.comprarPassagem( passagem , res );

});

router.get('/PegarPassagem' , function( req , res){

  //Pega o id da passagem enviado
  let idPassagem = req.query.idPassagem;

  //Chama a controller de passagens
  passagemController.getPassagem( idPassagem , res );

});


module.exports = router;
