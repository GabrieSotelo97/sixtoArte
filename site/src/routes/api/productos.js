const express = require('express');
const path = require('path');
const router = express.Router();


const { list, id, buscar} = require('../../controllers/api/productsController');



router.get('/list', list)
router.get('/:id', id)
router.get('/buscar/:buscador', buscar)

module.exports = router;