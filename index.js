import express from "express";
// const express = require("express");
const app = express();

app.get("/api/todo", (req, res) => {
  // res.json(todoList);
  res.json({
    hello: "hi",
  });
});

app.listen(4000, () => {
  console.log("server start! 4000");
});
