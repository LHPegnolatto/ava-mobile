const connection = require('../database/connection');

const bcrypt = require('bcryptjs');

module.exports = {
    async register(req, res) {
      const { name, email, password } = req.body;

      const existingUser = await connection('users').where({
        email: email
      })
      .first();

      if (existingUser)
        return res.status(400).json({ error: 'User already exists' });

      const passwordHash = await bcrypt.hash(password, 10);

      const [id] = await connection('users').insert({
        name: name,
        email: email,
        password: passwordHash
      });

      if(!id)
        return res.status(400).json({ error: 'Registration failed' });

      return res.json({});
    }
};