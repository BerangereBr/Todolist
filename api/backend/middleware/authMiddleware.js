const jwt = require('jsonwebtoken')

function authMiddleware(req, res, next) {
    const auth = req.headers.authorization

    if (!auth) {
        return res.status(401).json({ message: 'Token manquant' });
    }

    const token = auth.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Token invalide' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(403).json({ message: 'Token invalide ou expiré' })
    }
}

module.exports = authMiddleware;