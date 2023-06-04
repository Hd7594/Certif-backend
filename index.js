const express = require("express");

const mongoose = require("mongoose");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "test" });
});

app.listen(process.env.PORT, () => {
  console.log("Server started");
});
