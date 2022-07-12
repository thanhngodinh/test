const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const Users = new Schema(
    {
        id: {type: String, require: true},
        username: { type: String, require: true },
        active: { type: Boolean, require: true },
        locked: { type: Boolean, require: true },
        dateOfBirth: {type: String },
        email: {type: String},
        url: {type: String},
        phone: {type: String}
    },
    {
        timestamps: true,
    },
);


module.exports = mongoose.model('Users', Users);