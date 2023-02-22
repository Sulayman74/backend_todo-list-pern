
const pool = require("../config");
const bcrypt = require("bcrypt");
const validator = require("validator");
const { isEmail } = validator
const { jwtTokens } = require("../helpers/auth-helper")

exports.register = async (request, response) => {
    try {

        const { lastname, firstname, email, password, user_id } = request.body;

        if (!isEmail(email)) {
            console.log("invalid email");
            response.status(403).json({ error: "invalid email" })
            return false
        };

        const user = await pool.query("SELECT email FROM utilisateur WHERE email=$1", [email])
        if (user.rowCount !== 0) {
            console.log("Can not add this worker");
            response.status(403).json({ "email": email, "message": "user already exists" })
            return false
        }

        const saltRounds = 10
        let hashPassword = await bcrypt.hash(password, saltRounds)


        const utilisateur = { email: request.body.email, user_id: request.body.user_id, lastname: request.body.lastname, firstname: request.body.firstname, password: request.body.password }
        // TODO ------------- le JWT --------------------- //

        let token = jwtTokens(utilisateur)

        const newUser = await pool.query(
            "INSERT INTO utilisateur(lastname,firstname,email,password) VALUES($1,$2,$3,$4) RETURNING *",
            [lastname, firstname, email, hashPassword]
        );
        response.status(200).json({ "user": newUser.rows[0], message: "user added", "token": token });

    } catch (error) {
        console.error(error.message);
    }
};

