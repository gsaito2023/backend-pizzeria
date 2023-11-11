const express = require('express')
const allRouter = express.Router()
const multer = require('multer')
const getFields = multer()

const {Food,Users} = require('../models/allSchemas')

allRouter.get('/menu',async(req,res)=>{
    const foodData = await Food.find({})
    try{
        res.send(foodData)
    }
    catch(error){
        res.status(500).send(error)
    }
})

allRouter.post('/signup',getFields.none(),async (req,res)=>{
    try{
    const newuser = new Users(req.body)
    const userData = await newuser.save()
        res.send(userData)
    }
    catch(error){
        res.status(500).send(error)
    }
})

allRouter.post('/login',getFields.none(), async (req,res)=>{
    const user = await Users.findOne({email:req.body.email,password:req.body.password})
    try{
        (user)?res.send(user):res.send('Authentication Failed')
    }
    catch(error){
        res.status(500).send(error)
    }
})
allRouter.put('/updateProfile',getFields.none(),async(req,res)=>{
    try{
    const user = await Users.updateOne({email:req.body.email},{
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        phoneNumber:req.body.phoneNumber
    })
   
        res.send(user)
    }
    catch{
        res.status(500).send(error)
    }
})
allRouter.put('/changePassword',getFields.none(),async(req,res)=>{
    try{
        const user = await Users.updateOne({email:req.body.email},{
            password:req.body.newPassword
        })
        res.send(user)
    }
    catch(error){
        res.status(500).send(error)
    }
})
module.exports = allRouter