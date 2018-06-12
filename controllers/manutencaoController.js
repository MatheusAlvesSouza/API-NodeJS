/*
  Autor : Matheus Alves
  Data de modificação : 02/06/2018
  Descrição : Arquivo de controller para model de manutencoes
  Tabela : tbl_manutencao
*/

const manutencao = require('./../models/verificarManutencoes');

exports.verificar = function( idOnibus , km , res ){

  manutencao.verificar( idOnibus , km , function( result ){
    res.json( result );
  });

}
