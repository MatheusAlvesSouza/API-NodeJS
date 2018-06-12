/*
  Autor : Matheus Alves
  Data de modificação : 29/05/2018
  Descrição : Arquivo de model para passagem
  Tabela : tbl_passagem
*/

const db = require('../../config/db_config.js'); //Importa o arquivo do banco

const PADRAO_SELECT = 'SELECT \
                          v.idViagem,\
                            DATE_FORMAT(v.dtPartida, "%d/%m/%Y") as dtIda,\
                            TIME_FORMAT(v.hrPartida , "%h:%i HRS") as hrIda,\
                            TIME_FORMAT(v.hrChegada , "%h:%i HRS") as hrChegada,\
                            p.nomePonto as origem,\
                            c.nomePonto as destino,\
                            passagem.acento as poltrona,\
                            v.descricao,\
                            v.valor as preco,\
							passagem.idPassagem\
                        FROM \
                          tbl_viagem as v\
                        INNER JOIN\
                          tbl_partida as p\
                        ON\
                          v.idPontoPartida = p.idPontoPartida\
                        INNER JOIN\
                          tbl_chegada as c\
                        ON\
                          v.idPontoChegada = c.idPontoChegada '; //Pode virar uma view do db

//Lista viagens compradas por usuario e que ainda não foram realizadas
exports.listarPorUser = function( id , ativo, callback ){

  let sql = PADRAO_SELECT.concat(
                  'INNER JOIN\
                    tbl_passagem as passagem\
                  ON\
                    passagem.idViagem = v.idViagem\
                  WHERE\
                    passagem.idCliente = ? AND v.finalizada = ? \
                  ORDER BY\
                    dtIda\
                  DESC'
                )

  db.query( sql, [id , ativo] , function(error , results , fields){

    if( !error ){

      callback ( {'sucesso' : true , 'resultado' : results} );

    }else{

      callback ( {'sucesso' : false , _error : error} );

    }

  });

}

//Salva uma compra de passagem
exports.comprar = function( passagem , callback ){


 db.query( "INSERT INTO tbl_passagem SET ?", passagem , function(error , result , field){

    if( !error ){

      callback ( {'sucesso' : true , 'idPassagem' : result.insertId} );

    }else{

      callback ( {'sucesso' : false , _error : error} );

    }

  });

}

exports.getPassagem = function( idPassagem , callback ){

  let sql = "SELECT \
				p.idPassagem, p.idViagem, p.acento , c.CPF , ponto.nomePonto, concat_ws(' ' , c.nome , c.sobrenome) as cliente\
			FROM \
				tbl_passagem as p \
			INNER JOIN\
				tbl_cliente as c\
			ON\
				c.idCliente = p.idCliente\
			INNER JOIN\
				tbl_partida as ponto\
			ON\
				p.idPontos_viagem = ponto.idPontoPartida\
			WHERE p.idPassagem = ?";

  db.query( sql , [idPassagem], function( error , result, fields){

    if( !error && result.length > 0 ){
      //Retorna o json com a getPassagem
      callback( {sucesso:true , resultado : result[0] } );

    }else{
      //Retorna o erro
      callback( { sucesso:false , _error:error} );
    }

  });

}
