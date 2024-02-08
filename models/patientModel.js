const mongoose=require("mongoose")

const patientSchema=new mongoose.Schema(
    {
        name:String,
        address:String,
        phoneno:String,
        symtoms:String,
        status:String
    }
)
module.exports=mongoose.model("patient",patientSchema)