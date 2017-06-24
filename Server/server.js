var express = require('express')
var bodyParser = require('body-parser')
var morgan = require('morgan')
const PORT = process.env.PORT || 3000;
//const db = require('../Database/config')
const models = require('../Database/models/models');
const path = require('path');

var app = express()
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended:true}))
  .use(morgan('dev'))
  .use(express.static(path.resolve(__dirname,'../public')))
  .use(require('./routes/userRouter'))
  .use(require('./routes/tripRouter'))
  .use(require('./routes/userTripRouter'))
  .use(require('./routes/userFriendRouter'))
  // .use(require('./routes/'))



app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.listen(PORT, err=>{
  if (err) {
    console.log(err)
  }
  console.log(`Server successfully connected on PORT : ${PORT}`)
})

