const mongoose = require('mongoose');


var invoiceFile1Schema = new mongoose.Schema({

studentName:{type:String},
studentId:{type:String},
studentId2: {type: String},
studentAddress:{type:String},
studentEmail:{type:String},
studentMobile:{type:String},
invoiceId:{type:String},
invoiceCode:{type:String},
class1:{type:String},
grade:{type:Number},
css:{type:String},
receiptNumber:{type:String, required:true},
month:{type:String, required:true},
filename:{type:String, required:true},
year:{type:Number, required:true},
date:{type:String, required:true},
type:{type:String, required:true},
type1:{type:String},
term:{type:Number, required:true},
invoiceNumber:{type:Number, required:true},
status:{type:String, required:true},
description:{type:String, required:true},
amountPaid:{type:Number, required:true},
amountDue:{type:Number, required:true},
datePaid:{type:String, required:true},





})

module.exports = mongoose.model('invoiceFile1', invoiceFile1Schema );