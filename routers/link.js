var express = require('express')
var router = express.Router()
const { address, plan, port, dynmap, webop } = require("../config.json")

// define the home page route
router.get('/plan', function (req, res) {
  res.redirect(`http://${address}:${plan}`)
})

router.get('/map', function (req, res) {
  res.redirect(`http://${address}:${dynmap}`)
})

module.exports = router