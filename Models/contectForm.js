const mongoose = require("mongoose")

const contectSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String,
    phoneNumber:String
})
module.exports = mongoose.model('formData' , contectSchema)

