import mongoose from "mongoose";


export const connectDB = async() =>{
  try{
    await mongoose.connect(process.env.DB_PATH);
    console.log('Mongo DB Connected');
    
  }catch(err){
    console.log("Error while connecting mongodb",err);
    process.exit(1);
    
  }
}