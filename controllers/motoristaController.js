/*
  Autor : Matheus Alves
  Data de modificação : 17/04/2018
  Descrição : Arquivo de controller do motorista
*/

const motorista = require('../models/DAO/motorista.js');//Exporta model motorista

//Função que chama a model de autenticar
exports.autentica = function( cpf, dtNasc, res ){

  //função da model que autentica
  motorista.autenticaMotorista( cpf , dtNasc, function( result ){

    res.json( result ); //Retorna o json na tela

  });

}

//Função que chama a model de listar
exports.listar = function( idMotorista, res ){

  //função da model que autentica
  motorista.listarViagens( idMotorista , function( result ){

    res.json( result ); //Retorna o json na tela

  });

}

//Função que chama a model de finalizar
exports.finalizarViagem = function( idViagem, res ){

  //função da model que autentica
  motorista.finaliza( idViagem, function( result ){

    res.json( result ); //Retorna o json na tela

  });

}