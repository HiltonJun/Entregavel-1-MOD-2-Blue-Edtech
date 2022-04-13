const express = require("express");
const port = 3000;
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const burgers = [
  {
    id: "1",
    nome: "Voando Alto",
    descricao:
      "Pão brioche/caseirinho, burguer de fraldinha 150g (fraldinha), alface, cebola caramelizada, queijo prato e maionese temperada (alho e temperos frescos)",
    foto: "/assets/images/voando-alto.jpg",
    preco: "R$27,90",
  },
  {
    id: "2",
    nome: "Espetacular Cheddar",
    descricao:
      "Pão australiano, hambúrguer artesanal de costela 150g, cheddar cremoso, cebola caramelizada e bacon",
    foto: "/assets/images/blitz-cheddar.jpg",
    preco: "R$32,90",
  },
  {
    id: "3",
    nome: "Marilú chicken",
    descricao:
      "Pão caseiro , um incrível e suculento hambúrguer de frango, alface, tomate, cebola caramelizada, queijo e maionese de limão siciliano.",
    foto: "/assets/images/marilu-chicken.jpg",
    preco: "R$27,90",
  },
];
app.get("/", (req, res) => {
  res.send("index");
});

app.get("/burgers/find-burgers", (req, res) => {
  res.send(burgers);
});

app.get("/burgers/find-burgers/:id", (req, res) => {
  const idParam = req.params.id;
  const selectburger = burguers.find((burger) => burger.id == idParam);
  res.send(selectburger);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
