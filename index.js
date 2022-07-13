const express = require('express');
const db = require('./data');
const usersController = require('./UserController');
const bodyParser = require("body-parser");
// const router = express.Router();
require('dotenv').config();

const app = express();
let port = process.env.PORT || 8000;


db.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.route('/send')
    .post(usersController.send);
app.route('/')
    .get(usersController.show);


app.listen(port, () => {
    console.log(`App listening at port ${port}`);
});