import mongoose, { connect } from "mongoose";

const DB = process.env.DATABASE;

mongoose.connect(DB, {
    useUndefineTopology:true,
    useNewUrlParser:true    
}).then(()=>console.log ("database connected")).catch((err)=>console.log("err",err))