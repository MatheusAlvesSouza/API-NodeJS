/*
  Autor : Matheus Alves
  Data de modificação : 17/04/2018
  Descrição : Arquivo de model para login do usuario / cliente
  Tabela : tbl_cliente
*/

const db = require('../../config/db_config.js'); //Importa o arquivo do banco

//Função que cadastra um usuario e retorna um callback
exports.cadastrar = function( usuarioJSON , callback ){

  let sql = "SELECT email FROM tbl_cliente WHERE email = ?";

  //Verifica se existe registros igual ao solicitado
  db.query( sql , [usuarioJSON.email], function( error , results, fields ){

    //Verifica se houve retorno
    if( results.length > 0 ){

      callback ( {sucesso : false , msg : "Esse email já possui uma conta!"} ); //Retorna o callback

    }else{

      sql = "INSERT INTO tbl_cliente SET ?";

      //Executa a query
      db.query( sql , usuarioJSON , function( error, result ){

        //Verifica se houve erro e se voltou um resultado
        if( !error ){

          callback ( {sucesso : true, id : result.insertId} ); // Retorna true e o ID inserido

        }else{

          callback ( {sucesso : false , msg: "Erro ao inserir", _error : error} ); //Retorna o callback com o erro

        }

      });

    }

  });

}

//Função que lista usuarios e retorna um callback
exports.listar = function( callback ){

  //Executa a query
  db.query( "SELECT * FROM tbl_cliente" , function(error, results, fields){

    //Verifica se houve erros
    if( !error && results.length > 0 ){

      callback ( { resultado : results} ); // Retorna o resultado da query

    }else{

      callback ( { _error : error} ); // Retorna o erro

    }

  });

}

//Função que lista 1 usuario + endereco e retorna um callback
exports.listarPorID = function( id , callback ){

  let sql = "SELECT \
            	cli.*,\
                end.bairro,\
                end.logradouro,\
                end.numero,\
                end.cep,\
                cid.nomeCidade as cidade,\
                cid.codCidade as codCidade,\
                est.nomeEstado as estado,\
                est.codEstado as codEstado\
            FROM \
            	tbl_cliente as cli\
            INNER JOIN \
            	tbl_endereco as end\
            ON\
            	end.idEndereco = cli.idEndereco\
            INNER JOIN\
            	tbl_cidade as cid\
            ON\
            	cid.codCidade = end.codCidade\
            INNER JOIN\
            	tbl_estado = est\
            ON\
            	cid.codEstado = est.codEstado\
            WHERE idCliente = ?"
  //Executa a query
  db.query( sql , [id] , function(error, results, fields){

    //Verifica se houve erros
    if( !error && results.length > 0 ){

      callback ( { sucesso : true , resultado : results[0]} ); //Retorna o callback

    }else{

      callback ( { sucesso : false , _error : error } ); //Retorna o callback com o erro

    }

  });

}

//Função que atualiza os dados do usuário
exports.atualizar = function( usuarioJSON , idCliente, callback ){

  let sql = "SELECT usuario FROM tbl_cliente WHERE usuario = ? OR email = ?";

  db.query( sql , [usuarioJSON.usuario , usuarioJSON.email], function( error, results, fields ){

    //Verifica se houve retorno
    if( results.length > 0 ){

      callback ( {sucesso : false , msg : "Esse usuário / email já existe !"} ); //Retorna o callback

    }else{

      //Executa a query
      db.query("UPDATE tbl_cliente SET ? WHERE idCliente = ?", [ usuarioJSON , idCliente ], function( error, results, fields ){

        //Verifica se houve erros
        if( !error && results.affectedRows > 0 ){

          callback ( {sucesso : true} ); //Retorna o callback

        }else{

          callback ( {sucesso : false, _error : error} ); //Retorna o callback com o erro

        }

      });

    }

  });

}


//Função que atualiza os dados do usuário
exports.atualizarDados = function( usuarioJSON , enderecoJSON , callback ){

  let sql = "UPDATE tbl_cliente SET telefone = ? , celular = ? WHERE idCliente = ? ";

  db.query( sql , [usuarioJSON.telefone , usuarioJSON.celular , usuarioJSON.idCliente], function( error, results, fields ){

      if( !error ){

          sql = "UPDATE tbl_endereco SET ? WHERE idEndereco = ?";
          db.query( sql , [enderecoJSON , enderecoJSON.idEndereco], function( erro, result, field ){
            if( !erro ){
              callback( {sucesso : true} );
            }else{
              callback ( {sucesso : false , _erro : erro } );
            }

          });

      }else{

        callback ( {sucesso : false , _erro : error} );

      }

  });

}

//Função que deleta usuário
exports.deletar = function( idCliente, callback ){

  //Executa a query
  db.query("DELETE FROM tbl_cliente WHERE idCliente = ?", [idCliente] , function( error, result, fields ){
    //Verifica se houve erros
    if( !error && result.affectedRows > 0 ){

      callback ( {sucesso : true} ); //Retorna o callback

    }else{

      callback ( {sucesso : false , _error : error} ); //Retorna o callback com o erro

    }

  });

}
