const express = require('express');
const path = require('path');
const router = express.Router();
const { admin, carga, edit, guardar, guardarEdit, eliminar } = require('../controllers/adminController')

//listar
router.get('/', admin)

//crear
router.get('/carga', carga)
router.post('/', guardar)
//editar
router.get('/edit/:id', edit)
router.put('/', guardarEdit)

//eliminar
router.delete('/delete/:idProduct', eliminar)

module.exports = router