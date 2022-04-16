const burgersService = require("../services/burgers.service");

const findBurgersController = (req, res) => {
  const allBurgers = burgersService.findBurgersService();
  res.send(allBurgers);
};

const findBurgerByIdController = (req, res) => {
  const idParam = req.params.id;
  const chosenBurger = burgersService.findBurgerByIdService(idParam);
  res.send(chosenBurger);
};

const createBurgerController = (req, res) => {
  const burger = req.body;
  const newBurger = burgersService.createBurgerService(burger);
  res.send(newBurger);
};

const updateBurgerController = (req, res) => {
  const idParam = +req.params.id;
  const burgerEdit = req.body;
  const updatedBurger = burgersService.updateBurgerService(idParam, burgerEdit);
  res.send(updatedBurger);
};

module.exports = {
  findBurgersController,
  findBurgerByIdController,
  createBurgerController,
  updateBurgerController,
};
