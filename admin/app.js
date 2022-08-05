let express = require("express")
let app=express()

app.get("/",(req,res)=>{
    res.send(" Ecommerce Admin")

})

module.exports= app