import mongoose from "mongoose";
import express from "express";
import studentModel from "./models/studentModel.js";
const app = express();
app.use(express.json());
await mongoose.connect("mongodb://localhost:27017/collage").then(() => {
  console.log("______________mongoose connect____________")
});

app.get("/", async (req, res) => {
  const studentData = await studentModel.find()
  res.send(studentData);
});

app.post("/save", async (req, res) => {
  console.log(req.body);
  const studentData = await studentModel.create(req.body);
  console.log(studentData);
  const { name, age, email } = req.body;
  if (!req.body || !name || !age || !email) {
    res.send({
      message: "data not saved",
      success: false,
      storedInfo: null
    })
  }

  res.send({
    message: "data saved",
    success: true,
    storedInfo: studentData
  })
});
app.put("/update/:id", async (req, res) => {
  const id = req.params.id;
  console.log(req.body, id);
  const studentData = await studentModel.findByIdAndUpdate(id, { ...req.body })
  res.send({
    message: "data updated",
    success: true,
    info: studentData
  })

})
app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  console.log(req.body, id);
  const studentData = await studentModel.findByIdAndDelete(id, { ...req.body });
  console.log(studentData);
  res.send({
    message: "data deleted",
    success: true,
    info: studentData
  });
})

app.listen(3200);

// async function dbConnections() {
//   await mongoose.connect("mongodb://localhost:27017/collage")
//   const schema = mongoose.Schema({
//     name: String,
//     age: Number,
//     email: String
//   })
//   const studentsModel = mongoose.model('students', schema);
//   const result = await studentsModel.find();
//   console.log(result);


// };
// dbConnections();

