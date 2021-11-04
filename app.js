var express = require("express");
var bodyParser = require('body-parser');
var path = require("path");
var axios = require('axios');
var fs = require('fs');
require('dotenv').config()

var routes = require("./routes");

var app = express();
app.use(bodyParser({ limit: '5mb' }))

app.use(express.static(path.resolve(__dirname, "public")));

app.set("port", process.env.PORT || 3000);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(routes);

app.listen(app.get("port"), function() {
  // console.log("App start on port " + app.get("port"));
});

