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

const createBurgerController = (req, res) => {
    const burger = req.body;
    const newBurger = burgersService.createBurgerService(burger);
    res.send(newBurger);
  };

module.exports = {
  findBurgersController,
  findBurgerByIdController,
  createBurgerController,
};
