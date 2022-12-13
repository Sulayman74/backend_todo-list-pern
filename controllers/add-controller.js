//** création d'une tâche todo */

const pool = require("../server/config");

exports.addTodo = async (request, response) => {
  try {
    const { description } = request.body;
    const newTodo = await pool.query(
      "INSERT INTO todo(description) VALUES($1) RETURNING *",
      [description]
    );
    response.json(newTodo.rows[0]);
    console.log("post add request", description);
  } catch (error) {
    console.error(error.message);
  }
};

