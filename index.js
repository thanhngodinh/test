const express = require('express');
const db = require('./data');
const usersController = require('./UserController');
// const router = express.Router();

const app = express();
const port = 8000;

db.connect();
// router()

app.post('/send', usersController.send);
app.get('/', usersController.show);


app.listen(port, () => {
    console.log(`App listening at port ${port}`);
});