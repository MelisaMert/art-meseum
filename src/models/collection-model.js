const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Joi = require('@hapi/joi');

const collectionSchema = new Schema({
    deparment: {
        type: String,
        trim: true,
        minLength: 3,
        maxLength: 50
    },
    name: {
        type: String,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 50
    },
    title: {
        type: String,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 50
    },
    artistRole: {
       type: String,
       trim: true,
       lowercase: true,
       minLength: 3,
       maxLength: 50
    },
    artistDisplayName: {
        type: String,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 50
    },
    artistBeginDate: {
        type:Number
    },
    artistBeginEnd: {
        type: Number
    },
    acessionYear: {
        type:Number
    },
    objectDate: {
        type: Number
    },
    repository: {
        type: String,
        trim: true,
        minLength: 3,
        maxLength: 50
    },
    accessionNumber: {
        type: Number
    },
    isHighlight: {
       type: Boolean,
       default: false
    }
  },{ collection: 'Collection', timestamps: true }
)

const Collection = mongoose.model('Collection', collectionSchema);

module.exports = Collection;

