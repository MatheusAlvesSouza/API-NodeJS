/*
  Autor : Matheus Alves
  Data de modificação : 02/05/2018
  Descrição : Arquivo de model para estado
  Tabela : tbl_estado
*/

const db = require('../../config/db_config.js'); //Importa o arquivo do banco

exports.listar = function( callback ){

  db.query('SELECT * FROM tbl_estado' , function( error , results, fields ){

    if( !error ){

      callback ( {sucesso : true , resultado : results} );

    }else{

      callback ( {sucesso : false , _error : error} );

    }

  });

}
