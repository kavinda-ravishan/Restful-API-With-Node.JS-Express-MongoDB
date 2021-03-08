const express = require("express");
const app = express();
const mongoose = require("mongoose");
const BodyParser = require("body-parser");
require("dotenv/config");
const cors = require("cors");

//Middlewares (for get data from external API)
app.use(cors());

app.use(BodyParser.json());

//Import Routes
const postRoute = require("./routes/posts");
app.use("/posts", postRoute);

//Routes
app.get("/", (req, res) => {
  res.send("We are at home");
});

//connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to DB");
  }
);

//listener
app.listen(3000);
