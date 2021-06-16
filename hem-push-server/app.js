var pushRouter = require('./routes/push');

const express = require('express');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/v1/push', pushRouter);

module.exports = app;