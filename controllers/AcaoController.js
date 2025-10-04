// importando o express
import express from "express"
const router = express.Router()

// ROTA DE AÇÃO - retirada do index.js
router.get("/acao", (req, res) => {
    // trocar app.get por router.get
  const acao = [
    {numero:"1", nome: "Jurassic world", ator: "Claire e Owen", ano: "2015"},
    {numero:"2", nome: "Resgate", ator: "Tyler e Nik", ano: "2020"},
    {numero:"3", nome: "Alerta vermelho", ator: "Bispo, John e Nolan", ano: "2021"},
    {numero:"4", nome: "The old guard", ator: "Andy, Nile e Quynh", ano: "2020"},
    {numero:"5", nome: "Tropa de elite", ator: "Capitão Nascimento", ano: "2007"},
  ];

  res.render("acao", {
    acao:acao
  });
});

// exportando o objeto router
export default router;