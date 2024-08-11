const jwt = require('jsonwebtoken');
const key = 'ahmad2006';

const isLoggedIn = (req, res, next) => {
    const token = req.headers.authorization || req.cookie.token

    if (!token) {
        return res.status(404).json({ message: "Token not Found.", token });
    }

    try {
        const decoded = jwt.verify(token, key);
        req.user = decoded;
        next();
    } catch (err) {
        console.error("Error in isLoggedIn middleware:", err);
        return res.status(401).json({ message: "Invalid token" });
    }
};

module.exports = isLoggedIn;
