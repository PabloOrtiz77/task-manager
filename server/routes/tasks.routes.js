const express = require("express");

const router = express.Router();

const Tasks = require("../controllers/tasks.controller");
const { authenticate } = require("../config/jwt.config");

router.get("/tasks", authenticate, Tasks.getTasks);
router.get("/tasks/:id", authenticate, Tasks.getTask);
//ORDEN: URL, se valida que el usuario esté autenticado,
//se valida que lo que crea es valido, se crea el task si es correcto todo
router.post("/tasks", Tasks.createTask);
router.delete("/tasks/:id", authenticate, Tasks.deleteTask);
router.put("/tasks/:id", authenticate, Tasks.updateTask);

module.exports = router;
