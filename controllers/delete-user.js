const pool = require("../config");

exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user_id = await pool.query("SELECT user_id FROM utilisateur WHERE user_id=$1", [id])
        const deleteUser = await pool.query("DELETE FROM utilisateur WHERE user_id = $1", [id]);
        //** je vérifie si le todo existe avant de le supprimer et je crée une status error selon l'erreur */
        if (user_id.rowCount === 0) return res.status(400).json({ error: "already deleted or doesn't exist" })
        else res.status(200).json({ message: "user has been well deleted" })
    } catch (err) {
        console.error(err.message);
    }
};
