const mongoose = require('mongoose');

const UserAdminSchema = mongoose.Schema({

    name:String,
    mobile:String,
    password:String,
    createAt:String,
    pic:String,
});


module.exports = mongoose.model('UserAdmins',UserAdminSchema);