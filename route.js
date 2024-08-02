const express=require('express')
const controller=require('./contoller')


const router=express.Router()

router.get('/get',controller.get)

router.post('/add',controller.add)

router.delete('/remove/:id',controller.deletedata)

module.exports=router