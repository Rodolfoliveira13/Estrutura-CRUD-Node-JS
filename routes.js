const router = require("express").Router(); //express para roteamento
const { lerAlunos } = require("../alunosController");
const { criarAlunos } = require("../alunosController");
const { atualizarAlunos } = require("../alunosController");
const { deletarAlunos } = require("../alunosController");

//rota para randerizar a página inicial
router.get("/", (req, res) => {
     res.status(200).render("index");
});

//rota para ler alunos
router.get("/lerAlunos", lerAlunos);

//rota para criar aluno
router.post("/criarAlunos", criarAlunos);

//rota para atualizar aluno
router.put("/atualizarAlunos/:id", atualizarAlunos);

//rota para deletar aluno
router.delete("/deletarAlunos/:id", deletarAlunos);


module.exports = router;