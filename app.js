const express=require('express')
const app=express()
const mongoose=require('mongoose')
const router=require('./route')

mongoose.connect("mongodb://localhost:27017/employee")
.then(()=>console.log("connected to mongodb"))
.catch((err)=>console.log(err))

app.use(express.json())

app.use('/',router)

app.get('/',function (req,res){
       res.send("employee list")
})

app.listen('8030',console.log("employee list API"))