const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/masterdata2');
        console.log('Connected MongoDB!');
    } catch (error) {
        console.log('Connect MongoDB failure');
    }
};

module.exports = { connect };