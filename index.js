// utils
const express = require("express");
const mongoose = require("mongoose");
const routes = require('./routes/routes');

// server
const app = express();
const port = 3000;

// db
const uri = "mongodb+srv://marmik:jinal@cluster0.go7e9es.mongodb.net/ecom";
const dbConnect = mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log(error));

  // middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

//routes 
// Routes
app.use(routes);
  
// connections
async function startServer() {
  try {
    // Connect to MongoDB
    await dbConnect;
    console.log("Connected to MongoDB");

    // Start the server
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

startServer();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});
