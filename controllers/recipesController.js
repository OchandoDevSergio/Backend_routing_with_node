
const recipesController = {};

recipesController.getAllUsers = async (req, res) => {

    return res.send("Hola, has llamado a recipes con un get,,,,");
}

recipesController.createNewUser = async (req, res) => {

    return res.send("Hola, has llamado a recipes con un post,,,,");
}

recipesController.modifyUser = async (req, res) => {

    return res.send("Hola, has llamado a recipes con un put,,,,");
}

recipesController.deleteUser = async (req, res) => {

    return res.send("Hola, has llamado a recipes con un delete,,,,");
}

module.exports = recipesController;