const express = require("express")
const app = express()

const mongoose = require("mongoose")

const dotenv = require("dotenv")
dotenv.config()



mongoose.connect(process.env.MONGO_URI) 
.then(() => console.log("database is connected"))
.catch((err) => console.error("Error connecting to the database", err) );


const PORT = process.env.PORT 
app.listen (PORT, ()=> console.log("my server is running on port : ", PORT))