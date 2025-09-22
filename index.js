// import express from "express";
// import multer from "multer";

// const app = express();

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'upload');
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   }
// })
// const upload = multer({ storage });
// app.get("/", (req, res) => {
//   res.send(`
//     <form action="/upload" method="post" enctype="multipart/form-data">
//     <input type="file" name="myfile"/>
//     </br>
//     <button>Uploadfile</button>
//     </form>
//     `)
// });
// app.post("/upload", upload.single('myfile'), (req, res) => {
//   res.send({
//     message: "fileUploaded",
//     success: true,
//     Info: req.file
//   })
// })
// app.listen(3200)

// connect atlas with node js

// import { MongoClient } from "mongodb";
// const url = 'mongodb+srv://shineinfosoft62:shineinfosoft62@cluster0.mfbl0dp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
// const database = "school";
// const collection = "student";
// const client = new MongoClient(url);
// client.connect().then(() => {
//   console.log(".........connect........");

// })

// async function connection() {
//   const db = client.db(database);
//   const collectionResult = db.collection(collection);
//   const result = await collectionResult.find().toArray();
//   console.log(result);
// }
// connection();


// cookies set and get

// import { name } from "ejs";
// import express from "express";
// const app = express();

// app.set("view engine", 'ejs');
// app.use(express.urlencoded({ extended: true }))

// app.get("/login", (req, res) => {
//   res.render("login");
// });

// app.post("/profile", (req, res) => {
//   res.setHeader('set-cookie', "login=true");
//   res.setHeader('set-cookie', "name=" + req.body.name);

//   res.render("profile");
// });

// app.get("/", (req, res) => {
//   let cookiesData = req.get('cookie');
//   cookiesData = cookiesData.split(";");
//   console.log(cookiesData);
//   cookiesData = cookiesData[4].split("=");
//   console.log(cookiesData[4]);


//   res.render("home", { name: cookiesData[1] });
// });

// app.listen(3200);

/* *** set session */

// import express from "express";
// import session from "express-session";
// const app = express();

// app.set("view engine", 'ejs');
// app.use(express.urlencoded({ extended: true }));

// app.use(session({
//   secret: "apple",
// }))

// app.get("/login", (req, res) => {
//   res.render("login");
// });
// app.post("/profile", (req, res) => {
//   req.session.data = req.body
//   console.log(req.session.data);
//   res.render('profile');

// })
// app.get("/", (req, res) => {
//   const data = req.session.data;
//   console.log(data);
//   res.render('home', { data });
// })



// app.listen(3200);

/** email sending with node js
 * 
 */
import express, { text } from "express";
import nodemailer from 'nodemailer';

const app = express();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {

    user: "hiralgujarati6539@gmail.com",
    pass: "qxmw ytmb efja pezk",
  }
})
// app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.set("view engine", 'ejs');
app.get("/mail", (req, res) => {
  res.render('mail');
});

app.post("/submit-email", (req, res) => {
  console.log(req.body)
  const mailoptions = {
    from: 'hiralgujarati6539@gmail.com',
    to: 'hiralgujarati6539@gmail.com',
    subject: req.body.subject,
    text: req.body.mail
  }
  transporter.sendMail(mailoptions, (error, info) => {
    if (error) {
      req.send("error in operation");
    }
    else {
      req.send("mail send");
    }
  })
  res.send("email send")
})
app.listen(3200);

