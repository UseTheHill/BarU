const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

//create user schema object data
const UserSchema = new mongoose.Schema({

    username: {
        type:String,
        default: ''
    },
    email: {
        type:String,
        default: ''
    },
    password: {
        type:String,
        default: ''
    },
    deleted: {
        type:Boolean,
        default: false
    }

});

//create method to create password privacy
UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

//validate password method
UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);
