'use strict';

const MongoClient = require('mongoose')
const config = require('../../config/index')

MongoClient.Promise = global.Promise
const uri = config.config.mongo.uri
MongoClient.connect(uri, { useNewUrlParser: true })
console.log("Connect Db with mongose")