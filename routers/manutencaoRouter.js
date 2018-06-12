/*
  Autor : Matheus Alves
  Data de modificação : 02/06/2018
  Descrição : Arquivo de rotas para verificar manutencoes
  Tabela : tbl_manutencao
*/

const router =  require('express').Router(); // Chama router do express
const manutencaoController = require('../controllers/manutencaoController.js');//Estancia metodos da controller

router.get('/Verificar' , function( req , res ){

  let idOnibus = req.query.idOnibus;
  let km = req.query.km;

  manutencaoController.verificar( idOnibus, km , res );

});

module.exports = router;
