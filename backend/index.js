import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from './routes/booksRoute.js';

const app = express();

app.use(express.json());

app.get('/', (req, res)=>{
  console.log(req)
  return res.status(234).send("Hello");
});


app.use('/books', booksRoute);

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