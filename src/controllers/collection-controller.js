const Collection = require('../models/collection-model');

const listAllCollection = async (req,res) => {
    const allCollection  = await Collection.find({})
    res.json(allCollection);
}

module.exports = {
    listAllCollection
}