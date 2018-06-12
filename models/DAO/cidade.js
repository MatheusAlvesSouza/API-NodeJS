/*
  Autor : Matheus Alves
  Data de modificação : 26/04/2018
  Descrição : Arquivo de model para cidade
  Tabela : tbl_cidade
*/

const db = require('../../config/db_config.js'); //Importa o arquivo do banco

//Lista todos os registros
exports.listar = function( callback ){

  db.query('SELECT * FROM tbl_cidade' , function( error , results, fields ){

    if( !error ){

      callback ( {sucesso : true , resultado : results} );

    }else{

      callback ( {sucesso : false , _error : error} );

    }

  });

}

//Lista todos os registros
exports.listarPorNome = function( nomeCidade , callback ){

  db.query('SELECT codCidade FROM tbl_cidade WHERE nomeCidade = ? LIMIT 1', [nomeCidade] , function( error , results, fields ){

    if( !error ){

      callback ( {sucesso : true , resultado : results[0].codCidade} );

    }else{

      callback ( {sucesso : false , _error : error} );

    }

  });

}

//Lista os registros com codEstado especifico
exports.listarPorEstado = function( estado , callback ){

  db.query('SELECT * FROM tbl_cidade WHERE codEstado in (SELECT codEstado FROM tbl_estado WHERE nomeEstado = ?)' , [estado] ,function( error , results, fields ){

    if( !error ){

      callback ( {sucesso : true , resultado : results} );

    }else{

      callback ( {sucesso : false , _error : error} );

    }

  });

}
