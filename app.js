const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const bucketlist = require("./controllers/bucketlist");

//connect mongoose to our database
mongoose.connect(config.database);

// initialize our app variable
// the app object gets instantiated on the creation of the Express web server.
const app = express();

// declaring Port
const port = 8080;

// load middleware into our Express server by specifying them with app.use()
// middleware for CORS
app.use(cors());

// middleware for bodyparsing using both json and urlencoding
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// express.static is a built in middleware function to serve static files
// tell express server public folder is the place to look for the static files
app.use(express.static(path.join(__dirname, "public")));

// routing all HTTP requests to /bucketlist to bucketlist controller
app.use("/bucketlist", bucketlist);

// add routes
// get method invoked on the app corresponds to the GET HTTP method.
// two parameters:
//  1. path or route for which the middleware function should be applied
//  2. the actual middleware itself
//      it takes three arguments
//          1. req which is corresponds to the HTTP Request
//          2. res which is corresponds to the HTTP Response
//          3. next which is an optional callback argument that should be invoked if there are other subsequent middlewares that follow this one
app.get("/", (req, res) => {
  res.send("Invalid page");
});

// listen to port 3000
app.listen(port, () => {
  console.log(`Starting the server at port ${port}`);
});
