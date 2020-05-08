require("dotenv-safe").config();

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader)
    return response.status(401).json({ error: 'No token provided' });

  const parts = authHeader.split(' ');

  if (!parts.lenght === 2)
    return response.status(401).json({ error: 'Token error' });

  const [ scheme, token ] = parts;

  if (!/^Bearer$/i.test(scheme))
    return response.status(401).json({ error: 'Token malformatted' });

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err)
      return response.status(401).json({ error: 'Token invalid' });

    req.userId = decoded.id;

    return next();
  });
}