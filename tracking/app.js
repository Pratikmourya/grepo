let express=require("express")
let app=express()

app.get("/",(req,res)=>{
    res.send("Order Tracking Module")
})
module.exports=app