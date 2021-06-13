const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ArtMuseum',{createIndexes: true, useUnifiedTopology: true, useNewUrlParser: true})
 .then(() => console.log('Success DB Connection'))
 .catch(error => console.log('DB Connection Fail');