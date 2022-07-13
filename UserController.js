const Users = require('./model');

class UsersController {
    show(req, res) {
        try {
            let result = Users.find().exec();
            res.send(result);
        } catch (error) {
            response.status(500).send(error);
        }
    }

    send(req, res) {
        
    }

    save(req, res) {
        try {
            let person = new Users(req.body);
            let result = person.save();
            res.send(result);
        } catch (error) {
            response.status(500).send(error);
        }
    }

}

module.exports = new UsersController();