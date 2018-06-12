/*
  Autor : Matheus Alves
  Data de modificação : 17/04/2018
  Descrição : Arquivo de rotas para o Usuário / Cliente
  Tabela : tbl_cliente
*/

const router =  require('express').Router(); // Chama router do express
const usuarioController = require('../controllers/usuarioController.js'); //Estancia metodos da controller usuario
const md5 = require('md5'); //importando lib de criptografia


//Inserir
router.post('/Inserir', function( req, res ){

  let usuarioJSON = montarUsuario( req ); //Passa req e recebe JSON
  usuarioController.cadastrar( usuarioJSON, res ); // Chama a controller de insert

});

//Listar
router.get('/Listar', function( req, res ){

  usuarioController.listar( res ); //Chama a controller de select

});

//Listar por ID
router.get('/ListarPorID', function( req, res ){

  let get = req.query;

  //Pega a variavel id Passada na url
  let id = get.id;

  usuarioController.listarPorID( id , res ); //Chama a controller de select where

});

//Atualizar
router.post('/Atualizar', function(req , res){

  let usuarioJSON = montarUsuario( req ); //Passa req e recebe JSON

  let post = req.body;
  let idCliente = post.idCliente;

  usuarioController.atualizar( usuarioJSON, idCliente, res); //Chama a controller de update

});

//Deletar
router.post('/Deletar', function( req, res ){

  let post = req.body;
  let idCliente = post.idCliente;

  usuarioController.deletar( idCliente , res ); //Chama a controller de delete

});

//Atualiza dados cadastrais
router.post('/AtualizarDados', function( req, res ){

  let post = req.body;

  let idCliente = post.idCliente;
  let telefone = post.telefone;
  let celular = post.celular;
  let cep = post.cep;
  let codCidade = post.codCidade;
  let logradouro = post.logradouro;
  let bairro = post.bairro;
  let numero = post.numero;
  let idEndereco = post.idEndereco;


  let usuarioJSON =
  {
    "idCliente" : idCliente,
    "telefone" : telefone,
    "celular" : celular
  }

  let enderecoJSON = {
    "idEndereco" : idEndereco,
    "cep" : cep,
    "logradouro" : logradouro,
    "bairro" : bairro,
    "numero" : numero,
    "codCidade" : codCidade
  }

  usuarioController.atualizarDados( usuarioJSON , enderecoJSON , res ); //Chama a controller de delete

});

//Função que monta o usuario em JSON
var montarUsuario = function( req ){

  let post = req.body;

  //GET DOS VALORES
  let nome =       post.nome;
  let sobrenome  = post.sobrenome;
  let cpf =        post.cpf;
  let rg =         post.rg;
  let idEndereco = post.idEndereco;
  let sexo =       post.sexo;
  let celular =    post.celular;
  let telefone =   post.telefone;
  let senha =      post.senha;
  let email =      post.email;
  let dt_nasc =    post.dtNasc;

  senha = md5(senha) ; //Criptografa a senha

  //Monta o usuario
  let usuarioJSON =
  {
    "nome" : nome,
    "sobrenome" : sobrenome,
    "cpf" : cpf,
    "rg" : rg,
    "idEndereco" : idEndereco,
    "sexo" : sexo,
    "celular" : celular,
    "telefone" : telefone,
    "senha" : senha,
    "email" : email,
    "dt_nasc" : dt_nasc,
    "ativo" : 1
  }

  return usuarioJSON;

}

module.exports = router;//Exporta o router para todos usarem
