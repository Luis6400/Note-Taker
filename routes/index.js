const express = require('express');

const noterouter = require('./noteroutes.js');

const app = express();

app.use("/api", noterouter);

module.exports = app;