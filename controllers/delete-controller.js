//** delete a todo task */

const pool = require("../server/config");

exports.delete_task = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
      id,
    ]);
    const todos = await pool.query("SELECT * FROM todo")
    res.json({ "message": "todo has been deleted", "todos": todos.rows });
  } catch (err) {
    console.error(err.message);
  }
};
