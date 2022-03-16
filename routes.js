var express = require("express");

var router = express.Router();

router.get("/", function(req, res) {
  res.render("index")
});

router.get("/village-one", function(req, res) {
  res.render("village-one")
})

router.get("/village-two", function(req, res) {
    res.render("village-two")
})

router.get("/village-three", function(req, res) {
    res.render("village-three")
})

router.get("/studio", function(req, res) {
    res.render("studio")
})

router.get("/plaza", function(req, res) {
    res.render("plaza")
})

router.get("/museum", function(req, res) {
    res.render("museum")
})

router.get("/museum-two", function(req, res) {
    res.render("museum-two")
})

router.get("/park", function(req, res) {
    res.render("park")
})

router.get("/beach", function(req, res) {
    res.render("beach")
})

router.get("/beach-town", function(req, res) {
    res.render("beach-town")
})

router.get("/island", function(req, res) {
    res.render("island")
})

router.get("/arctic", function(req, res) {
    res.render("arctic")
})

router.get("/space", function(req, res) {
    res.render("space")
})

router.get("/sWLq4", function(req, res) {
    res.render("sWLq4")
})

router.get("/sewer", function(req, res) {
    res.render("sewer")
})

router.get("/apartment", function(req, res) {
    res.render("apartment")
})

router.get("/exit", function(req, res) {
    res.render("exit")
})

router.get("/submission", function(req, res) {
    res.render("submission")
})

router.get("/encryption", function(req, res) {
    res.render("encryption")
})

module.exports = router;
