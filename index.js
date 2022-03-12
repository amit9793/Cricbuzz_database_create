const express = require("express");

const app = express();
const importdata = require("./data.json");
const marsh = require("./Marsh.json");
const sma = require("./sma.json");
const t20 = require("./t20.json");
const wbbl = require("./wbbl.json");
const women = require("./women.json");
const worldtest = require("./worldtest.json");
let port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/data", (req, res) => {
  res.send(importdata);
});
app.get("/marsh", (req, res) => {
  res.send(marsh);
});
app.get("/sma", (req, res) => {
  res.send(sma);
});
app.get("/t20", (req, res) => {
  res.send(t20);
});
app.get("/wbb1", (req, res) => {
  res.send(wbbl);
});
app.get("/women", (req, res) => {
  res.send(women);
});
app.get("/worldtest", (req, res) => {
  res.send(worldtest);
});

app.listen(port, () => {
  console.log("port is running");
});
