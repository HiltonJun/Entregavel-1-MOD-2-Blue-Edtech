const burgersService = require('../services/burgers.service');

const findBurgersController = (req, res) => {
  const allBurgers = burgersService.findBurgersService();
  res.send(allBurgers);
};

const findBurgerByIdController = (req, res) => {
  const idParam = req.params.id;
  const chosenBurger = burgersService.findBurgerByIdService(idParam);
  res.send(chosenBurger);
};

module.exports = {
  findBurgersController,
  findBurgerByIdController,
};
