const User = require('../models/User.model');

module.exports.registerUser = (userInfo) => {
    return User.create(userInfo);
}

module.exports.findUserByEmail = (email) => {
    return User.findOne({ email: email}); 
}