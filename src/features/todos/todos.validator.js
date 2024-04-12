export function validateTodo(req, res, next) {
	const { id, ...rest } = req.body;
	const { title, description, endDate } = rest;

	if (!title || !description)
		return res.send({ message: `Please enter title and description.` });

	// if (Object.keys(rest).length !== 0) {
	// 	return res.send({ message: "other params" });
	// }
	next();
}
