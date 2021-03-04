// db/db.js
const mongoose = require('mongoose');
const config = require('../config')

 
mongoose.connect(config.DB_URL,{useNewUrlParser:true, useUnifiedTopology: true});
 
mongoose.connection.on('connected',function() {
   console.log('Mongoose connection open to '+config.serverUrl);
});
/**
* 连接异常 error 数据库连接错误
*/
mongoose.connection.on('error',function(err) {
  console.log('Mongoose connection error: '+ err);
});
/**
* 连接断开 disconnected 连接异常断开
*/
mongoose.connection.on('disconnected',function() {
  console.log('Mongoose connection disconnected');
});
 
module.exports = mongoose