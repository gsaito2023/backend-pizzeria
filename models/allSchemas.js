const mongoose = require('mongoose')

const FoodSchema = mongoose.Schema({
    id:Number,
    name:String,
    price:String,
    image:String,
    description:String,
    tag:String
})

const UserSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },

    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        index:true,
        unique:true, 
        sparse:true
    },
    password:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    }
})

const ItemSchema = mongoose.Schema({
    id: Number,
    name: String,
    image: String,
    tag: String
})

const Food = mongoose.model('Food',FoodSchema)
const Users = mongoose.model('User',UserSchema)
const Items = mongoose.model('Item', ItemSchema);

module.exports = {Food,Users,Items}