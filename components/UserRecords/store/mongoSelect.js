'use-strict'

const DbMongo = require('../../lib/mongodb')
const utils = require('../../../config/index')


const database = utils.config.mongo.database
const collection_shipping = utils.config.mongo.collection_shipping
const collection_shipping_order = utils.config.mongo.collection_shipping_order

const dbMongo = new DbMongo()

const dataShippings = async() => {
    const client = dbMongo.run()
    const connect = (await client).connect
    try {
        const shippingOrder = (await client).db(database)
            .collection(collection_shipping)
            .aggregate([
                {
                    $lookup: {
                        from: collection_shipping_order,
                        localFiel: '_id',
                        foreignField: '_id',
                        as: 'shipping_order'
                    }
										}
									])
        return shippingOrder
    } catch (error) {
        return error
    }
}

module.exports = {
    dataShippings
}