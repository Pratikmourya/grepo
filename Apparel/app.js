let express=require("express")
let app=express()

app.get("/",(req,res)=>{
    res.send("Apparel catergory Module")
})
module.exports=app