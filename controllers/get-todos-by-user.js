const pool = require("../config");

exports.getTodosByUser = async (req, res) => {
	const { user_id } = req.user
	try {
		const Todos = await pool.query(
			`SELECT
	todo.description, 
	todo.user_id, 
	todo.todo_id, 
	utilisateur.lastname, 
	utilisateur.firstname
FROM
	todo
	INNER JOIN
	utilisateur
	ON 
		todo.user_id = utilisateur.user_id
WHERE
	utilisateur.user_id = $1`, [user_id]
		);
		res.status(200).json({ "message": Todos, "user_id": user_id });
	} catch (error) {
		console.error(error.message);
	}
};