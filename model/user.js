const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
       String,
      
    },
    age:{
          Number,
        
       },
       mobil:{
          Number,
      
          
       },
},{timestamps:true})

const User = mongoose.model("User",userSchema)

module.exports= User;