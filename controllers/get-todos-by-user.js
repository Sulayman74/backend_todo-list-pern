const pool = require("../config");

exports.getTodosByUser = async (req, res) => {

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
	utilisateur.user_id = todo.user_id`
        );
        res.status(200).json({ "message": Todos.rows });
    } catch (error) {
        console.error(error.message);
    }
};