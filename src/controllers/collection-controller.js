const Collection = require('../models/collection-model');

const listAllCollection = async (req, res) => {
    const allCollection = await Collection.find({})
    res.render('./collections/index', { collections: allCollection });
}

const getCollectionDetail = async (req, res) => {
    const collection = await Collection.findById({ _id: req.params.collectionId });
    res.render('./collections/collection', { collection: collection })
}

const getCreateCollection = async (req, res) => {
    res.render('./collections/create-collection')
}

const createCollection = async(req,res) => {
    res.json({message: "Create Collection Running", data: req.body})
}


module.exports = {
    listAllCollection,
    getCollectionDetail,
    getCreateCollection,
    createCollection
}