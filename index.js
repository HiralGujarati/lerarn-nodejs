import express from "express";
import cors from 'cors';

const app = express();
app.use(cors());
app.get("/", (req, res) => {
  res.send({
    "name": "hiral",
    "age": 19,
    "email": "hiral@gmail.com"
  });
});
app.listen(3200)