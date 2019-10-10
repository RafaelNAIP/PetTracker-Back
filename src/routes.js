const express = require("express");

const routes = express.Router();

const PetController = require("./controllers/PetController");
const UserController = require("./controllers/UserController");

routes.post("/pets", PetController.store);
routes.post("/register", UserController.store);

module.exports = routes;
