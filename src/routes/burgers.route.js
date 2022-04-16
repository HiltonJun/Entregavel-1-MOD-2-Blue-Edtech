const express = require('express');
const router = express.Router();

const burgersController = require('../controllers/burgers.controller');

router.get('/todos-burgers', burgersController.findBurgersController);
router.get('/burger/:id', burgersController.findBurgerByIdController);
router.post('/create', burgersController.createBurgerController);
router.put('/update/:id', burgersController.updateBurgerController);
router.delete('/delete/:id', burgersController.deleteBurgerController);

module.exports = router;
