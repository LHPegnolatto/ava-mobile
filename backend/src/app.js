const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');

const usersRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use(usersRoutes);
app.use(authRoutes);

app.use(errors());

module.exports = app;