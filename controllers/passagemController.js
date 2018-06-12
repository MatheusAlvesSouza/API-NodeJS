/*
  Autor : Matheus Alves
  Data de modificação : 29/05/2018
  Descrição : Arquivo de controller para a passagem
*/

const passagem = require('../models/DAO/passagem.js');//Exporta model passagem

exports.listarPorUser = function( id , ativo, res ){

  passagem.listarPorUser( id , ativo, function( result ){
    res.json( result );
  });

}

exports.comprarPassagem = function( json , res ){

  passagem.comprar( json , function( result){
    res.json( result );
  });

}

exports.getPassagem = function( idPassagem , res ){

  //Chama a model de passagem
  passagem.getPassagem( idPassagem , function( result){
    res.json( result );
  });

}
