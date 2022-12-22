//** delete a todo task */

const pool = require("../config");

exports.delete_task = async (req, res) => {
  try {
    const { id } = req.params;
    const todo_id = await pool.query("SELECT todo_id FROM todo WHERE todo_id=$1", [id])
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
    //** je vérifie si le todo existe avant de le supprimer et je crée une status error selon l'erreur */
    if (todo_id.rowCount === 0) return res.status(400).json({ error: "already deleted or doesn't exist" })
    else res.status(200).json({ message: "task has been well deleted" })
  } catch (err) {
    console.error(err.message);
  }
};
