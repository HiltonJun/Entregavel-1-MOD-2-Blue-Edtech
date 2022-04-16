const burgers = [
  {
    id: 1,
    nome: "Voando Alto",
    descricao:
      "Pão brioche/caseirinho, burguer de fraldinha 150g (fraldinha), alface, cebola caramelizada, queijo prato e maionese temperada (alho e temperos frescos).",
    foto: "/assets/images/voando-alto.jpg",
    preco: 27.9,
  },
  {
    id: 2,
    nome: "Espetacular Cheddar",
    descricao:
      "Pão australiano, hambúrguer artesanal de costela 150g, cheddar cremoso, cebola caramelizada e bacon.",
    foto: "/assets/images/blitz-cheddar.jpg",
    preco: 32.9,
  },
  {
    id: 3,
    nome: "Marilú chicken",
    descricao:
      "Pão caseiro , um incrível e suculento hambúrguer de frango, alface, tomate, cebola caramelizada, queijo e maionese de limão siciliano.",
    foto: "/assets/images/marilu-chicken.jpg",
    preco: 27.9,
  },
];

const findBurgersService = () => {
  return burgers;
};

const findBurgerByIdService = (id) => {
  return burgers.find((burger) => burger.id == id);
};

const createBurgerService = (newBurger) => {
  const newId = burgers.length + 1;
  newBurger.id = newId;
  burgers.push(newBurger);
  return newBurger;
};

const updateBurgerService = (id, burgerEdited) => {
  burgerEdited["id"] = id;
  const burgerIndex = burgers.findIndex((burger) => burger.id == id);
  burgers[burgerIndex] = burgerEdited;
  return burgerEdited;
};

const deleteBurgerService = (id) => {
  const burgerIndex = burgers.findIndex((burger) => burger.id == id);
  return burgers.splice(burgerIndex, 1);
};

module.exports = {
  findBurgersService,
  findBurgerByIdService,
  createBurgerService,
  updateBurgerService,
  deleteBurgerService,
};
