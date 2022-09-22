const express = require ('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const RouteProducts = require('./router/product');

mongoose.connect('mongodb+srv://design:admin@expressapi.jkesuiy.mongodb.net/?retryWrites=true&w=majority',
{
    useNewUrlParser: true, useUnifiedTopology: true 
}).then(() => {
    console.log('Connexion Success !') 
}).catch((error) => {
    console.log(error);
});

app.use(bodyParser.json());
app.use('/api/products/'. RouteProducts);


module.exports = app;