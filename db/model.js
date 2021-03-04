const mongoose = require('./db')
const Schema = mongoose.Schema;
 
const testSchema = new Schema({
  name: String,
  age : Number,
  gren: Number
});
 
const test = mongoose.model('test', testSchema);

const model = {test};

module.exports = model;