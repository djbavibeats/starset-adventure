var express = require("express");

var router = express.Router();

router.get("/", function(req, res) {
  const reject = () => {
    res.setHeader('www-authenticate', 'Basic')
    res.sendStatus(401)
  }

  const authorization = req.headers.authorization

  if(!authorization) {
    return reject()
  }

  const [username, password] = Buffer.from(authorization.replace('Basic ', ''), 'base64').toString().split(':')

  if(! (username === process.env.SS_USER && password === process.env.SS_PASSWORD)) {
    return reject()
  } else {
    return res.render("index")
  }
});

router.get("/village-one", function(req, res) {
  const reject = () => {
    res.setHeader('www-authenticate', 'Basic')
    res.sendStatus(401)
  }

  const authorization = req.headers.authorization

  if(!authorization) {
    return reject()
  }

  const [username, password] = Buffer.from(authorization.replace('Basic ', ''), 'base64').toString().split(':')

  if(! (username === process.env.SS_USER && password === process.env.SS_PASSWORD)) {
    return reject()
  } else {
    res.render("village-one")
  }
})

router.get("/village-two", function(req, res) {
  const reject = () => {
    res.setHeader('www-authenticate', 'Basic')
    res.sendStatus(401)
  }

  const authorization = req.headers.authorization

  if(!authorization) {
    return reject()
  }

  const [username, password] = Buffer.from(authorization.replace('Basic ', ''), 'base64').toString().split(':')

  if(! (username === process.env.SS_USER && password === process.env.SS_PASSWORD)) {
    return reject()
  } else {
    res.render("village-two")
  }
})

router.get("/village-three", function(req, res) {
  const reject = () => {
    res.setHeader('www-authenticate', 'Basic')
    res.sendStatus(401)
  }

  const authorization = req.headers.authorization

  if(!authorization) {
    return reject()
  }

  const [username, password] = Buffer.from(authorization.replace('Basic ', ''), 'base64').toString().split(':')

  if(! (username === process.env.SS_USER && password === process.env.SS_PASSWORD)) {
    return reject()
  } else {
    res.render("village-three")
  }
})

router.get("/studio", function(req, res) {
  const reject = () => {
    res.setHeader('www-authenticate', 'Basic')
    res.sendStatus(401)
  }

  const authorization = req.headers.authorization

  if(!authorization) {
    return reject()
  }

  const [username, password] = Buffer.from(authorization.replace('Basic ', ''), 'base64').toString().split(':')

  if(! (username === process.env.SS_USER && password === process.env.SS_PASSWORD)) {
    return reject()
  } else {
    res.render("studio")
  }
})

router.get("/museum", function(req, res) {
  const reject = () => {
    res.setHeader('www-authenticate', 'Basic')
    res.sendStatus(401)
  }

  const authorization = req.headers.authorization

  if(!authorization) {
    return reject()
  }

  const [username, password] = Buffer.from(authorization.replace('Basic ', ''), 'base64').toString().split(':')

  if(! (username === process.env.SS_USER && password === process.env.SS_PASSWORD)) {
    return reject()
  } else {
    res.render("museum")
  }
})

router.get("/park", function(req, res) {
  const reject = () => {
    res.setHeader('www-authenticate', 'Basic')
    res.sendStatus(401)
  }

  const authorization = req.headers.authorization

  if(!authorization) {
    return reject()
  }

  const [username, password] = Buffer.from(authorization.replace('Basic ', ''), 'base64').toString().split(':')

  if(! (username === process.env.SS_USER && password === process.env.SS_PASSWORD)) {
    return reject()
  } else {
    res.render("park")
  }
})

router.get("/beach", function(req, res) {
  const reject = () => {
    res.setHeader('www-authenticate', 'Basic')
    res.sendStatus(401)
  }

  const authorization = req.headers.authorization

  if(!authorization) {
    return reject()
  }

  const [username, password] = Buffer.from(authorization.replace('Basic ', ''), 'base64').toString().split(':')

  if(! (username === process.env.SS_USER && password === process.env.SS_PASSWORD)) {
    return reject()
  } else {
    res.render("beach")
  }
})

router.get("/island", function(req, res) {
  const reject = () => {
    res.setHeader('www-authenticate', 'Basic')
    res.sendStatus(401)
  }

  const authorization = req.headers.authorization

  if(!authorization) {
    return reject()
  }

  const [username, password] = Buffer.from(authorization.replace('Basic ', ''), 'base64').toString().split(':')

  if(! (username === process.env.SS_USER && password === process.env.SS_PASSWORD)) {
    return reject()
  } else {
    res.render("island")
  }
})

router.get("/arctic", function(req, res) {
  const reject = () => {
    res.setHeader('www-authenticate', 'Basic')
    res.sendStatus(401)
  }

  const authorization = req.headers.authorization

  if(!authorization) {
    return reject()
  }

  const [username, password] = Buffer.from(authorization.replace('Basic ', ''), 'base64').toString().split(':')

  if(! (username === process.env.SS_USER && password === process.env.SS_PASSWORD)) {
    return reject()
  } else {
    res.render("arctic")
  }
})

router.get("/space", function(req, res) {
  const reject = () => {
    res.setHeader('www-authenticate', 'Basic')
    res.sendStatus(401)
  }

  const authorization = req.headers.authorization

  if(!authorization) {
    return reject()
  }

  const [username, password] = Buffer.from(authorization.replace('Basic ', ''), 'base64').toString().split(':')

  if(! (username === process.env.SS_USER && password === process.env.SS_PASSWORD)) {
    return reject()
  } else {
    res.render("space")
  }
})

router.get("/exit", function(req, res) {
  const reject = () => {
    res.setHeader('www-authenticate', 'Basic')
    res.sendStatus(401)
  }

  const authorization = req.headers.authorization

  if(!authorization) {
    return reject()
  }

  const [username, password] = Buffer.from(authorization.replace('Basic ', ''), 'base64').toString().split(':')

  if(! (username === process.env.SS_USER && password === process.env.SS_PASSWORD)) {
    return reject()
  } else {
    res.render("exit")
  }
})

router.get("/submission", function(req, res) {
  const reject = () => {
    res.setHeader('www-authenticate', 'Basic')
    res.sendStatus(401)
  }

  const authorization = req.headers.authorization

  if(!authorization) {
    return reject()
  }

  const [username, password] = Buffer.from(authorization.replace('Basic ', ''), 'base64').toString().split(':')

  if(! (username === process.env.SS_USER && password === process.env.SS_PASSWORD)) {
    return reject()
  } else {
    res.render("submission")
  }
})

module.exports = router;
