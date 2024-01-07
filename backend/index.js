import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";

const app = express();

app.get('/', (req, res)=>{
  console.log(req)
  return res.status(234).send("Welcome to MERN STACK TUTORIAL");
});




mongoose
.connect(mongoDBURL)
.then(()=>{
  console.log(`App is connected  to database`);
  app.listen(PORT, ()=>{
    console.log(`App is listening to port ${PORT}`);
  })
})
.catch((error)=>{
  console.log(error);
})