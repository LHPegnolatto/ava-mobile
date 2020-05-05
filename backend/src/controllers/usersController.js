const connection = require('../database/connection');

const bcrypt = require('bcryptjs');

module.exports = {
    async create(request, response) {
        const { name, email, password } = request.body;

        const passwordHash = await bcrypt.hash(password, 10);

        const [id] = await connection('users').insert({
          name: name,
          email: email,
          password: passwordHash
        });

        return response.json({id});
    }
};