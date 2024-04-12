import Todo from "./todos.model.js";

let todos = [];

//Get all todos
export function getAllTodos(req, res) {
	res.status(200).send(todos);
}

//Get todo by id
export function getTodoById(req, res) {
	const todo = todos.find((todo) => todo.id === parseInt(req.params.id));
	if (!todo) return res.status(404).send(`Todo with given id not found`);
	res.send(todo);
}

//create new todo
export function createTodo(req, res) {
	const { title, description, endDate } = req.body;
	const id = todos.length + 1;
	const todo = new Todo(id, title, description, endDate);
	todos.push(todo);
	res.status(201).send("new todo created");
}

//update existing todo
export function updateTodo(req, res) {
	const { title, description, endDate } = req.body;
	const todo = todos.find((todo) => todo.id === parseInt(req.params.id));
	if (!todo) return res.status(404).send("Todo not found");
	todo.title = title;
	todo.description = description;
	todo.endDate = endDate;
	// console.log(todo)
	res.send("Todo is updated");
}

//Delete todo by id
export function deleteTodo(req, res) {
	todos = todos.filter((todo) => todo.id !== parseInt(req.params.id));
	res.status(201).send("deleted todo with provided id");
}
