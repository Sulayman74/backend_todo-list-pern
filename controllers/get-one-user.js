// ** get a specific user/

const pool = require("../server/config");

exports.getOneUser = async (req, res) => {
    try {
        const { id } = req.params;
        const singleUser = await pool.query(
            "SELECT * FROM utilisateur WHERE utilisateur_id=$1", [id]
        );
        console.log("get one", req.params);
        res.json(singleUser.rows);
    } catch (err) {
        console.error(err.message);
    }
};
