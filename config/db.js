const mongoose = require("mongoose");

const connectDB = async()=>{
    try{
        const connect =await mongoose.connect("mongodb+srv://sahadmanu:Katta170@cluster0.exbeann.mongodb.net/")
        console.log("Db connected");
    }catch(err){
        console.log("db error",err);
        process.exit(1);
    }
}
module.exports = connectDB;