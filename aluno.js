const db = require('./conexao.js');
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    matricula: {
        type: String,
        required: true, 
        unique: true,
        max: 20
    }
});

module.exports = mongoose.model("alunos", userSchema);