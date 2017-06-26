const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const PORT = process.env.PORT || 3000;
const models = require('../Database/models/models');
const path = require('path');

const app = express()
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended:true }))
  .use(express.static(path.resolve(__dirname,'../public')))
  .use(morgan('dev'))
  .use(require('./routes/userRouter'))
  .use(require('./routes/tripRouter'))
  .use(require('./routes/userTripRouter'))
  .use(require('./routes/userFriendRouter'))

app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.listen(PORT, err=>{
  if (err) {
    console.log(err)
  }
  console.log(`Server successfully connected on PORT : ${PORT}`)
})

