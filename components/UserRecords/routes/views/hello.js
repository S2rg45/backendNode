const { Router } = require('express')
const { config } = require('../../../../config')
const router = Router()

const gretting = [{ messages: "hello", response: "world" }]

router.get("/", (req, res) => {
    res.render("hero", { gretting, dev: config.dev })
})

module.exports = router