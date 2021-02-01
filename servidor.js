const db = require('./db/mongodb')

const usuario = require('./modelos/usuarios')

const express = require('express');
const salestime = express();
salestime.use(express.json())
salestime.use(
    express.urlencoded({
        extended: true
    })
);
salestime.listen(8080);



salestime.get('/usuarios/obterTodos', (req, res) => {
    usuario.find({}).then(function (users) {

        res.send(users)
    });
});

salestime.put('/usuarios/novo', (req, res) => {

    let modeloUsuario = new usuario({
        nome: req.body.nome,
        nascimento: req.body.nascimento,
        cpf: req.body.cpf,
        telefone: req.body.telefone,
        email: req.body.email
    });
    modeloUsuario.isNew = true;
    modeloUsuario.save();

    res.send('Usuário inserido com sucesso!')
});

salestime.post('/usuarios/atualizar', (req, res) => {
    var atualizarUsuario = new usuario({
        _id: req.body._id,
        nome: req.body.nome,
        nascimento: req.body.nascimento,
        cpf: req.body.cpf,
        telefone: req.body.telefone,
        email: req.body.email
    });

    usuario.find({ _id: req.body._id }).then(function (usuario) {
        atualizarUsuario.isNew = false;
        atualizarUsuario.save();
        res.send("Usuário atualizado com sucesso!")
    });


});

salestime.delete('/usuarios/deletar', (req, res) => {
    usuario.find({ _id: req.body._id }).remove().exec();
    res.send("Usuário foi excluido com sucesso!");
});

