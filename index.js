require('dotenv').config()


// import express
const express=require('express')

const cors=require('cors')
const router=require('./Routes/routes')

// create server
const cartServer=express()



cartServer.use(cors())
// for converting json type data to js 
cartServer.use(express.json())

// connection.js connect to index.js
require('./Connections/connection')
cartServer.use(router)

// we have to resolve this in index also
// cartServer.post('/postexc',(req,res)=>{
//     res.json(123)
// })

// for running server
const PORT=8001 || process.env.port
cartServer.listen(PORT,()=>{
    console.log(`___________Ecart-Server Started At Port Number ${PORT}__________`);
    
})
