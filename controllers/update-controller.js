//** update a todo */

const pool = require("../config");

exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id =$2",
      [description, id]
    );
    res.json("todo est mis à jour");
  } catch (error) {
    console.error(error.message);
  }
};
