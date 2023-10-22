const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
const app = express()
const allRouter=require('./routes/allRoutes')
//comment
const corspolicy = {
    origin:'http://localhost:3000'
}
app.use(cors(corspolicy))
app.use(express.json())

const db = module.exports = async ()=>{
    try{
       await mongoose.connect(process.env.DBURL,{
        user:process.env.DBUSERNAME,
        pass:process.env.DBPASSWORD,
        useNewUrlParser:true,
        useUnifiedTopology:true
       })
       console.log("MongoDB connect successfully")
    }
    catch(error){
        console.log(error)
        console.log('Failed to connect MongoDB')
    }
}
db()

app.use('/',(req,res,next)=>{
    console.log('A new request received at '+new Date())
    next()
})

app.use('/',allRouter)

app.listen(process.env.PORT,()=>{
    console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})