const {check} = require('express-validator')

module.exports = [
    
    check('username')
    .notEmpty().withMessage('el nombre de usuario no puede estar vacio'),

    check('password')
    .notEmpty().withMessage('la contraseña no puede estar vacia')
  ]