//Importing All Libraries
const dotenv=require("dotenv").config()
const express=require("express")
const cors=require('cors')
require('./models/connections.js')

//Making Server
const app=express()
const port=process.env.PORT || 2000
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use(cors())

app.use('/',require('./routes/routes.js'))
//Servere listening
app.listen(port,()=>{
    console.log(`The Server is Running at https://localhost${port}`)
})