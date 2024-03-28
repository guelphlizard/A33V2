var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    barcodeNumber:{type:String, required:true},
    name: {type: String, required:true },
    category: { type: String, required:true },
    quantity: {type: Number, required: true},
    description: {type: String, required: true},
    photo: {type: String},
    size: {type: Number},
    rate: {type: Number, required: true},
    zwl: {type: Number, required: true},
    price: {type: Number, required: true},
    vatPrice: {type: Number, required: true},
});

module.exports = mongoose.model('Product', schema);