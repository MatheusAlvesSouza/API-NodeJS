/*
  Autor : Matheus Alves
  Data de modificação : 17/04/2018
  Descrição : Arquivo de controller para o login do usuario / cliente
*/

const login = require('../models/loginUser.js');//Exporta model login

//Função que chama a model de autenticar
exports.autentica = function(usuario, senha, res){

  //Função da model que autentica
  login.autenticaUsuario(usuario , senha, function( result ){

    res.json( result ); //Retorna o json na tela

  });

}
