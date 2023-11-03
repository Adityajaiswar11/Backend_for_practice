const express = require('express')
const app = express()
const port = 5000

app.get('/',(req,res)=>{
      res.send("<h1>Hello world</h1>")
})

app.get('/login',(req,res)=>{
    res.send("<h2>This is my first server</h2>")
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})