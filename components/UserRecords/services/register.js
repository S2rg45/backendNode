'use-stritct'

const MongoModule = require('../store/index')
const bcrypt = require('bcrypt')
const auth = require('../auth/index')


class RegisterUser {
    constructor() {}

    async createRegister({ user }) {
        const queryUser = user
        const createUser = await MongoModule.createUser(queryUser)
        if (typeof(createUser) !== 'object') {
            return { messages: "Error" }
        }
        console.log("CLASS", createUser)
        return createUser
    }

    async login({ dataLogin }) {
        const dataUser = await MongoModule.login(dataLogin)
        const match = await bcrypt.compare(dataLogin.password, dataUser[0].password)
        if (match === true) {
            return auth.sign(dataUser)
        } else {
            throw new Error('Informacion invalidas')
        }
    }

    async getRegister({ pokemon }) {
        return true
    }
}

module.exports = RegisterUser