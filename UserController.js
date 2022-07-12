const Users = require('./model');

class UsersController {
    show(req, res) {
        console.log(req)
    }

    send(req, res, next) {
        console.log(req.body);
        console.log('res', res.body);
        const user = new Users(req.body);
        user
            .save()
            .catch((error) => {});
    }

}

module.exports = new UsersController();