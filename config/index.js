require('dotenv').config()
const config = {
    dev: process.env.NODE_ENV !== "production",
    port: process.env.PORT,
    mongo: {
        uri: process.env.URI_DATABASE,
        collection: process.env.COLLECTION,
        database: process.env.DATABASE,
    },
    jwt: {
        secret: process.env.JWTSECRET
    }
}

module.exports = { config }