// ** get a specific todo/

const pool = require("../config");

exports.getOneTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const singleTodo = await pool.query(
      "SELECT * FROM todo WHERE todo_id = $1",
      [id]
    );
    console.log("get one", req.params);
    res.json(singleTodo.rows);
  } catch (err) {
    console.error(err.message);
  }
};
