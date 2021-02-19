const express = require("express");
const bodyParser = require("body-parser");
var cors = require('cors');
const app = express();
const http = require('http').Server(app);
// const io = require('socket.io')(http,{
//   cors: {
//     origin: "http://localhost:3030",
//     methods: ["GET", "POST"],
//     allowedHeaders: ["Access-Control-Allow-Credentials"],
//     credentials: true
//   }
// });
// io.on('connection', (socket) => {
//   console.log('a user connected');
// });


// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// enable cors
app.use(cors())

//home page
app.get("/", (req, res) => {
  res.json({ message: "Welcome to members application." });
});

require("./app/routes/member.routes.js")(app);

// set port, listen for requests
http.listen(8080, () => {
  console.log("Server is running on port 8080.");
});