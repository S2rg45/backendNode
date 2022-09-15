const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schemaCreate = new Schema({
    email: String,
    password: String,
})

const model = mongoose.model('userCreate', schemaCreate)
module.exports = model