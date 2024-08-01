const express = require("express");
const app = express();
const chats = require("./data/data");
const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });

app.get("/", (req, res) => {
  res.send("Hello it is running");
});

app.get("/api/chat/", (req, res) => {
  //   console.log(req);
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  console.log(req);
  const user = chats.find((users) => users._id === req.params.id);
  res.send(user);
});

const port = 5000;
app.listen(port, () => console.log(`Server is Running on ${port}`));
