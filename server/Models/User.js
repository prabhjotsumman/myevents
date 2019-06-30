const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
    name : { type: String, required: true }, 
    email: { type: String, required: true, unique: true },
    organisationName: { type: String, required: true },
    mobile : {type: Number, required:true },
    password: { type: String, required: true },
    created: { type: Date, default: () => new Date() },
});

module.exports = mongoose.model('User', userSchema)