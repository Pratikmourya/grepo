const express = require("express")
const app= express()
const config = require("./config")
const { createProxyMiddleware } = require('http-proxy-middleware');


app.use("/admin",createProxyMiddleware({
    target:config.admin_URL,
    changeOrigin:true,
    pathRewrite:{
        '^/admin':'/'
    }
}))

app.use("/user",createProxyMiddleware({
    target:config.user_URL,
    changeOrigin:true,
    pathRewrite:{
        '^/usertest':'/'
    }
}))

app.use("/Apparel",createProxyMiddleware({
    target:config.admin_URL,
    changeOrigin:true,
    pathRewrite:{
        '^/apparel':'/'
    }
}))

app.use("/Electronics",createProxyMiddleware({
    target:config.admin_URL,
    changeOrigin:true,
    pathRewrite:{
        '^/electronice':'/'
    }
}))

app.use("/tracking",createProxyMiddleware({
    target:config.admin_URL,
    changeOrigin:true,
    pathRewrite:{
        '^/tracking':'/'
    }
}))

module.exports = app