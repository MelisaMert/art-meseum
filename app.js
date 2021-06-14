const express = require('express');
require('./src/db/db-connection')
const expressLayouts = require("express-ejs-layouts");
const path = require('path');
const app = express();

const appRouter = require('./src/routers/app-router');
const collectionRouter = require('./src/routers/collection-router');

app.use(express.json());
app.use(express.static("public"));
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './src/views'));
app.use(express.urlencoded({extended: true}));

app.use('/', appRouter)
app.use('/api/collection', collectionRouter);

app.listen(3000,() => {
    console.log('Server running in 3000 port');
})

