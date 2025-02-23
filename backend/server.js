const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 5000;

// middleware
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Book server ");
});

const bookRoutes = require("./routes/book");
app.use("/api/books", bookRoutes);

const orderRoutes = require("./routes/order");
app.use("/api/orders", orderRoutes);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("App is connect to Database");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err.message));
