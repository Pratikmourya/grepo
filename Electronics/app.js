let express=require("express")
let app=express()

app.get("/",(req,res)=>{
    res.send("Electronics catergory Module")
})
module.exports=app