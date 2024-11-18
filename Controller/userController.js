const users = require("../Models/userModels");

exports.register=async(req,res)=>{
    const {username,email,password} =req.body
    try{
       const user= await  users.findOne({email})
       if(user){
           res.status(400).json("user already exist , please login")
       }
       else{
         const newUser= new users({
            username,email,password
          })
        //   save to mongodb
         await newUser.save()
         res.status(201).json(newUser)

       }
    }
    catch{
             res.status(400).json(" register api failed")
    }
}

exports.login=async(req,res)=>{
  const {email,password}=req.body
 try{
      const user= await  users.findOne({email,password})
      if(user){
         res.status(200).json(user)
      }
      else{
         res.status(401).json("incorrect email or password")
      }
 }
 catch{
     res.status(400).json("login api failed")

 }
}