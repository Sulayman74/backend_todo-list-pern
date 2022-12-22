
const jwt = require("jsonwebtoken");
const ACCESS_TOKEN_SECRET = "08221543d4fcdf8070bd1d0ebb1380303671b85797d236470ca756ad2e40b7e9338f142bab45"

// Define a middleware function that uses the verifyToken function to
// authenticate requests
function authenticateToken(req, res, next) {
    
    const authorization = 'authorization';
    const authHeader = req.headers[authorization]; //Bearer TOKEN
    // const authHeader = req.headers.authorization; 
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(400).json({ error: "not allowed null token" });


    try {
        const decoded = jwt.verify(token,ACCESS_TOKEN_SECRET);
        req.user = decoded;
    } catch (err) {
        return res.status(403).send("Unauthorized");
    }
    return next();
}

module.exports = authenticateToken