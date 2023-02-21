const pool = require("../config.js")

exports.getProfile = async (req, res) => {

    const { user_id } = req.user
    try {
        const getProfile = await pool.query(
            `
SELECT * FROM utilisateur WHERE user_id=$1

            `, [user_id]
        )
        res.status(200).json({ "message": "L'utilisateur par id", "datas": getProfile.rows[0] })
        console.log(user_id);
    } catch (error) {


        res.status(400).json({ error: message })
    }
}