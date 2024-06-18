const alunos = require("../models/aluno");

module.exports.lerAlunos = async (req, res) => {
     try { 
          const listaAlunos = await alunos.find();

          if(listaAlunos.length > 0){
               return res.status(200).json(listaAlunos);
          }
          else {
               return res.status(404).json({"Error" : "não foi encontrado nada"});
          }
     } catch (error) {
          return res.status(400).json({"Error" : error});
     }
}

module.exports.criarAlunos = async (req, res) => {
     try{
          const novoAluno = await alunos.create(req.body);
          return res.status(201).json(novoAluno);
     } catch (error) {
          return res.status(400).json({"Error" : error});
     }
}

module.exports.atualizarAlunos = async (req, res) => {
     try {
          const alunoAtualizado = await alunos.findByIdAndUpdate(req.params.id, req.body, { new: true });
          if (!alunoAtualizado) {
               return res.status(404).json({"Error" : "Aluno não encontrado"});
          }
          return res.status(200).json(alunoAtualizado);
     } catch (error) {
          return res.status(400).json({"Error" : error});
     }
}

module.exports.deletarAlunos = async (req, res) => {
     try{
          const alunoDeletado = await alunos.findByIdAndDelete(req.params.id);

          if(!alunoDeletado){
               return res.status(404).json({"Error" : "Aluno não encontrado"});
          }
          else {
               return res.status(200).json({"Message" : "Aluno deletado com sucesso"})
          }
     } catch (error) {
          return res.status(400).json({"Error" : error})
     }
}