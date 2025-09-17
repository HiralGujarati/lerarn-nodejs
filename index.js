import express from "express";

import { MongoClient, ObjectId } from "mongodb";
const dbName = "collage";
const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

const app = express();
app.set("view engine", 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

client.connect().then((connection) => {
  const db = connection.db(dbName);
  app.get("/api", async (req, res) => {
    const collection = db.collection("students");
    const student = await collection.find().toArray();
    console.log("students data", student);
    res.send(student)
  })
  app.get("/ui", async (req, res) => {
    const collection = db.collection("students");
    const students = await collection.find().toArray();
    console.log("students data", students);
    res.render("students", { students })
  })
  app.get("/add", (req, res) => {
    res.render("add-students");
  });
  app.post("/add-student", async (req, res) => {

    const collection = db.collection("students");
    const result = await collection.insertOne(req.body)
    res.send("student data");
  });
  app.post("/add-student-api", async (req, res) => {
    console.log(req.body);
    const { name, email, age } = req.body;
    if (!name || !email || !age) {
      res.send({ message: "operation failed", success: false });
      return false;
    }
    const collection = db.collection("students");
    const result = await collection.insertOne(req.body);


    res.send({ message: "data stored", success: true, result: result });
  });
  app.delete("/delete/:id", async (req, res) => {
    console.log(req.params.id);
    const deleteUser = req.params.id;
    const collection = db.collection("students");
    const result = await collection.deleteOne({ id: new ObjectId(deleteUser) });
    if (result) {
      res.send({
        message: "student data deleted",
        success: true
      })
    }
    else {
      res.send({
        message: "student data not deleted Try again!!",
        success: false
      })
    }
  });
  app.get("/ui/delete/:id", async (req, res) => {
    console.log(req.params.id);

    const collection = db.collection("students");
    const result = await collection.deleteOne({ _id: new ObjectId(req.params.id) });
    if (result) {
      res.send(res.send("<h1>students recorded deleted</h1>"))
    }
    else {
      res.send(res.send("<h1>students recorded not deleted</h1>"))
    }
  });
  app.get("/ui/student/:id", async (req, res) => {
    const id = req.params.id;
    console.log(id)
    const collection = db.collection("students");
    const result = await collection.findOne({ _id: new ObjectId(id) });

    res.render('update-students', { result });
  });
  app.get("/student/:id", async (req, res) => {
    const id = req.params.id;
    console.log(id)
    const collection = db.collection("students");
    const result = await collection.findOne({ _id: new ObjectId(id) });

    res.send({ message: "data fetched", success: true, result: result });
  })
  app.post("/ui/update/:id", (req, res) => {
    // console.log(req.body);
    console.log(req.params.id);
    const collection = db.collection("students");
    const filter = { _id: new ObjectId(req.params.id) }
    const update = { $set: req.body };
    const result = collection.updateOne(filter, update)
    if (result) {
      res.send("data updated");
    } else {
      res.send("data not  updated");
    }

  });
  app.put("/update/:id", (req, res) => {
    console.log(req.body);
    console.log(req.params.id);
    const collection = db.collection("students");
    const filter = { _id: new ObjectId(req.params.id) };
    const update = { $set: req.body };
    const result = collection.updateOne(filter, update);
    if (result) {
      res.send({
        message: 'data updated',
        success: true,
        result: req.body
      })
    } else {
      res.send({
        message: "data not updated",
        success: false,
        result: null
      })
    }
  })

})


app.listen(3200);
