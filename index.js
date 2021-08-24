require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const mongoose = require('mongoose');
const routes = require('./routes/route');


app.use('/',routes);

mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser : true, useUnifiedTopology : true, useFindAndModify : false})
    .then(()=>{
        console.log("Connected to DB");
    }).catch(err => {
    console.log(err);
})

app.get('/',(req,res)=>{
    res.send("Welcome to Todo App");
})

app.listen(PORT, ()=>{
    console.log(`Listening to PORT ${PORT}`);
})

