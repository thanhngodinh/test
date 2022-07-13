const stompit = require("stompit");

const express = require("express");
const usersController = require("./UserController");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
let port = 3000;

stompit.connect({ host: "localhost", port: 61613 }, (err, client) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  
  app.post("/send", (req, res) => {
    console.log(JSON.stringify(req.body));
    const frame = client.send({ destination: "topic/topic" });
    frame.write(JSON.stringify(req.body));
    frame.end();
    res.status(200).json(req.body)
  });
  app.get('/', usersController.show);

  app.listen(port, () => {
    console.log(`App listening at port ${port}`);
  });



  // client.disconnect();
});
