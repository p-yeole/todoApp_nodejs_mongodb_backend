import Express from "express";
import todosRouter from "././src/features/todos/todos.router.js";
const app = Express();
const PORT = 4000;

app.use(Express.json());
app.use("/todos", todosRouter);

app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});
