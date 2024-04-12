import Express from "express";
import {
	getAllTodos,
	getTodoById,
	createTodo,
	updateTodo,
	deleteTodo,
} from "./todos.controller.js";

import { validateTodo } from "./todos.validator.js";

const todosRouter = Express.Router();

//defining paths

todosRouter.get("/", getAllTodos);
todosRouter.get("/:id", getTodoById);
todosRouter.post("/", validateTodo, createTodo, getAllTodos);
todosRouter.patch("/:id", validateTodo, updateTodo);
todosRouter.delete("/:id", deleteTodo);

export default todosRouter;
