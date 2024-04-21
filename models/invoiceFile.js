const mongoose = require('mongoose');


var invoiceFile1Schema = new mongoose.Schema({

studentName:{type:String},
studentId:{type:String},
studentId2: {type: String},
studentAddress:{type:String},
studentEmail:{type:String},
studentMobile:{type:String},
invoiceId:{type:Number},
invoiceCode:{type:Number},
class1:{type:String},
grade:{type:Number},
css:{type:String},
receiptNumber:{type:Number},
month:{type:String},
filename:{type:String},
fileId:{type:String},
year:{type:Number},
date:{type:String},
type:{type:String},
type1:{type:String},
term:{type:Number },
invoiceNumber:{type:Number},
invoiceNumberText:{type:String},
status:{type:String },
name:{type:String },
description:{type:String },
amountPaid:{type:Number },
amountDue:{type:Number },
invoiceAmountPaid:{type:Number },
invoiceAmountDue:{type:Number },
invoiceTotal:{type:Number },
studentBalance:{type:Number },
remainingBalance:{type:Number, },
discount: {type: Number },
datePaid:{type:String},
amountBefore:{type:Number}
})

module.exports = mongoose.model('invoiceFile1', invoiceFile1Schema );