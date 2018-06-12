/*
  Autor : Matheus Alves
  Data de modificação : 17/04/2018
  Descrição : Arquivo de model para login do usuario / cliente
  Tabela : tbl_cliente
*/

const db = require('../config/db_config.js'); //Importa o arquivo do banco

//Função que autentica o usuario e retorna um callback
exports.autenticaUsuario = function( email, senha, callback ){

    let sql = "SELECT * FROM tbl_cliente where email = ? and senha = MD5(?) and ativo = 1 limit 1 ";

    //Executa a query
    db.query( sql , [email, senha] , function( error, results, fields ){

      //Verifica se houve erro e se voltou um resultado
      if( !error  && results.length == 1 ){

        callback ( {sucesso:true , msg: "Logado com sucesso!", usuario : results[0]} ); //Retorna o callback

      }else{

        callback ( {sucesso:false , msg: "Usuário ou senha incorretos"} ); //Retorna o callback

      }

    });

}
