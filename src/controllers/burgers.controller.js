const burgersService = require("../services/burgers.service");

const findBurgersController = (req, res) => {
  const allBurgers = burgersService.findBurgersService();
  res.send(allBurgers);
};

const findBurgerByIdController = (req, res) => {
  const idParam = req.params.id;

  if (!idParam) {
    return res.status(404).send({ message: "Burger não encontrado!" })
  }

  const chosenBurger = burgersService.findBurgerByIdService(idParam);
  res.send(chosenBurger);
};

const createBurgerController = (req, res) => {
  const burger = req.body;
  
  if (
    !burger ||
    !burger.nome ||
    !burger.descricao ||
    !burger.foto ||
    !burger.preco
  ) {
    res.status(400).send({ mensagem: "Você não preencheu todos os dados para adicionar um novo burger ao cardápio!" });
  }

  const newBurger = burgersService.createBurgerService(burger);
  res.send(newBurger);
};

const updateBurgerController = (req, res) => {
  const idParam = +req.params.id;
  const burgerEdit = req.body;

  if (!idParam) {
    return res.status(404).send({ message: "Burger não encontrado!" })
  }

  if (!burgerEdit || !burgerEdit.nome || !burgerEdit.descricao || !burgerEdit.foto || !burgerEdit.preco) {
    return res.status(400).send({ message: "Você não preencheu todos os dados para editar o burger!" });
  }

  const updatedBurger = burgersService.updateBurgerService(idParam, burgerEdit);
  res.send(updatedBurger);
};

const deleteBurgerController = (req, res) => {
  const idParam = req.params.id;

  if (!idParam) {
    return res.status(404).send({ message: "Burger não encontrado!" })
  }

  burgersService.deleteBurgerService(idParam);
  res.send({ message: "Burger deletado com sucesso!" });
};

module.exports = {
  findBurgersController,
  findBurgerByIdController,
  createBurgerController,
  updateBurgerController,
  deleteBurgerController,
};
