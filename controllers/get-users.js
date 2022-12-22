
const pool = require("../config");

exports.getUsers = async (req, res) => {

    try {

        const getUsers = await pool.query("SELECT * FROM utilisateur ORDER BY lastname ASC")
        res.status(200).json({ "reponse": "all the users are here", message: getUsers.rows })

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}