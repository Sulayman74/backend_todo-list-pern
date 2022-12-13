
const jwt = require("jsonwebtoken")



function jwtTokens({ email, user_id, lastname, firstname }) {

    const user = { email, user_id, lastname, firstname };
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    return accessToken
}
module.exports = { jwtTokens }

