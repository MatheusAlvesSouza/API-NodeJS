/*
  Autor : Matheus Alves
  Data de modificação : 17/04/2018
  Descrição : Arquivo de controller para usuario / cliente
*/

const usuario = require('../models/DAO/usuario.js');//Exporta model Usuario

//Função que chama a model de insert
exports.cadastrar = function( usuarioJSON, res ){

  //Chama a model do usuario
  usuario.cadastrar( usuarioJSON, function( result ){

    res.json( result ); //Imprime o resultado

  });

}

//Função que chama a model de listar
exports.listar = function( res ){

  //Chama a model do usuario
  usuario.listar( function( result ){

    res.json( result ); //Imprime o resultado

  });

}

//Função que chama a model de listar por ID
exports.listarPorID = function( id, res ){

  //Chama a model do usuario
  usuario.listarPorID( id , function( result ){

    res.json( result );//Imprime o resultado

  });

}

//Função que chama a model de update
exports.atualizar = function( usuarioJSON, idCliente, res){

  //Chama a model do usuario
  usuario.atualizar( usuarioJSON, idCliente, function( result ){

    res.json( result ); //Imprime o resultado

  });

}

//Função que chama a model de delete
exports.deletar = function( idCliente , res ){

  //Chama a model do usuario
  usuario.deletar( idCliente , function( result ){

    res.json( result ); //Imprime o resultado

  });

}

//Função que chama a model de atualizar dados
exports.atualizarDados = function( usuarioJSON, enderecoJSON , res ){

  //Chama a model do usuario
  usuario.atualizarDados( usuarioJSON , enderecoJSON , function( result ){

    res.json( result ); //Imprime o resultado

  });

}
