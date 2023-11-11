const express = require('express')
const allRouter = express.Router()
const multer = require('multer')
const getFields = multer()

const {Food,Users,Items} = require('../models/allSchemas')

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
    const newuser = new Users(req.body)
    const userData = await newuser.save()
    try{
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

allRouter.get('/', async(req, res) => {
    const itemData = await Items.find({});
    try{
        res.send(itemData);
    }catch(error){
        res.status(500).send(error);
    }
})

module.exports = allRouter