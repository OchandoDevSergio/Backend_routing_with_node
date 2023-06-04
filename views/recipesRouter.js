
const router = require('express').Router();

const recipesController = require('../controllers/recipesController');

router.get('/', recipesController.getAllUsers);
router.post('/', recipesController.createNewUser);
router.put('/', recipesController.modifyUser);
router.delete('/', recipesController.deleteUser);

module.exports = router;