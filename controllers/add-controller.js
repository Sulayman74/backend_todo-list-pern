//** création d'une tâche todo */

const pool = require("../config");

exports.addTodo = async (request, response) => {
  const { user_id } = request.user

  try {
    const { description } = request.body;
    const newTodo = await pool.query(
      "INSERT INTO todo(description,user_id) VALUES($1,$2) RETURNING *",
      [description, user_id]
    );
    response.json(newTodo.rows[0]);
    console.log("Add Task ok", description, user_id);
  } catch (error) {
    console.error(error.message);
  }
};

