/*
  Autor : Matheus Alves
  Data de modificação : 17/04/2018
  Descrição : Arquivo de model para motorista
  Tabela : tbl_motorista
*/

const db = require('../../config/db_config.js'); //Importa o arquivo do banco

//Função que autentica o motorista e retorna um callback
exports.autenticaMotorista = function( cpf, dtNasc, callback ){
    
    let sql = "SELECT idMotorista, CONCAT_WS(' ', nome, sobreNome) as nome, DATE_FORMAT( dtNasc , '%d/%m/%Y') as dtNasc FROM tbl_motorista WHERE cpf = ? AND DATE_FORMAT(dtNasc, '%d/%m/%Y') = ? LIMIT 1";
    
    //Executa a query
    db.query( sql , [cpf, dtNasc] , function( error, results, fields ){

      //Verifica se houve erro e se voltou um resultado
      if( !error  && results.length == 1 ){

        callback ( {sucesso:true , msg: "Logado com sucesso", usuario : results[0]} ); //Retorna o callback

      }else{

        callback ( {sucesso:false , msg: "cpf ou data incorretos" , _error : error} ); //Retorna o callback

      }

    });

}

//Função que lista as viagens do motorista e retorna um callback
exports.listarViagens = function( idMotorista, callback ){
    
    let sql = "SELECT v.idViagem, c.nomeCidade AS origem, ci.nomeCidade AS destino, DATE_FORMAT( v.dtPartida , '%d/%m/%Y') AS dtIda, \
				v.hrPartida AS hrIda, v.hrChegada AS hrChegada, tipooni.tipo AS tipoOnibus, v.valor AS preco \
				FROM tbl_viagem AS v \
				INNER JOIN tbl_motorista AS m ON m.idMotorista = (v.idMotorista = ?) \
				INNER JOIN tbl_cidade AS c ON v.codCidade = c.codCidade \
				INNER JOIN tbl_cidade AS ci ON v.idDestino = ci.codCidade \
				INNER JOIN tbl_onibus AS oni ON v.idOnibus = oni.idOnibus \
				INNER JOIN tbl_tipoonibus AS tipooni ON oni.idTipoOnibus = tipooni.idTipoOnibus \
				WHERE v.finalizada = 0 \
				ORDER BY DATE_FORMAT( v.dtPartida , '%Y/%m/%d'), v.hrPartida;";
    
    //Executa a query
    db.query( sql , [idMotorista] , function( error, results, fields ){

      //Verifica se houve erro e se voltou um resultado
      if( !error  && results.length > 0 ){

        callback ( {resultado : results} ); //Retorna o callback

      }else{

        callback ( {sucesso : false , _error : error} ); //Retorna o callback

      }

    });

}

//Função que finaliza uma viagem e retorna um callback
exports.finaliza = function( idViagem, callback ){
    
    let sql = "UPDATE tbl_viagem SET finalizada = 1, hrChegadaReal = CURTIME() WHERE idViagem = ?";
    
    //Executa a query
    db.query( sql , [idViagem] , function( error, results, fields ){

      //Verifica se houve erro e se voltou um resultado
      if( !error  && results.length > 0 ){

        callback ( {sucesso : true , msg : "Viagem finalizada com sucesso"} ); //Retorna o callback

      }else{

        callback ( {sucesso : false , _error : error} ); //Retorna o callback

      }

    });

}