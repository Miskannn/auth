const express = require("express");
require("dotenv").config()
const mongoose = require("mongoose")
const router = require("./authRouter.js")



const PORT = process.env.PORT || 3000
const app = express();

app.use(express.json())
app.use('/auth', router)


const start = async () =>{
    try {
        await mongoose.connect('mongodb+srv://user:qwerty123@cluster0.zg2pr.mongodb.net/auth_db?retryWrites=true&w=majority')
        app.listen(PORT,() =>{
            console.log(`Server started at port ${PORT}`)
        })
} catch (error) {
    console.log(error)
} 
  }

  start()