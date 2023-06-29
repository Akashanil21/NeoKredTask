const dotenv = require('dotenv')
dotenv.config()
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    return jwt.sign(
        { _id: user.id, username: user.username, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    );
};

const isAuth = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (authorization) {
        const token = authorization.slice(7, authorization.length);
        jwt.verify(token, "test", (err, decode) => {
            if (!token) {
                res.redirect('/');

            } else {
                req.user = decode;
                next();
            }
        });
    } else {
        res.send(401).send({ message: "NO TOKEN" });
    }
};

module.exports = { isAuth, generateToken }
