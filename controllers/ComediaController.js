// importando o express
import express from "express"
const router = express.Router()

// ROTA DE COMEDA - retirada do index.js
router.get("/comedia", (req, res) => {
    // trocar app.get por router.get
  const comedia = [
    {numero:"1", nome: "Minha irmã e eu ", ator: "Mirian e Marcelly", ano:"2024"},
    {numero:"2", nome: "Bem vindo a quixeramobim", ator: "Aimée e Darlan", ano:"2022"},
    {numero:"3", nome: "Minha vida em marte", ator: "Fernanda e Aníbal", ano:"2018"},
    {numero:"4", nome: "As branquelas", ator: "Marcus, Kevin e Latrell", ano:"2004"},
    {numero:"5", nome: "Minha mãe é uma peça", ator: "Dona Herminía", ano:"2013"},
  ];

  res.render("comedia", {
    comedia:comedia
  });
});

// exportando o objeto router
export default router;