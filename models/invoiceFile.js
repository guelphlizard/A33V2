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
receiptNumber:{type:String},
month:{type:String},
filename:{type:String},
year:{type:Number},
date:{type:String},
type:{type:String},
type1:{type:String},
term:{type:Number, },
invoiceNumber:{type:Number},
status:{type:String },
name:{type:String },
description:{type:String },
amountPaid:{type:Number },
amountDue:{type:Number },
invoiceAmountPaid:{type:Number },
invoiceAmountDue:{type:Number },
studentBalance:{type:Number },
remainingBalance:{type:Number, },
datePaid:{type:String}
})

module.exports = mongoose.model('invoiceFile1', invoiceFile1Schema );