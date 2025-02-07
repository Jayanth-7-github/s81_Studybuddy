const mongoose=require("mongoose")
require("dotenv").config()
console.log(process.env.mongodb)
const connect=mongoose.connect(process.env.mongodb)
module.exports=connect