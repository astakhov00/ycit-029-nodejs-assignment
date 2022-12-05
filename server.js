const express = require("express");

const app = express();

const data = [
  {
    id: 1,
    name: "John Doe",
    age: 32,
  },
  {
    id: 2,
    name: "Jane Doe",
    age: 30,
  },
  {
    id: 3,
    name: "John Smith",
    age: 25,
  },
];

// This route gets *ALL* the users
app.get("/api/users", (req, res) => {
  res.json(data);
});

// Add a new route to get a *SINGLE* user (you can use either path param or query param)
app.get("/api/users/:id", (req, res) => {
  const user = data.find((user) => user.id === parseInt(req.params.id));
  if (!user) {
    res.status(404).send("The user with the given ID was not found.");
  }
  res.json(user);
});
// /api/users/1      <-- path param (req.params.id)
// /api/users?id=1   <-- query param (req.query.id)
// BONUS QUESTION - Add routes to implement all the CRUD operations (POST, PUT, DELETE)

// POST - Create a new user

// app.post("/api/users", (req, res) => {
//   const user = {
//     id: data.length + 1,
//     name: req.body.name,
//     age: req.body.age,
//   };
//   data.push(user);
//   res.json(user);
// });

// PUT - Update an existing user

// app.put("/api/users/:id", (req, res) => {
//   const user = data.find((user) => user.id === parseInt(req.params.id));
//   if (!user) {
//     res.status(404).send("The user with the given ID was not found.");
//   }
//   user.name = req.body.name;
//   user.age = req.body.age;
//   res.json(user);
// });

// DELETE - Delete an existing user

// app.delete("/api/users/:id", (req, res) => {
//   const user = data.find((user) => user.id === parseInt(req.params.id));
//   if (!user) {
//     res.status(404).send("The user with the given ID was not found.");
//   }
//   const index = data.indexOf(user);
//   data.splice(index, 1);
//   res.json(user);
// });



app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
