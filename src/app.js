const express = require('express');
const models = require('./database/models');
const app = express();
app.set('port',process.env.PORT||3000)
app.get('/',(req,res)=>{
  models.Users.findAll().then((data)=>{
    res.json(data)

  })
})
module.exports = app;
