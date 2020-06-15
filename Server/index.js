const express = require('express');
const dotEnv= require('dotenv');
const mongoose=require('mongoose');
const cors = require('cors');
const apiRouter = require('./apiRouter');
const app =express();

dotEnv.config();

mongoose.connect(process.env.SERVER_DB,{ useNewUrlParser: true, useUnifiedTopology: true },(err)=>{
    if(err) throw err;
    console.log("Connected to DB")
})

app.use(cors());
app.use(express.json())
app.use('/api',apiRouter)

app.listen(process.env.PORT,(err)=>{
    if(err) throw err;
    console.log("Server is running with port ",process.env.PORT);
})
