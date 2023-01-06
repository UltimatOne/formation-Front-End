import express from 'express'
import TodoController from '../controller/todo.controller';
import TodoRepository from '../repository/todo.repository';
import TodoRepositoryPersistance from '../repository/todo.repository.persistance';
import TodoService from '../service/todo.service';
import TodoServicePersistance from '../service/todo.service.persistance';

// const repo = new TodoRepository()
// const service = new TodoService(repo)
// const controller = new TodoController(service)

const repo = new TodoRepositoryPersistance()
const service = new TodoServicePersistance(repo)
const controller = new TodoController(service)

const router = express.Router()
router.get("/", controller.getAll) // localhost:3001
router.get("/:id", controller.getById) // localhost:3001/2
router.delete("/:id", controller.deleteById)
router.post("/", controller.create)
router.put("/:id", controller.update)
router.patch("/:id", controller.patch)
export default router;

