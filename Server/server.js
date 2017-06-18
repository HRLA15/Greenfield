var express = require('express')
var bodyParser = require('body-parser')
var morgan = require('morgan')
const PORT = process.env.PORT || 8080;
const db = require('../Database/config')
const models = require('../Database/models/models');

var app = express()
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended:true}))
  .use(morgan('dev'))
  .use(express.static('public'))

app.listen(PORT, err=>{
  if (err) {
    console.log(err)
  }
  console.log(`Server successfully connected on PORT : ${PORT}`)
})