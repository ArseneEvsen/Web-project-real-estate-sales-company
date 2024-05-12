const express = require('express');
const housesController = require('../controllers/houses.controller');

const router = express.Router();

router.get('/', housesController.getAllHouses);

module.exports = router;