/*
  Autor : Matheus Alves
  Data de modificação : 02/06/2018
  Descrição : Arquivo de model para manutencoes
  Tabela : tbl_manutencoes
*/

const db = require('../config/db_config.js'); //Importa o arquivo do banco

exports.verificar = function( idOnibus , km , callback ){

  callback({ 'success' : false});

}
