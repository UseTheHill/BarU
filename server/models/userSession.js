const mongoose = require('mongoose');

//User in session
const UserSessionSchema = new mongoose.Schema({
    userId: {
        type:String,
        default: ""
    },
    timeStamp: {
        type:Date,
        default: Date.now()
    },
    deleted: {
        type:Boolean,
        default: false
    }
});

module.exports = mongoose.model('UserSession', UserSessionSchema);