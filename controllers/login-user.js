const pool = require("../config");
const bcrypt = require("bcrypt");
const validator = require("validator");
const { isEmail } = validator;
const { jwtTokens } = require("../helpers/auth-helper");

exports.login = async (req, res) => {

    try {
        const { email, password } = req.body
        const login = await pool.query(`SELECT * FROM utilisateur WHERE email=$1`, [email]);

        if (!isEmail(email)) {
            res.status(400).json({ message: "l'email n'est pas valide" })
            return false;
        }
        if (login.rows.length === 0) return res.status(401).json({ error: "Email is incorrect" });

        const clearPassword = await login.rows[0].password
        const validPassword = await bcrypt.compare(password, clearPassword);

        if (!validPassword) return res.status(401).json({ error: "wrong password" })


        const user = { email: login.rows[0].email, user_id: login.rows[0].user_id, password: login.rows[0].password }

        // TODO ------------- le JWT --------------------- //

        let token = jwtTokens(user)
        res.status(200).json({ "token": token, "datas": user, "message": "You are welcome" })

    } catch (err) {
        res.status(400).send(err)
    }
}