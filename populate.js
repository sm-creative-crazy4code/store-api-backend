// populating the app with data
require('dotenv').config()
// here also we need connection to the database hence importing the module
const connectDB= require("./db/connect")
const product = require("./models/product")
const jsonProduct= require("./products.json")

// setting up function so that the data we are having in the file is automaically inserted inside the database

const start= async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        await product.deleteMany()
        await product.create(jsonProduct)
        console.log("connected to db")
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
        
    }
}
start()