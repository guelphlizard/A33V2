const mongoose = require('mongoose');


var invoiceFile1Schema = new mongoose.Schema({


studentName:{type:String},
code:{type:String, required:true},
month:{type:String, required:true},
filename:{type:String, required:true},
year:{type:Number, required:true},
date:{type:String, required:true},
type:{type:String, required:true},
term:{type:Number, required:true},
invoiceNumber:{type:Number, required:true},
status:{type:String, required:true},
amountPaid:{type:Number, required:true},
amountDue:{type:Number, required:true},
datePaid:{type:String, required:true},





})

module.exports = mongoose.model('invoiceFile1', invoiceFile1Schema );