'use-strict'

const { Router } = require('express')
const router = Router()
const RegisterUser = require('../../services')
const secure = require('../../auth/secure')
const utils = require('../../../utils/response')

const registerUser = new RegisterUser()

router.post("/pokemonAll", secure('all'), pokemonAll)
router.post("/pokemonId", secure('id'), pokemonId)
router.post("/login", login)
router.post("/register", register)


async function register(req, res, next) {
    const { body: user } = req
    console.log(user)
    try {
        const usersRegister = await registerUser.createRegister({ user })
        if (usersRegister !== undefined) {
            return utils.success(req, res, { messages: "create" })
        }
    } catch (error) {
        throw utils.error(error, req, res, "Falla", 401)
    }
}


async function login(req, res) {
    const { body: dataLogin } = req
    try {
        const logins = await registerUser.login({ dataLogin })
        if (logins !== undefined) {
            return res.json({ messages: true, token: logins })
        }
    } catch (error) {
        return utils.error(error, req, res, "Falla", 401)
    }
}


async function pokemonAll(req, res, next) {
    const { body: allPokemon } = req
    try {
        const listAllPokemon = await registerUser.allPokemons({ allPokemon })
        if (listAllPokemon !== undefined) {
            return res.json({ messages: usersGet })
        }
    } catch (err) {
        return utils.error(err, req, res, "Falla", 401)
    }
}

async function pokemonId(req, res, next) {
    const { body: idPokemon } = req
    try {
        const usersGet = await registerUser.idPokemons({ idPokemon })
        res.json({ messages: usersGet })
    } catch (err) {
        return utils.error(err, req, res, "Falla", 401)
    }
}

module.exports = router