// app.js
const express = require('express');
const app = express();
const bookRoutes = require('./routes/bookRoutes');
const errorHandler = require('./middleware/errorHandler');

app.use(express.json());
app.use('/books', bookRoutes);
app.use(errorHandler); // global error handler

module.exports = app;
