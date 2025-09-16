/*
===========================
simple middleware and route
===========================

*/

// import express from 'express';

// const app = express();


// app.use((req, res, next) => {
//   console.log("user is accessing" + req.url + " page");
//   next();
// });


// app.get("/", (req, res) => {
//   res.send("Home page")
// })

// app.get("/users", (req, res) => {
//   res.send("users page")
// })

// app.get("/products", (req, res) => {
//   res.send("products page")
// })

// app.listen(3200)
/* ====================

middleware age check

========================
*/

// import express from 'express';
// const app = express();

// function ageCheck(req, res, next) {
//   if (!req.query.age || req.query.age < 18) {
//     res.send("Alert !you can not access this page ")
//   }
//   else {
//     next()
//   }
// }
// app.use(ageCheck);

/* Ip check */

// function ipCheck(req, res, next) {

//   const ip = req.socket.remoteAddress
//   console.log(ip);
//   if (ip.includes('192.168.1.82')) {
//     res.send("Alert! you can not access this page")
//   }
//   else {
//     next();

//   }

// }

// app.use(ipCheck)

// app.get("/", (req, res) => {
//   res.send("hello from home")
// });
// app.get("/login", (req, res) => {
//   res.send("hello from login")
// });
// app.get("/admin", (req, res) => {
//   res.send("hello from admin")
// });

// app.listen(3200);

/*
====================
route middleware
====================
*/

// import express from 'express';
// const app = express();

// function checkAgeRouteMiddleware(req, res, next) {
//   console.log(req.query.age);

//   if (!req.query.age || req.query.age < 18) {
//     res.send("you are not allowed to use this website")
//   }
//   else {
//     next();
//   }
// }
// function checkUrlRouteMiddleware(req, res, next) {
//   console.log("this request url", req.url);
//   next();
// }


// app.get("/", (req, res, next) => {
//   res.send("<h1>Home page</h1>");
// });
// app.get("/login", checkUrlRouteMiddleware, (req, res, next) => {
//   res.send("<h1>login page</h1>");
// });
// app.get("/users", checkAgeRouteMiddleware, checkUrlRouteMiddleware, (req, res, next) => {
//   res.send("<h1>users page</h1>");
// });
// app.get("/products", checkUrlRouteMiddleware, (req, res, next) => {
//   res.send("<h1>products page</h1>");
// });

// app.listen(3200);


/*
===================
built-in middleware
===================
*/


// import express from 'express';
// import path from 'path';
// const app = express();


// app.use(express.urlencoded({ extended: false }))
// app.use(express.static('public'));




// app.get("", (req, res) => {
//   const filepath = path.resolve('view/home.html')
//   res.sendFile(filepath);
// })
// app.get("/login", (req, res) => {
//   res.send(`
//     <form action="/submit" method="post">
//     <input type="text" placeholder="Enter your name" name="name"/>
//     <input type="text" placeholder="Enter your password" name="password"/>
//     <button>click</button>
//     </form>
//     `);
// })
// app.post("/submit", (req, res) => {
//   console.log(req.body)
//   res.send("submit page");
// })


// app.listen(3200)



/*==================
external middleware
morgan is external middleware it is a not a part of express js
====================
*/

// import express from "express";
// import morgan from "morgan";
// const app = express();
// app.use(morgan('dev'));

// app.get("/", (req, res) => {
//   res.send("homepage")
// })
// app.get("/users", (req, res) => {
//   res.send("users page")
// })
// app.get("/wait", (req, res) => {
//   setTimeout(() => {
//     res.send("wait for a minute");
//   }, 1000)

// })
// app.listen(3200);
/* ===============
  error handling in express js
  ================

*/

// import express from "express";
// const app = express();

// app.get('/', (req, res) => {
//   res.send("home page")
// });
// app.get('/user', (req, res) => {
//   res.send("user page")
// });
// app.get('/error', (req, res, next) => {
//   const error = new Error('');
//   error.status = 404;
//   next(error);
//   console.log(error)

//   res.send("error page")

// });


// app.use((error, req, res, next) => {
//   res.status(error.status || 500).send("Try after some time");
// });


// app.listen(3400)

/*
=====================
EJS : embedded java script
used in views folder with ejs extension

*/


// import express from "express";
// const app = express();
// app.set('view engine', 'ejs');


// app.get("/", (req, res) => {
//   res.render("home", { name: 'hiral', ytchannel: 'timing' });
// });

// app.listen(3400);

/*
form submitting using ejs
*/
// import express from "express";

// const app = express();
// app.use(express.urlencoded({ extended: false }))
// app.set('view engine', 'ejs')
// app.get("/add-user", (req, res) => {
//   res.render('addUsers');
// });

// app.post("/submit-user", (req, res) => {
//   console.log(req.body);
//   res.render('submitUsers', req.body);

// });
// app.get("/users", (req, res) => {
//   const users = ['ana', 'sidhu', 'pitter', 'sam', 'john'];

//   res.render('users', { users: users, isLogin: false });
// });
// app.listen(3400);

// import express from "express";
// import { handleUsers } from "./controller/userController.js";
// const app = express();
// app.set('view engine', 'ejs')
// app.get("/users", handleUsers)
// app.listen(3200)

// import express from "express";
// const app = express();

// app.get("/", (req, res) => {
//   const users = ['anil', 'sidhu', 'jay', 'jon'];
//   let data = `<ul>`;
//   for (let i = 0; i < users.length; i++) {
//     data += `<li><a href="user/${users[i]}">${users[i]}</a></li>`
//     console.log(users[i]);

//   }
//   data += `</ul>`
//   res.send(data);

// })

// app.get("/user/:name", (req, res) => {
//   console.log("user is", req.params.name);
//   const userName = req.params.name;
//   res.send(`this is ${userName}'s profile page`)
// })
// app.listen(3200);

import express from "express";
import userData from './users.json' with { type: 'json' }
console.log(userData);
const app = express();

app.get("/", (req, res) => {
  res.send(userData);
});

app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  let filteredData = userData.filter((user) => user.id == id)
  res.send(filteredData);
})
app.get("/username/:name", (req, res) => {
  const name = req.params.name;
  console.log(name);
  let filteredData = userData.filter((user) => user.name.toLowerCase() == name.toLowerCase())
  res.send(filteredData);
})
app.listen(3200);