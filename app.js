require('dotenv').config()

const express = require('express')
const app= express()
const errorHandlerMiddleware= require("./middleware/error-handler")
const notFound = require("./middleware/not-found")
const ProductRouter= require("./routes/products")

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('<h1>products page</h1><a href="/api/v1/products">product </a>')
})

const port =process.env.PORT;
app.use("/api/v1/products",ProductRouter)
app.use(errorHandlerMiddleware);
app.use(notFound);

const start =async()=>{
try{
//connection to db

    app.listen(port,()=>{
        console.log(`app listening on port ${port}`)
    })}catch(error){
        console.log(error)
    }
}

start()