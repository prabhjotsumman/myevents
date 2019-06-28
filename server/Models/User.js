const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    created: { type: Date, default: () => new Date() },
});

module.exports = mongoose.model('User', userSchema)