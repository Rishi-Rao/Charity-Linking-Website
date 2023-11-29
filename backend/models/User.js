const mongoose = require("mongoose");
const {Schema} = mongoose;

const UserSchema = new Schema({
    Name: String,
    Email: { type: String , unique:true},
    Password: String
  });

module.exports = mongoose.model('users',UserSchema);