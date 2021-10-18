var express = require("express");

var router = express.Router();

router.get("/", function(req, res) {
  res.render("index");
});

router.get("/village-one", function(req, res) {
  res.render("village-one");
})

router.get("/village-two", function(req, res) {
  res.render("village-two");
})

router.get("/village-three", function(req, res) {
  res.render("village-three");
})

router.get("/studio", function(req, res) {
  res.render("studio")
})

router.get("/park", function(req, res) {
  res.render("park");
})

router.get("/beach", function(req, res) {
  res.render("beach");
})

router.get("/island", function(req, res) {
  res.render("island")
})

router.get("/arctic", function(req, res) {
  res.render("arctic");
})

router.get("/exit", function(req, res) {
  res.render("exit");
})

router.get("/submission", function(req, res) {
  res.render("submission");
})

module.exports = router;
