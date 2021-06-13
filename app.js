const express = require('express');
require('./src/db/db-connection')
const app = express();

const appRouter = require('./src/routers/app-router');

app.use(express.json());

app.use('/', appRouter)


app.listen(3000,() => {
    console.log('Server running in 3000 port');
})

