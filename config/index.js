require('dotenv').config()
const config = {
    dev: process.env.NODE_ENV !== "production",
    port: process.env.PORT,
    mongo: {
        uri: process.env.URI_DATABASE,
        collection_shipping: process.env.COLLECTION_SHIPPING,
        collection_shipping_order: process.env.COLLECTION_SHIPPING_ORDER,
        database: process.env.DATABASE,
    },
    jwt: {
        secret: process.env.JWTSECRET
    },
    pokemon: {
        url_all: process.env.URL_ALL_POKEMONS,
        url_id: process.env.URL_ID_POKEMONS
    }
}

module.exports = { config }