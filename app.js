var express = require("express");
var bodyParser = require('body-parser');
var path = require("path");
var axios = require('axios');
var fs = require('fs');

var routes = require("./routes");

var app = express();
app.use(bodyParser({ limit: '5mb' }))

app.use(express.static(path.resolve(__dirname, "public")));

app.set("port", process.env.PORT || 3000);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(routes);

app.post("/upload", function(req, res) {
  console.log(fs.readFileSync(req.body));
  // axios("https://content.dropboxapi.com/2/files/upload", {
  //   method: "POST",
  //   mode: 'cors',
  //   headers: {
  //     "Authorization": `Bearer 3NDeNoD2r0wAAAAAAAAAAYo6xjTEyQ11TIETnOY-JZK4AUFIAMq-3f4O6xsgdSNK`,
  //     "Content-Type": "application/octet-stream",
  //     "Dropbox-API-Arg": JSON.stringify({
  //       "path":   `/Volt Onboarding/starset/test2.txt`,
  //       "mode": "add",
  //       "autorename": true,
  //       "mute": false,
  //       "strict_conflict": false
  //     })
  //   }
  // })
})

app.listen(app.get("port"), function() {
  console.log("App start on port " + app.get("port"));
});

