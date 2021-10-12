var express = require("express");

var router = express.Router();

router.get("/", function(req, res) {
  res.render("index");
});

router.get("/island", function(req, res) {
  res.render("island");
})

router.get("/mall", function(req, res) {
  res.render("mall");
})

router.get("/plaza", function(req, res) {
  res.render("plaza");
})


module.exports = router;
