'use strict'

const db = require('../../lib/mongodb')
const Model = require('./modelCreate')
const bcrypt = require('bcrypt')
const utils = require('../../utils/response').default

const createUser = async(user) => {
    try {
        const newUser = new Model()
        newUser.email = user.email
        newUser.password = await bcrypt.hash(user.password, 3)
        const create = newUser.save()
        return create
    } catch (error) {
        return error
    }
}

const login = async(user) => {
    try {
        const userEmail = await Model.find({ email: user.email })
            // return JSON.stringify(userEmail)
        return userEmail
    } catch (error) {
        return error
    }
}

module.exports = {
    createUser,
    login
}