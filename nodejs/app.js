const fs = require("fs");
const path = require("path");

const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/currenttime", function (req, res) {
  res.send("<h1>" + new Date().toISOString() + "/<h1>");
});

app.get("/", function (req, res) {
  res.send(
    '<form action="/store-user" method="POST"><label>Your Name</label><input type="text" name="username"><button>Submit</button></form>'
  );
});

app.post("/store-user", function (req, res) {
  const userName = req.body.username;

  const filePath = path.join(__dirname, "data", "users.json");

  const fileData = fs.readFileSync(filePath);
  const existingUsers = JSON.parse(fileData);

  existingUsers.push(userName);
  fs.writeFileSync(filePath, JSON.stringify(existingUsers));
  res.send("<h1>Username stored!</h1>");
});

app.listen(3000);

// dont need below any more since we are now using express instead
// function handleRequest(request, response) {
//   if (request.url === "/currenttime") {
//     response.statusCode = 200;
//     response.end("<h1>" + new Date().toISOString() + "/<h1>");
//   } else if (request.url === "/") {
//     response.statusCode = 200;
//     response.end("<h1>Hello World!</h1>");
//   }
// }

// const server = http.createServer(handleRequest);

// server.listen(3000); //port 3000 used for dev, 80 or 443 is used for real use case
