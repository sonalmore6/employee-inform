const employeeinfo=require('./model')


const get=async(req,res)=>{
    try {
        const data=await employeeinfo.find()
        res.send(data)
    } catch (error) {
        console.log(error);
        res.send(error)
        
    }
}
const add=async(req,res)=>{
    try {
        const { id, name,role, experience,age}=req.body
        const newdata= new employeeinfo({id, name,role, experience,age})
        const newdata1= await newdata.save()
        res.send(newdata1)
    } catch (error) {
        console.log(error);
        res.send(error)
        
    }
}

const deletedata=async(req,res)=>{
    const {id}=req.params
    try {
           const data= await employeeinfo.findByIdAndDelete(id)  
           res.send(data)

    } catch (error) {
        console.log(error);
        res.send(error)
        
    }
}
module.exports={get ,add ,deletedata}