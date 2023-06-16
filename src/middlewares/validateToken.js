import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';

export const authRequired = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  jwt.verify(token, process.env.SECRET || TOKEN_SECRET, (err, user) => {
    if (err) return res.status(401).json({ message: 'Unauthorized' });

    req.user = user;

    next();
  });
};
