//** get all the todos */

const pool = require("../config");

exports.getAllTodos = async (req, res) => {
  try {
    const allTodos = await pool.query(
      "SELECT * FROM todo ORDER BY todo_id ASC"
    );
    res.json(allTodos.rows);
    // console.warn("get request", allTodos);
  } catch (error) {
    console.error(error.message);
  }
};
