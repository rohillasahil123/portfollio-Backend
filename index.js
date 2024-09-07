const express = require("express");
require("./config/config.js");
const FormData = require ("./Models/contectForm.js")
const cors = require("cors")

const app = express();

app.use(cors())
app.use(express.json());



app.post("/formData" , async (req,res)=>{
    const {name,email,phoneNumber,message , subject} = req.body;
    if(!name,!email,!phoneNumber,!message , !subject){
        return res.status(400).json({message:"Please fill all the fields"})
    }
    try {
        const responce = new FormData(req.body)
        const data = await responce.save()
        res.status(200).json({message : "Data Saved Successfully" , data })
    } catch (error) {
        res.status(500).json({message : "Internel error"})
    }
})





app.listen(8010 ,()=>{
    console.log("Server is running on port 8010")
});
