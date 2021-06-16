const Collection = require('../models/collection-model');

const listAllCollection = async (req,res) => {
    const allCollection  = await Collection.find({})
    res.render('./collections/index',{collections: allCollection});
}

const getCollectionDetail = async(req,res) => {
    const collection = await Collection.findById({_id: req.params.collectionId});
    res.render('./collections/collection', {collection: collection})
}

module.exports = {
    listAllCollection,
    getCollectionDetail
}