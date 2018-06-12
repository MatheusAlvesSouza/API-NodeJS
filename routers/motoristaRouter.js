/*
  Autor : Matheus Alves
  Data de modificação : 17/04/2018
  Descrição : Arquivo de rotas para o login do desktop
  Tabela : tbl_motorista
*/

const router =  require('express').Router(); // Chama router do express
const motoristaController = require('../controllers/motoristaController.js');//Estancia metodos da controller login

//Rota para logar o motorista.
router.post('/logar', function(req, res){

    let post = req.body;

    //Pega valores do post
    let cpf = post.cpf;
    let dtNasc = post.dtNasc;

    motoristaController.autentica(cpf, dtNasc, res);//Chama a controller

});

//Rota para listar as próximas viagens do motorista.
router.post('/listar', function(req, res){

    let post = req.body;

    //Pega valores do post
    let idMotorista = post.idMotorista;

    motoristaController.listar(idMotorista, res);//Chama a controller

});

//Rota para finalizar viagem.
router.post('/finalizarViagem', function(req, res){

    let post = req.body;

    //Pega valores do post
    let idViagem = post.idViagem;

    motoristaController.finalizarViagem(idViagem, res);//Chama a controller

});

module.exports = router;//Exporta o router para todos usarem
