

const router = require('express').Router();

const recipesRouter = require('./views/recipesRouter.js');
const usersRouter = require('./views/usersRouter.js');


//Routing......

router.use('/users', usersRouter);
router.use('/recipes', recipesRouter);

module.exports = router;