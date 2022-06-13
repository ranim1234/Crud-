const express = require('express') ; 
const mongoose= require('mongoose');  
const User  = require('./models/user.js') ; 
const app = express() ;   
const cors = require('cors') ; 
app.listen(3200) ; 
const db = 'mongodb+srv://Ranim:Ranim1234@cluster0.viwyv.mongodb.net/login?retryWrites=true&w=majority' ; 

mongoose.connect(db,{useNewUrlParser:true ,useCreateIndex:true, useUnifiedTopology:true})
.then((res)=>{console.log("connected")}) 
.catch((err)=>{console.log(err)})
app.use(express.static('public')) ;  
app.use(cors()) ; 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine','ejs') ;   
app.get('/',(req,res)=>{
User.find().sort({CreatedAt:-1})
.then((doc)=>{res.send(doc)}) 
.catch((err)=>console.log(err)) ; 
})
app.post('/',(req,res)=>{
    const name = req.body.name ; 
    const position = req.body.position ; 
    const office = req.body.office ; 
    const salary = req.body.salary ; 

const user_db = new User({name:name,position:position,office:office,salary:salary}); 
//console.log(user_db) ; 
user_db.save() 
.then((result)=>{
res.send(result) ; 

}) 
.catch((err)=>{console.log(err)}) ; 
}) 
app.delete('/:id',(req,res)=>{


const id = req.params.id; 
User.findByIdAndDelete(id)
.then((res)=>{console.log(res);})
.catch((err)=>console.log(err));

})
app.put('/:id',(req,res)=>{

const id = req.params.id ; 
const emp = {
name:req.body.name , 
position:req.body.position , 
office:req.body.office , 
salary:req.body.salary 
}

User.findByIdAndUpdate(id, { $set :emp },{new:true})
.then((doc)=>{res.send(doc);}) 
.catch((err)=>console.log(err)) ; 



}) 
app.delete('/:id',(req,res)=>{
const id = req.params.id ; 
user.findbyIdandRemove(id)
.then((doc)=>{res.send(doc);})
.catch((err)=>console.log(err)) ; 



})