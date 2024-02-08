const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const patientRoutes=require("./controllers/patientRouter")
const app=express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://fahmida123:fahmida123@cluster0.qw5qvsl.mongodb.net/covidDb?retryWrites=true&w=majority",
{
    useNewUrlParser:true
}
)

app.use("/api/patient",patientRoutes)

app.listen(3008,()=>{
    console.log("server running")
})