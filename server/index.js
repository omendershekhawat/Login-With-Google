import dotenv from "dotenv";
import express  from "express";
import  cors  from "cors";
import conn from "./db/conn.js"
const PORT = 6005; 


const app = express()


app.use(cors({
    origin:"http://localhost:3001/",
    method: "get, post ,put ,delete ",
    Credentials:true
}));
app.use (express.json());   

app.get("/",(req,res)=>{
    res.status(200).json("server start")
});

app.listen(PORT,()=>{
    console.log(`servwr started at port no ${PORT}`)
})
