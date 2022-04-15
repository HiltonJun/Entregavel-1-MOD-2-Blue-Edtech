const express = require('express');
const router = express.Router();

const burgersController = require('../controllers/burgers.controller');

router.get('/find-burgers', burgersController.findBurgersController);
router.get('/find-burgers/:id', burgersController.findBurgerByIdController);

module.exports = router;
