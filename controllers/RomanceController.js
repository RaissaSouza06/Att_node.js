// importando o express
import express from "express"
const router = express.Router()

// ROTA DE ROMANCE - retirada do index.js
router.get("/romance", (req, res) => {
    // trocar app.get por router.get
  const romance = [
    {nome: "After", ator: "Tessa e Hardin", ano: "2019"},
    {nome: "A cinco pés de distância", ator: "Stella e Will", ano: "2019"},
    {nome: "Uma linda mulher", ator: "Vivian e Edward", ano: "1990"},
    {nome: "Com carinho kitty", ator: "Kitty e Min Ho", ano: "2023"},
    {nome: "O plano imperfeito", ator: "Harper e Charlie", ano: "2018"},
  ];

  res.render("romance", {
    romance:romance
  });
});

// exportando o objeto router
export default router;
