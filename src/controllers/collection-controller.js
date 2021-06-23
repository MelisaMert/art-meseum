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
    try {
      const addedCollection = new Collection(req.body);
      const result = await addedCollection.save();
      res.json(result);
    } catch(err){
      console.log(err);
    }
}

const getEditCollection = async(req,res) => {
    const collection = await Collection.findById({_id: req.params.collectionId});
    res.render('./collections/edit-collection', { collection: collection, collectionId: req.params.collectionId });
}

const editCollection = async(req,res) => {
    res.json({message: "Edit Collection Running", data: req.body, id: req.params.collectionId})
    try {
      const result = await Collection.findByIdAndUpdate({_id: req.params.collectionId}, req.body, {useFindAndModify: true});
      if(result){
          return res.json(result);
      }  

      return res.status(404).json({
          message: "Collection Not Found"
      })
    } catch(e) {
        console.log('e', e);
        return;
    }
}

const deleteCollection = async(req,res) => {
    console.log('Collection Id', req.params.collectionId);

    try {
      const result = await Collection.findByIdAndDelete({_id: req.params.collectionId});
      if(result) {
            res.redirect('/api/collection'); 
      } else {
          console.log('Collection Not Found');
      }
    } catch(e){
       console.log(e);
    }
}

module.exports = {
    listAllCollection,
    getCollectionDetail,
    getCreateCollection,
    createCollection,
    getEditCollection,
    editCollection,
    deleteCollection
}