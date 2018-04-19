var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//define player Schema for the database
var schema = new Schema({
  username: {type: String, required:true},
  password: {type: String, required:true},
  createdAt: {type: Date},
  updatedAt: {type: Date}
});

// set a creation date, if a creation date is already set, an update date is set
schema.pre('save', function(next){
  if (!this.createdAt){
    this.createdAt = new Date();
  }else{
    this.updatedAt = new Date();
  }
  next();
})

module.exports = mongoose.model("User", schema);
