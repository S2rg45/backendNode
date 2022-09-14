'use-stritct'

const MongoModule = require('../store/index')
const bcrypt = require('bcrypt')
const https = require('https');
const auth = require('../auth/index')
const { config } = require('../../../config/index')


class RegisterUser {
    constructor() {}

    async createRegister({ user }) {
        const queryUser = user
        const createUser = await MongoModule.createUser(queryUser)
        if (typeof(createUser) !== 'object') {
            return { messages: "Error" }
        }
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

    async allPokemons({ all }) {
        const amountPokemon = all.amount
        const url = config.pokemon.url_all
        https.get(url + amountPokemon, (response) => {
            return JSON.parse(response)
        })
    }

    async idPokemons({ id }) {
        const amountPokemon = id.amount
        const url = config.pokemon.url_id
        https.get(url + amountPokemon, (response) => {
            return JSON.parse(response)
        })
    }
}

module.exports = RegisterUser