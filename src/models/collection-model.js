const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Joi = require('@hapi/joi');

const collectionSchema = new Schema({
    department: {
        type: String,
        minLength: 3,
        maxLength: 50
    },
    title: {
        type: String,
        minLength: 3,
        maxLength: 150
    },
    artistRole: {
       type: String,
       trim: true,
       minLength: 3,
       maxLength: 50
    },
    artist: {
        type: String,
        minLength: 3,
        maxLength: 50
    },
    artistBeginDate: {
        type:Number
    },
    artistBeginEnd: {
        type: Number
    },
    accessionNumber: {
        type: Number
    },
    date: {
        type: Number
    },
    repository: {
        type: String,
        minLength: 3,
        maxLength: 50
    },
    isHighlight: {
       type: Boolean,
       default: false
    },
    culture: {
        type: String,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 50
    },
    classification: {
     type:String,
     trim: true,
     lowercase: true,
     minLength: 3,
     maxLength: 50
    },
    imgSource: {
     type:String,
     trim: true,
     lowercase:true,
     minLength: 3,
     maxLength: 50
    }
  },{ collection: 'Collection', timestamps: true }
)

const Collection = mongoose.model('Collection', collectionSchema);

module.exports = Collection;

