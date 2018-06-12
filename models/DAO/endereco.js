/*
  Autor : Matheus Alves
  Data de modificação : 10/05/2018
  Descrição : Arquivo de model para endereco
  Tabela : tbl_endereco
*/

const db = require('../../config/db_config.js'); //Importa o arquivo do banco

exports.inserirEndereco = function( enderecoJSON , callback ){

  db.query('INSERT INTO tbl_endereco SET ?', enderecoJSON , function( error , result, fields ){

    if( !error ){

      callback ( {sucesso : true , id : result.insertId} );

    }else{

      callback ( {sucesso : false , _error : error} );

    }

  });

}
