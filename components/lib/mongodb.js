'use-strict'

const MongoClients = require("mongodb").MongoClient
const config = require('../../config/index')

class ConnectMongo {

    constructor() {
        this.url = {
            uri: config.config.mongo.uri
        }
    }


    async run() {
        const client = new MongoClients(url.uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        return client
    }
}


module.exports = ConnectMongo