
const jwt = require("jsonwebtoken")
const ACCESS_TOKEN_SECRET = "08221543d4fcdf8070bd1d0ebb1380303671b85797d236470ca756ad2e40b7e9338f142bab45"


function jwtTokens({ email, user_id, lastname, firstname, password }) {

    const user = { email, user_id, lastname, firstname, password };
    const accessToken = jwt.sign(user, ACCESS_TOKEN_SECRET)
    return accessToken
}
module.exports = { jwtTokens }

