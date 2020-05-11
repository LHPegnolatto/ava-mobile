require("dotenv-safe").config();

const connection = require('../database/connection');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
    async authenticate(req, res) {
        const { email, password } = req.body;

        const user = await connection('users').where({
          email: email
        })
        .first();

        if (!user)
          return res.status(400).json({ error: 'User email not found' });

        if (!await bcrypt.compare(password, user.password))
          return res.status(400).json({ error: 'Invalid password' });

        const token = jwt.sign({ id: user.id }, process.env.SECRET, {
          expiresIn: 86400,
        });

        return res.json({ auth: true, token: token, email: email });
    }
};