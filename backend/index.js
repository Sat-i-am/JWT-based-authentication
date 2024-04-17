const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./userRoutes')
const app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json())
app.use(cors());

app.use('/api', userRouter);
app.get("/",(req,res)=>{
    res.send("GET Request Called")
    console.log('hellow world');
})


mongoose.connect('mongodb://0.0.0.0:27017')
    .then(()=>{
        console.log('mogoose is connected successfully');
    }).catch((err)=>{
        console.log('error connecting mongoose ');
        console.log(err);
    })

const port = 9000;
app.listen(port,()=>{
    console.log(`server is listening on the port ${port}`);
})
