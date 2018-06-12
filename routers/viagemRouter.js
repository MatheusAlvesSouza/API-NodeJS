/*
  Autor : Matheus Alves
  Data de modificação : 23/04/2018
  Descrição : Arquivo de rotas para as Viagenss
  Tabela : tbl_viagem
*/

const router =  require('express').Router(); // Chama router do express
const viagemController = require('../controllers/viagemController.js'); //Estancia metodos da controller usuario

//Rota raiz, que lista todas as viagens em aberto
router.get('/', function( req , res ){

  viagemController.listar( res );

});

//Busca por Viagens
router.post('/BuscarViagem' , function( req , res ){

  let destino = req.body.destino; //POST de destino

  viagemController.buscar( destino , res );

});

//Busca viagens por ID
router.post('/BuscarViagemPorID', function( req , res ){

  let id = req.body.id;

  viagemController.buscarPorID( id , res );

});

//Busca paradas de uma viagem
router.get('/BuscarParadas', function( req , res ){

  let idViagem = req.query.idViagem;

  viagemController.listarParadas( idViagem , res );

});

//Busca lugares comprados de uma viagem
router.get('/BuscarPoltronasCompradas', function( req , res ){

  let idViagem = req.query.idViagem;

  viagemController.listarPoltronas( idViagem , res );

});


module.exports = router; //Exporta o router
