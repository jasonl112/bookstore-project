import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";

const app = express();

app.use(express.json());

app.get('/', (req, res)=>{
  console.log(req)
  return res.status(234).send("Hello");
});

// Route to post book 
app.post('/books', async (req,res)=>{
  try{
    if (
      !req.body.title ||
      !req.body.author ||
      ! req.body.publishYear
    )
    {
      return res.status(400).send({
        message: "Send all required fields: title, author, publish Year"
      });
    }

    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    }
    const book = await Book.create(newBook)

    return res.status(201).send(book);
  }
  catch(err){
    console.log(err);
    res.status(500).send({ message: err.message})
  }
})

// Route to Get ALL Books form Database
app.get('/books', async (req,res)=>{
  try{
    const books = await Book.find({});
    return res.status(200).json({
      count: books.length,
      data: books
    })
  }
  catch(err){
    console.log(err);
    res.status(500).send({ message: err.message})
  }
})

// Route to find one book by id
app.get('/books/:id', async (req,res)=>{
  try{
    const { id } = req.params;
    const book = await Book.findById(id)
    return res.status(200).json({book})
  }
  catch(err){
    console.log(err);
    res.status(500).send({ message: err.message})
  }
})

// Route to update a book 
app.put('/books/:id', async (req,res)=>{
  try{
    if (
      !req.body.title ||
      !req.body.author ||
      ! req.body.publishYear
    )
    {
      return res.status(400).send({
        message: "Send all required fields: title, author, publish Year"
      });
    }

    const { id } = req.params;

    const result = await Book.findByIdAndUpdate(id, req.body);

    if (!result)
    {
      return res.status(404).json({ message: 'Book not found'})
    }

    return (res.status(200).send({ message: "Book updated succesfully!"}))
  }
  catch(err){
    console.log(err);
    res.status(500).send({ message: err.message})
  }
})

// Route to delete a book
app.delete('/books/:id', async (req,res)=>{
  try{
    const { id } = req.params;
    const result = await Book.findByIdAndDelete(id);
    if (!result)
    {
      return res.status(404).json({ message: 'Book not found'})
    }

    return (res.status(200).send({ message: "Book updated succesfully!"}))
  }
  catch(err){
    console.log(err);
    res.status(500).send({ message: err.message})
  }
})
    

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