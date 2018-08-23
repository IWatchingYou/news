const express = require('express');
const app = express();

const new_route = require('./routes/news');

app.use('/api/v1', new_route);

module.exports = app;