var express = require("express")
var hbs = require("hbs")
hbs.registerHelper("equal", require("handlebars-helper-equal"))
var app = express()
app.set("view engine", "hbs")
// etc...
