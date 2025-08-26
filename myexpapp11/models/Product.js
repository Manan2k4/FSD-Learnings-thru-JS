const mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
    ptype:String,
    pdetails:String,
    psize:String
})

var ProductModel = mongoose.model('products', ProductSchema)

module.exports = ProductModel