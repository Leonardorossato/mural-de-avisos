const express = require('express');
const app = express();
const PORT =  5000;
const path = require('path');
const Api = require('./routes/Api');

app.use('/', express.static(path.join( __dirname, "client")));
app.use('/Api', Api);

app.listen(5000,()=>{
    console.log(`Server is running on port: ${PORT}`);
})