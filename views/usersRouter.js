
const router = require('express').Router();

const usersController = require('../controllers/usersController');

//CRUD....

//Traería todos los usuarios
router.get('/', usersController.getAllUsers);
//Generaría un usuario
router.post('/', usersController.createNewUser);
//Modificaría un usuario
router.put('/', usersController.modifyUser);
//Borraría un usuario
router.delete('/', usersController.deleteUser);


module.exports = router;