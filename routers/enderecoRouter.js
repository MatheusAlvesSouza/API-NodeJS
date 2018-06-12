/*
  Autor : Matheus Alves
  Data de modificação : 10/05/2018
  Descrição : Arquivo de rotas para o endereco ( cidade e estado)
  Tabela : tbl_cidade e tbl_estado
*/

const router =  require('express').Router(); // Chama router do express
const enderecoController = require('../controllers/enderecoController.js');//Estancia metodos da controller endereco

//Rota que lista todas as cidades
router.get('/Cidade', function(req, res){

    enderecoController.listarCidades(res);//Chama a controller

});

//Rota que retorna o ID da Cidade procurada
router.get('/CidadeID', function(req, res){

    let nomeCidade = req.query.nomeCidade;

    enderecoController.listarCidadePorNome(nomeCidade, res);//Chama a controller

});

//Rota que lista cidades de um estados
router.get('/CidadePorEstado' , function(req , res){

  let estado = req.query.estado; //Deve ser um INT

  enderecoController.listarCidadesPorEstado( estado , res);

});

//Rota que lista todos os estados
router.get('/Estado', function(req, res){

  enderecoController.listarEstados(res);//Chama a controller

});

//Cadastrar endereco
router.post('/CadastroEndereco', function(req, res){

  let post = req.body;

  let logradouro = post.logradouro;
  let bairro = post.bairro;
  let numero = post.numero;
  let idTipoEndereco = post.tipoEndereco;
  let cep = post.cep;
  let codCidade = post.codCidade;

  let enderecoJSON =
  {
      "bairro" : bairro,
      "logradouro" : logradouro,
      "idTipoEndereco" : idTipoEndereco,
      "cep" : cep,
      "codCidade" : codCidade,
      "numero" : numero
  }

  enderecoController.inserirEndereco( enderecoJSON , res );

});

module.exports = router;//Exporta o router para todos usarem
