require('dotenv').config();

const express = require('express');
const baseRoutes = require('./routes/base');

//express app
const app = express();

//middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});


//routes
app.use(baseRoutes);

//listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT);
});


