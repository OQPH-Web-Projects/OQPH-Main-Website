require('dotenv').config();

const express = require('express');
const baseRoutes = require('./routes/base');
const { mongoose } = require('mongoose');

//express app
const app = express();

//middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});


// routes
app.use(baseRoutes);

// connect to mongobb
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connecting to db and listening on port', process.env.PORT);
        });
    })
    .catch((error) => {console.log(error)})




