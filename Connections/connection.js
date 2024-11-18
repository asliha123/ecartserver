// connect mdb database to node-mongoose

const mongoose=require('mongoose')

mongoose.connect(process.env.BASE_URL).then(()=>{
    console.log("__________MongoDb Atlas Connected Successfully__________");
    
}).catch((err)=>{
    console.log(`__MDB not connected reason:${err}__`);
    
})