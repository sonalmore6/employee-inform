const mongoose=require('mongoose')

const employee=new mongoose.Schema({
    id: String,
    name: String,
    role: String,
    experience: String, 
    age: String
    tencology :String

})


module.exports=mongoose.model('employeeinfo',employee)
