const mongoose = require('mongoose');


var invoiceFile1Schema = new mongoose.Schema({


studentName:{type:String},
code:{type:String, required:true},
month:{type:String, required:true},
filename:{type:String, required:true},
year:{type:Number, required:true},
date:{type:String, required:true},
type:{type:String, required:true},
term:{type:String, required:true},





})

module.exports = mongoose.model('invoiceFile1', invoiceFile1Schema );