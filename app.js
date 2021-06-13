const express = require('express');
require('./src/db/db-connection')
const app = express();

const appRouter = require('./src/routers/app-router');
const collectionRouter = require('./src/routers/collection-router');

app.use(express.json());
app.use(express.static("public"));

app.use('/', appRouter)
app.use('/api/collection', collectionRouter);

app.listen(3000,() => {
    console.log('Server running in 3000 port');
})

