import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
    const token = req.cookies['auth-token']
    if(!token){
        return res.status(401).send('Unauthorized!')
    }

    const payload = jwt.verify(token,'my-secret-key');
    req.userid = payload.id;
    req.user = payload.email;
    next();
}

export default authMiddleware;