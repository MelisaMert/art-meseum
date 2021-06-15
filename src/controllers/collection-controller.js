const Collection = require('../models/collection-model');

const listAllCollection = async (req,res) => {
    const allCollection  = await Collection.find({})
    res.render('./collections/index',{collections: allCollection});
}

const getCollectionDetail = async(req,res) => {
    res.json({message: "collection detail"});
}

module.exports = {
    listAllCollection,
    getCollectionDetail
}