let express=require("express")
const {UserModel,TeacherModel}=require("../model/UserSchema");

let userRoutes=express.Router()
 
userRoutes.post("/signup",async(req,res)=>{
    console.log(req.body)
    try {
        const {name,email,password}=req.body
        let newuser=new UserModel({name,email,password})
        await newuser.save()

       res.status(200).send({message:"The Data is Saved"})
    } catch (error) {
        console.log(error)
    }
})

userRoutes.post("/teacher",async(req,res)=>{
    console.log(req.body)
    try {
    
        await TeacherModel.insertMany(req.body)

       res.status(200).send({message:"The Data is Saved"})
    } catch (error) {
        console.log(error)
    }
})



module.exports={userRoutes}