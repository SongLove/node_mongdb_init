const model = require('./model');


class Mongodb {
  constructor (name) {
    this.model = model[name];
  }
// 查询
  query () {
     return new Promise((resolve, reject) => {
       this.model.find({}, (err, res) => {
         if(err) {
           reject(err)
         }
         resolve(res)
       })
     })
  }
// 保存
  save (obj) {
     const m = new this.model(obj)
     return new Promise((resolve, reject)=> {
       m.save((err, res) => {
         if (err) {
           reject(err)
         }
         resolve(res)
         console.log(res)
       })
     })
     
  }
}
module.exports = Mongodb;
 