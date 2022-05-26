const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require ('body-parser');
const cors = require('cors');
const userRouter = require('./routes/user.router');
const middlewareError = require('./middlewares/errorHandle');

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/v1", userRouter);
app.use(middlewareError);

module.exports = app;