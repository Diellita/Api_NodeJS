var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var esquemaUsuario = new Schema({
  nome: String,
  nascimento:Date,
  cpf: String,
  telefone: String,
  email:String
},{collection: 'usuarios'});

var usuario = mongoose.model('modeloUsuario', esquemaUsuario );

module.exports = usuario;