const jwt = require('jsonwebtoken');
const key = 'ahmad2006';

const isLoggedIn = (req, res, next) => {
    // const token = req.headers.authorization
    const token = req.cookies


    if (!token) {
        return res.status(404).json({ message: "Token not Found", token });
    }
    let cookie = JSON.parse(token)
    try {
        const decoded = jwt.verify(cookie, key);
        req.user = decoded;
        next();
    } catch (err) {
        console.error("Error in isLoggedIn middleware:", err);
        let type = typeof(token)
        let newtype = typeof(cookie)
        return res.status(401).json({ message: "Invalid token" , err, token, type, cookie, newtype});
    }
};

module.exports = isLoggedIn;
