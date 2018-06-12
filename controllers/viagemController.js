/*
  Autor : Matheus Alves
  Data de modificação : 23/04/2018
  Descrição : Arquivo de controller para viagem
*/
const viagem = require('../models/DAO/viagem.js'); //Exporta a model viagem

//Função que chama a model de select
exports.listar = function ( res ){

  //Chama a model de select
  viagem.listar( function( result ){

    res.json( result); //Imprime o resultado

  });

}

//Função que chama a model de select
exports.buscar  = function ( destino , res ){

  viagem.procurar( destino , function( result){

    res.json( result );

  });

}

//Função que chama a model de select id
exports.buscarPorID = function ( id , res ){

  viagem.procurarPorID( id , function( result ){

    res.json( result );

  });

}

//Função que chama a model de select de paradas
exports.listarParadas = function ( idViagem , res ){

  viagem.listarParadas( idViagem , function( result ){

    res.json( result );

  });

}

//Função que chama a model de select de poltronas compradas
exports.listarPoltronas = function ( idViagem , res ){

  viagem.listarPoltronas( idViagem , function( result ){

    res.json( result );

  });

}
