const mongoose = require('mongoose') ; 
const express = require('express') ; 
const schema = mongoose.Schema ; 
const  user_schema = new schema({
name:{
type:String 
},

position:{
type:String  

}, 
office:{
type:String 


} , 
salary:{
 type:String   







}









    
 })
 const user = mongoose.model('user',user_schema) ; 
module.exports = user ; 